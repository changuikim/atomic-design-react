import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { Input } from '.'

const meta = {
  title: 'BlogApp/Molecules/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Title',
    value: '블로그 제목',
    onChange: action('onChange'),
  },
}
