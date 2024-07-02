"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { motion } from "framer-motion"

import { cn } from "../../lib/utils"

interface ProgressProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    'filledStyle'
  > {
  filledStyle?: string;
  value?: number;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root> & { filledStyle?: string },
  ProgressProps
>(({ className, value, filledStyle, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <motion.div
      className={cn("h-full w-full flex-1 bg-primary transition-all duration-500",filledStyle)}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      initial={{x: '-100%'}}
      whileInView={{x: `calc(-${100 - (value || 0)}%)`}}
      transition={{duration: 1}}
      viewport={{once: true}}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
