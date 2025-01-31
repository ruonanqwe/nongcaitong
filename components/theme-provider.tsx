"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type ThemeProviderProps = {
  children: React.ReactNode
} & Parameters<typeof NextThemesProvider>[0]

export function ThemeProvider(props: ThemeProviderProps) {
  return <NextThemesProvider {...props} />
}
