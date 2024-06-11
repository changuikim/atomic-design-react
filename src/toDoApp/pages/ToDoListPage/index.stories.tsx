import type { Meta, StoryObj } from '@storybook/react'

import ToDoListPage from '.'
// import { ToDoListContextProvider } from '@/toDoApp/contexts/ToDoList'

const meta = {
  title: 'ToDoApp/Pages/ToDoListPage',
  component: ToDoListPage,
  tags: ['autodocs'],
  // decorators: [
  //   Story => (
  //     <ToDoListContextProvider>
  //       <Story />
  //     </ToDoListContextProvider>
  //   ),
  // ],
} satisfies Meta<typeof ToDoListPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
