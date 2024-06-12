import type { Meta, StoryObj } from '@storybook/react'

import BlogTitle from '.'

const meta = {
  title: 'BlogApp/Atoms/BlogTitle',
  component: BlogTitle,
  tags: ['autodocs'],
} satisfies Meta<typeof BlogTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '블로그 제목',
  },
}
