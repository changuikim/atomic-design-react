import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Input from '.'

const meta = {
  title: 'ToDoApp/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: '리액트 공부하기',
    onChange: action('onChange'),
  },
}
