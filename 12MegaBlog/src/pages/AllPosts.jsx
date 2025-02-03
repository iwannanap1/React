import React from 'react'
import appwriteService from '../appwrite/config'
import { Containerr, PostCard } from '../components'
import { useState } from 'react'
import { useEffect } from 'react'
function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {},[])
    appwriteService.getPosts([]).then((posts) => {
        if (posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
      <Containerr>
        <div className='flex flex-wrap'>
            {posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard post={post}/>
                </div>
            ))}
        </div>
      </Containerr>
    </div>
  )
}

export default AllPosts
