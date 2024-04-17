export const fonts = {
  default: 'Roboto, sans-serif',
  code: 'monospace',
} as const

export type Font = keyof typeof fonts
