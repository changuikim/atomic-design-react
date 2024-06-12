import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '.'

const meta = {
  title: 'BlogApp/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const RedButton: Story = {
  args: {
    label: '등록',
    onClick: action('onClick'),
  },
}

export const BlueButton: Story = {
  args: {
    label: '닫기',
    color: '#304FFE',
    onClick: action('onClick'),
  },
}
