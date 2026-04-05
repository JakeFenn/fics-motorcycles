import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Color } from "@/lib/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function colorImage(baseImage: string, color: Color): string {
  if (color.image) return color.image
  const dot = baseImage.lastIndexOf(".")
  return `${baseImage.slice(0, dot)}-${color.name.toLowerCase()}${baseImage.slice(dot)}`
}
