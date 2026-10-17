import { Timestamp } from "firebase/firestore";

interface WithToDate {
  toDate: () => Date;
}

interface FirebaseTimestamp {
  seconds: number;
  nanoseconds: number;
}

export const formatTimestamp = (timestamp: Timestamp | unknown) => {
  if (!timestamp) return "";
  
  try {
    if (timestamp instanceof Timestamp) {
      const date = timestamp.toDate();
      return new Intl.DateTimeFormat("id-ID", {
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        day: "2-digit",
        month: "short",
      }).format(date);
    }
    
    if (
      typeof timestamp === "object" &&
      timestamp !== null &&
      "seconds" in timestamp &&
      "nanoseconds" in timestamp
    ) {
      const firebaseTimestamp = timestamp as FirebaseTimestamp;
      const date = new Date(firebaseTimestamp.seconds * 1000 + firebaseTimestamp.nanoseconds / 1000000);
      return new Intl.DateTimeFormat("id-ID", {
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        day: "2-digit",
        month: "short",
      }).format(date);
    }
    
    if (timestamp instanceof Date) {
      return new Intl.DateTimeFormat("id-ID", {
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        day: "2-digit",
        month: "short",
      }).format(timestamp);
    }
    
    if (typeof timestamp === "string") {
      const date = new Date(timestamp);
      if (!isNaN(date.getTime())) {
        return new Intl.DateTimeFormat("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          day: "2-digit",
          month: "short",
        }).format(date);
      }
    }
    
    if (typeof timestamp === "number") {
      const date = new Date(timestamp);
      return new Intl.DateTimeFormat("id-ID", {
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        day: "2-digit",
        month: "short",
      }).format(date);
    }
    
    if (
      typeof timestamp === "object" &&
      timestamp !== null &&
      typeof (timestamp as { toDate?: () => Date }).toDate === "function"
    ) {
      try {
        const withToDate = timestamp as WithToDate;
        const date = withToDate.toDate();
        return new Intl.DateTimeFormat("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          day: "2-digit",
          month: "short",
        }).format(date);
      } catch (err) {
        console.error("Error calling toDate():", err);
      }
    }
    
    console.warn("Format timestamp tidak dikenali:", timestamp);
    return "";
  } catch (error) {
    console.error("Error saat memformat timestamp:", error);
    return "";
  }
};