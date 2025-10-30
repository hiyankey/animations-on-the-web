/** biome-ignore-all lint/suspicious/noArrayIndexKey: shh! */
"use client";
import { type CSSProperties, useEffect, useState } from "react";

export default function Toaster() {
  const [toasts, setToasts] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-end py-16">
      <div
        className="-translate-x-1/2 absolute bottom-32 left-1/2 grid w-[320px] gap-4"
        style={{ "--gap": "16px" } as CSSProperties}
      >
        {Array.from({ length: toasts }).map((_, i) => {
          const index = toasts - (i + 1);
          return (
            <div
              className="absolute bottom-0 flex h-14 w-full translate-y-full flex-col justify-center rounded-md border border-white/10 bg-neutral-900 p-4 opacity-0 duration-400 ease-in-out [transition-name:transform,opacity] data-[mounted=true]:translate-y-[calc(var(--index)*(100%+var(--gap))*-1)] data-[mounted=true]:opacity-100"
              data-mounted={mounted}
              key={i}
              style={
                {
                  "--index": index,
                  // transform:
                  //   "translateY(calc(var(--index) * (100% + var(--gap)) * -1))",
                } as CSSProperties
              }
            >
              <h3>{i.toString().padStart(2, "0")}</h3>
              <p className="text-sm text-white/70">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          );
        })}
      </div>
      <button
        className="h-7 rounded-full border border-white/12 bg-black px-3 text-sm"
        onClick={() => {
          setToasts(toasts + 1);
        }}
        type="button"
      >
        Add toast
      </button>
    </div>
  );
}
