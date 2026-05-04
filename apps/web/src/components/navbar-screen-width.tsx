"use client";

import { useEffect, useState } from "react";

export function NavbarScreenWidth() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div className="bg-black/65 px-3 py-1 text-white text-xs tracking-wide md:text-sm">
      width: {width ?? "..."}px
    </div>
  );
}
