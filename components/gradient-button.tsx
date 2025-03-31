"use client"

import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"

interface GradientButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  download?: boolean
  target?: string
  rel?: string
}

export function GradientButton({
  children,
  className = "",
  onClick,
  href,
  download,
  target,
  rel,
}: GradientButtonProps) {
  const buttonProps = {
    onClick,
    className: `relative overflow-hidden group ${className}`,
    asChild: !!href,
  }

  const content = (
    <>
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
      <span className="absolute inset-0 w-full h-full bg-purple-600 opacity-100 group-hover:opacity-0 transition-opacity duration-300 rounded-md"></span>
      <span className="relative z-10 text-white">{children}</span>
    </>
  )

  if (href) {
    return (
      <Button {...buttonProps}>
        <a href={href} download={download} target={target} rel={rel}>
          {content}
        </a>
      </Button>
    )
  }

  return <Button {...buttonProps}>{content}</Button>
}

