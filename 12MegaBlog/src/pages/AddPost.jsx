import React from 'react'
import { Containerr } from '../components'
import PostForm from '../components/postForm/PostForm'
function AddPost() {
  return (
    <div className='py-8'>
      <Containerr>
        <PostForm/>
      </Containerr>
    </div>
  )
}

export default AddPost
