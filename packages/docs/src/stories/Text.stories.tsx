import { Text, TextProps } from '@dc-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed commodo risus.',
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const WithCustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'Strong text',
  },
}
