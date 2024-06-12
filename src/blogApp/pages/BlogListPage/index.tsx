'use client'

import React, { useState, useEffect } from 'react'
import BlogList from '@/blogApp/components/templates/BlogList'
import type { Post } from '@/blogApp/components/templates/BlogList'

const BlogListPage: React.FC = () => {
  const [posts, setPosts] = useState<ReadonlyArray<Post>>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
      .catch(error => {
        throw new Error(error)
      })
  }, [])

  return <BlogList posts={posts} />
}

export default BlogListPage
