import React, { useState } from 'react'
import Input from '@/blogApp/components/molecules/Input'
import Button from '@/blogApp/components/atoms/Button'
import DialogTitle from '@/blogApp/components/atoms/DialogTitle'

interface Props {
  readonly onClose: () => void
}

const RegisterBlogDialog: React.FC<Props> = ({ onClose }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const registerPost = () => {
    if (title === '' || body === '') return

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        userId: 1,
        title,
        body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(() => {
        if (typeof onClose === 'function') onClose()
      })
      .catch(error => {
        throw new Error(error)
      })
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black opacity-75' />
      <div className='relative z-10 flex flex-col items-center justify-center p-8 bg-white rounded-lg'>
        <DialogTitle title='블로그 글 등록' />
        <Input label='Title:' value={title} onChange={setTitle} />
        <Input label='Body:' value={body} onChange={setBody} />
        <div className='flex justify-around w-full mt-4'>
          <Button label='등록하기' onClick={registerPost} />
          <Button label='닫기' color='#304FFE' onClick={onClose} />
        </div>
      </div>
    </div>
  )
}

export default RegisterBlogDialog
