import { Heading, HeadingProps } from '@dc-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Ignite UI',
  },
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const WithCustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'H1 Heading',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, the Heading component renders an `<h2>` element. You can customize the tag by using the `as` prop.',
      },
    },
  },
}
