import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

type InViewAnimationOptions = {
  amount?: number | "some" | "all";
  margin?: string;
  animateOut?: boolean;
};

export function useInViewAnimation<T extends Element = HTMLElement>(
  options: InViewAnimationOptions = {},
) {
  const { amount = 0.3, margin, animateOut = false } = options;
  const ref = useRef<T | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { amount, margin });

  useEffect(() => {
    if (isInView) {
      void controls.start("visible");
    } else if (animateOut) {
      void controls.start("hidden");
    } else {
      controls.set("hidden");
    }
  }, [animateOut, controls, isInView]);

  return { ref, controls };
}
