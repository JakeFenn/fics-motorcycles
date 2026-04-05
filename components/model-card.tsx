"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { colorImage } from "@/lib/utils"
import type { Color, Model } from "@/lib/types"

interface ModelCardProps {
  model: Model
  agesPrefix?: string
  getDetailsButton: string
}

export function ModelCard({ model, agesPrefix, getDetailsButton }: ModelCardProps) {
  const [selectedColor, setSelectedColor] = useState<Color | null>(model.colors?.[0] ?? null)
  const displayImage = selectedColor ? colorImage(model.image, selectedColor) : model.image

  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors">
      <div className="relative h-64">
        <Image src={displayImage} alt={model.name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
        {model.age && (
          <p className="text-primary font-medium mb-4">
            {agesPrefix ? `${agesPrefix} ${model.age}` : model.age}
          </p>
        )}
        {model.colors && model.colors.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">
              Colour: <span className="font-medium text-foreground">{selectedColor?.name}</span>
            </p>
            <div className="flex gap-2 flex-wrap">
              {model.colors.map((color) => (
                <button
                  key={color.name}
                  title={color.name}
                  onClick={() => setSelectedColor(color)}
                  className="w-7 h-7 rounded-full border-2 transition-all"
                  style={{
                    backgroundColor: color.hex,
                    borderColor: selectedColor?.name === color.name ? "hsl(var(--primary))" : "transparent",
                    boxShadow: selectedColor?.name === color.name ? "0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--primary))" : undefined,
                  }}
                />
              ))}
            </div>
          </div>
        )}
        <ul className="space-y-2 mb-6">
          {model.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Link href="/contact">
          <Button className="w-full rounded-full">{getDetailsButton}</Button>
        </Link>
      </div>
    </div>
  )
}
