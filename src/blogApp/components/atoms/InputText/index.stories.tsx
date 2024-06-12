import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import InputText from '.'

const meta = {
  title: 'BlogApp/Atoms/InputText',
  component: InputText,
  tags: ['autodocs'],
} satisfies Meta<typeof InputText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: '리액트란?',
    onChange: action('onChange'),
  },
}
