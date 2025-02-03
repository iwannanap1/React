import React from 'react'
import { Containerr, PostForm } from '../components'
import appwriteService from '../appwrite/config'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        } else{
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
      <Containerr>
        <PostForm post = {post}/>
      </Containerr>
    </div>
  ) : null
}

export default EditPost
