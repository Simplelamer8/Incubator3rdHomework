"use client"
import { TasksContext } from '@/app/posts'
import React, { useContext } from 'react'
import mainImage from "@/public/images/mainImage.svg"
import eyeIcon from "@/public/images/eyeIcon.svg"
import thumbsUpIcon from "@/public/images/thumbsUpIcon.svg"

export default function page({params}:{params: {postID: number}}) {
  const posts = useContext(TasksContext).posts, setPosts = useContext(TasksContext).setPosts;
  const postId = params.postID - 1;

  console.log(posts);
  return (
    <>  
      {
        posts[postId] && 
        <main className='flex flex-col items-start px-44'>
          <h1 className='text-3xl font-bold mb-6'>{posts[postId].title}</h1>
          <img src={mainImage.src} alt="" className='mb-10' />
          <p className='mb-10'>{posts[postId].body}</p>
          <div className='reactions flex align-center justify-between w-[13%]'>
            <div className='flex align-start'>
                <img src={eyeIcon.src} alt="views" className='w-5 mr-1' />
                <p className='flex items-center'>{posts[postId].views}</p>
            </div>
            <div className='flex align-start'>
                <img src={thumbsUpIcon.src} alt="views" className='w-5 mb-1 mr-1' />
                <p className='flex items-center'>{posts[postId].reactions.likes}</p>
            </div>
            <div className='flex align-start'>
                <img src={thumbsUpIcon.src} alt="views" className='w-5 rotate-180 mt-1 mr-1' />
                <p className='flex items-center'>{posts[postId].reactions.dislikes}</p>
            </div>
          </div>
        </main>
      }
    </>
  )
}