export const fontWeights = {
  regular: '400',
  medium: '500',
  bold: '700',
} as const

export type FontWeight = keyof typeof fontWeights
