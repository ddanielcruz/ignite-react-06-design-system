import type { Preview } from '@storybook/react'
import { colors } from '@dc-ignite-ui/tokens'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: colors.gray900,
        },
        {
          name: 'light',
          value: colors.white,
        },
      ],
    },
  },
}

export default preview
