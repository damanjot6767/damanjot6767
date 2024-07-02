import { cn } from "../../lib/utils";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "../../utils/animation";
import { useEffect, useRef } from "react";

type CounterProps = {
  from: number;
  to: number;
  className?: string
};

function AnimatedCounter({ from, to, className }: CounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest);
  });
  const ref = useRef(null);
  const inView = useInView(ref);

  // while in view animate the count
  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2 });
    }
  }, [count, inView, to]);

  return <motion.span className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)} ref={ref}>{rounded}</motion.span>;
}

export { AnimatedCounter };
