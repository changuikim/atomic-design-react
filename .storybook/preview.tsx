import type { Preview } from '@storybook/react'
import { ToDoListContextProvider } from '../src/toDoApp/contexts/ToDoListContext'
import '../src/app/globals.css'
import React from 'react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export const decorators = [
  Story => (
    <ToDoListContextProvider>
      <Story />
    </ToDoListContextProvider>
  ),
]

export default preview
