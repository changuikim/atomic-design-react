import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '.'

const meta = {
  title: 'TodoApp/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const RedButton: Story = {
  args: {
    label: '삭제',
  },
}

export const BlueButton: Story = {
  args: {
    label: '추가',
    color: '#304FFE',
    onClick: action('onClick'),
  },
}
