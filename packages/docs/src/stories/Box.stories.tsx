import { Box, BoxProps, Text } from '@dc-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Box Element</Text>,
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
