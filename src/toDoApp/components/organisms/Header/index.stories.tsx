import type { Meta, StoryObj } from '@storybook/react'

import Header from '.'

const meta = {
  title: 'ToDoApp/Organisms/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
