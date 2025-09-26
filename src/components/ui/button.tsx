import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group hover:scale-105 overflow-visible relative",
  {
    variants: {
      variant: {
        // Primary - Black in light mode, white in dark mode
        default: "bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100",
        // Secondary - Bordered gray
        secondary: "border border-gray-600 bg-transparent text-black hover:bg-gray-100 dark:border-gray-400 dark:text-white dark:hover:bg-gray-800",
        // Other variants
        destructive: "bg-red-600 text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800",
        outline: "border border-gray-300 bg-transparent text-black hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800",
        ghost: "text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800",
        link: "text-black underline-offset-4 hover:underline dark:text-white",
        // Special variants for specific use cases
        "theme-toggle": "text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 hover:scale-110 [&_svg]:hover:scale-100 [&_svg]:hover:translate-x-0",
        "nav-mobile": "text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 hover:scale-110 [&_svg]:hover:scale-100 [&_svg]:hover:translate-x-0",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
