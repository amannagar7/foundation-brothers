'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface Props {
  text: string
  label?: string
  className?: string
}

export const CopyToClipboardButton: React.FC<Props> = ({ text, label = 'Copy', className }) => {
  const [copied, setCopied] = React.useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      const t = setTimeout(() => setCopied(false), 1500)
      return () => clearTimeout(t)
    } catch (e) {
      // no-op
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className={cn(
        'inline-flex items-center justify-center rounded-full bg-yellow-300 px-4 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-yellow-400 transition',
        className,
      )}
      aria-live="polite"
    >
      {copied ? 'Copied!' : label}
    </button>
  )
}