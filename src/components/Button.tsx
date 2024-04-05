import { ComponentProps, ReactElement } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends ComponentProps<'button'> {
  transparent?: boolean
}
export function Button({ transparent, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "border border-white/10 rounded-md p-1.5",
        transparent ? "bg-black/20" : "bg-white/10",
        props.disabled ? "opacity-50 cursor-not-allowed" : null
      )}>
    </button>
  )
}