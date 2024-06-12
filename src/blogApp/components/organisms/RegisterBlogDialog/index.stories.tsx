import type { Meta, StoryObj } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import RegisterBlogDialog from '.'

const meta = {
  title: 'BlogApp/Organisms/RegisterBlogDialog',
  component: RegisterBlogDialog,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className='h-96'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RegisterBlogDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onClose: action('onClose'),
  },
}
