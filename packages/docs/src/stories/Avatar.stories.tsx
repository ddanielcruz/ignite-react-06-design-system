import { Avatar, AvatarProps } from '@dc-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/ddanielcruz.png',
    alt: 'Daniel Cruz',
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const Fallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
