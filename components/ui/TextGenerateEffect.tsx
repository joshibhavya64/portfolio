"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  wordClassName,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  wordClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  return (
    <div className={cn("font-bold", className)}>
      <motion.div
        ref={scope}
        className="my-4 dark:text-white text-black leading-snug tracking-wide"
      >
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={` ${
              idx > 3
                ? "text-purple"
                : `dark:text-white text-black ${wordClassName}`
            } opacity-0`}
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
