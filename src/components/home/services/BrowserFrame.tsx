import React from "react";

export default function BrowserFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="group relative">
      <div className="h-36 w-52 overflow-hidden rounded-lg border dark:border-neutral-700 transition-all duration-300 ease-out transform-gpu group-hover:-translate-y-2 group-hover:rotate-x-12 group-hover:rotate-y-6 group-hover:shadow-2xl group-hover:shadow-brand-neon/20 perspective-1000">
        <div className="relative flex items-center justify-start gap-1 border-b bg-neutral-200 px-2 py-1 dark:border-neutral-700 dark:bg-neutral-900 transition-colors duration-300 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-800">
          {[
            { color: "bg-red-400 group-hover:bg-red-500" },
            { color: "bg-yellow-400 group-hover:bg-yellow-500" },
            { color: "bg-green-400 group-hover:bg-green-500" }
          ].map((item, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full border border-neutral-400 dark:border-neutral-700 transition-all duration-300 ${item.color} group-hover:shadow-sm`}
            />
          ))}
        </div>
        <div className="relative flex justify-center gap-2 bg-neutral-100 p-3 pb-0 dark:bg-neutral-950 transition-colors duration-300 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-900">
          {children}
        </div>
      </div>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-brand-neon/10 to-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl transform translate-y-4 scale-95 -z-10"></div>
    </div>
  );
}

function DemoContent() {
  return (
    <div className="flex flex-col items-center gap-2 py-4">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg"></div>
      <div className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
        Hover me!
      </div>
    </div>
  );
}

export function Demo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 p-8">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-200">
          3D Landing Container
        </h1>
        <div className="flex gap-8 justify-center">
          <BrowserFrame>
            <DemoContent />
          </BrowserFrame>
          <BrowserFrame>
            <div className="flex flex-col items-center gap-1 py-4">
              <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400">Another</div>
            </div>
          </BrowserFrame>
        </div>
      </div>
    </div>
  );
}