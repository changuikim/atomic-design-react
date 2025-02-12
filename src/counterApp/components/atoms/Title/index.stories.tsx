import type { Meta, StoryObj } from '@storybook/react'

import Title from '.'

const meta = {
  title: 'CounterApp/Atoms/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '카운터 앱',
  },
}
