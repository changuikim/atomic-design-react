import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ToDoItem from '.'

const meta = {
  title: 'TodoApp/Organisms/ToDoItem',
  component: ToDoItem,
  tags: ['autodocs'],
} satisfies Meta<typeof ToDoItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: '리액트 공부하기',
    onDelete: action('onDelete'),
  },
}
