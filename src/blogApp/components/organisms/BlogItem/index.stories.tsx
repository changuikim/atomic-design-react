import type { Meta, StoryObj } from '@storybook/react'

import BlogItem from '@/blogApp/components/organisms/BlogItem'

const meta = {
  title: 'BlogApp/Organisms/BlogItem',
  component: BlogItem,
  tags: ['autodocs'],
} satisfies Meta<typeof BlogItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '블로그 글 제목',
    body: '블로그 글 본문',
  },
}
