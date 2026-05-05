"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type AnimateInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export default function AnimateIn({
  children,
  className,
  delay = 0,
  y = 24,
}: AnimateInProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
