import { initializeApp, getApps, FirebaseApp, FirebaseError } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, User, Auth } from "firebase/auth";
import { toast } from "react-hot-toast";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app: FirebaseApp;
let db: Firestore;
let auth: Auth;

if (typeof window !== 'undefined') {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  db = getFirestore(app);
  auth = getAuth(app);
} else {
  app = {} as FirebaseApp;
  db = {} as Firestore;
  auth = {} as Auth;
}

const provider = new GoogleAuthProvider();

const loginWithGoogle = async (): Promise<User | null> => {
  try {
    const messageHandler = (event: MessageEvent) => {
      if (event.data === 'auth-completed') {
        window.removeEventListener('message', messageHandler);
      }
    };
    window.addEventListener('message', messageHandler);

    const result = await signInWithPopup(auth, provider);
    
    if (window.opener) {
      window.opener.postMessage('auth-completed', window.location.origin);
    }
    
    toast.success("Successfully logged in!");
    return result.user;
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          toast.error("Login cancelled. Please try again.");
          break;
        case 'auth/popup-blocked':
          toast.error("Login popup was blocked. Please allow popups for this site.");
          break;
        case 'auth/cancelled-popup-request':
          toast.error("Login request cancelled. Please try again.");
          break;
        case 'auth/network-request-failed':
          toast.error("Network error. Please check your connection and try again.");
          break;
        default:
          console.error("Login error:", error);
          toast.error(`Login failed: ${error.message}`);
      }
    } else {
      console.error("Unexpected login error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
    return null;
  }
};

const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
    if (window.opener) {
      window.opener.postMessage('auth-logout', window.location.origin);
    }
    toast.success("Logged out successfully");
  } catch (error) {
    console.error("Logout error:", error);
    toast.error("Failed to logout. Please try again.");
    throw error;
  }
};

export { db, auth, loginWithGoogle, logout };