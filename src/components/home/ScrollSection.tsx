'use client';

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const ScrollSection = ({ children, className = "", id }: ScrollSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen w-full flex items-center justify-center snap-start relative overflow-hidden ${className}`}
    >
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="w-full"
        >
          {children}
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg className="w-6 h-6 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export const AnimatedItem = ({ children, direction = "up", className = "" }: { children: React.ReactNode, direction?: "up" | "left" | "right", className?: string }) => {
  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 50 : 0, 
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      transition: { 
        duration: 0.4, 
        ease: "easeOut" as const 
      } 
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};