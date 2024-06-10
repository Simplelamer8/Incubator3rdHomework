import React, { useContext } from 'react'
import avatar from "../../public/images/avatar.png"
import rightImage from "../../public/images/rightImage.png"
import { Post } from '../page'
import eyeIcon from "@/public/images/eyeIcon.svg"
import thumbsUpIcon from "@/public/images/thumbsUpIcon.svg"
import Link from 'next/link'
import { AuthContext } from '../authContext'
import axios from 'axios'
import { TasksContext } from '../posts'
import { error } from 'console'

interface PostWithIndex extends Post{
    index: number
}

export default function BlogCard({id, title, body, reactions, tags, userId, views, index}:PostWithIndex) {

    const postsData = useContext(TasksContext);
    const posts = postsData.posts, setPosts = postsData.setPosts;

    const checkFunction = useContext(AuthContext).checkIsAuth;
    
    const axiosPostInstance = axios.create({
        baseURL: "https://dummyjson.com/posts",
        headers: {
            "Content-Type": "application/json"
        }
    })

    axiosPostInstance.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("userToken");
            if (token)
            {
                config.headers["Authorization"] = `Bearer ${token}`;   
            }

            checkFunction();

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    )

    function updatePost(postId:number)
    {
        checkFunction();
    }

    async function deletePost (postId:number)
    {
        let response = await axiosPostInstance.delete(`/${postId}`);
        if (response.status === 200)
        {
            setPosts(posts.filter((post) => post.id !== postId));
        }
    }

  return (
    <div className='card flex justify-between border-b w-[80%] border-slate-400 pb-8 h-96 mt-24'>
        <div className="left w-[60%] flex flex-col justify-between min-h-full">
            <Link href={`/post/${index}`}><h1 className='font-bold text-3xl'>{title}</h1></Link>
            <p className='description'>
                {body}
            </p>
            <div className="additionalData flex justify-between">
                <div className="left w-[40%]">
                    <ul className='flex align-center justify-around'>
                        {
                            tags.map((tag, index) => (
                                <li key={index} className='px-4 py-2 bg-gray-300 rounded-3xl'>{tag}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="right flex align-center justify-around w-[30%]">
                    {
                        <>
                            <div className='flex align-start'>
                                <img src={eyeIcon.src} alt="views" className='w-5 mr-1' />
                                <p className='flex items-center'>{views}</p>
                            </div>
                            <div className='flex align-start'>
                                <img src={thumbsUpIcon.src} alt="views" className='w-5 mb-1 mr-1' />
                                <p className='flex items-center'>{reactions.likes}</p>
                            </div>
                            <div className='flex align-start'>
                                <img src={thumbsUpIcon.src} alt="views" className='w-5 rotate-180 mt-1 mr-1' />
                                <p className='flex items-center'>{reactions.dislikes}</p>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
        <div className="right w-[25%]">
            <img src={rightImage.src} className='w-full' alt="" />
            <div className='changePost flex items-center justify-between px-4 mt-5'>
                <button className='px-4 py-2 bg-gray-300 rounded-3xl hover:shadow-md' onClick={() => updatePost(id)}>Update post</button>
                <button className='px-4 py-2 bg-gray-300 rounded-3xl hover:shadow-md' onClick={() => deletePost(id)}>Delete post</button>
            </div>
        </div>
    </div>
  )
}
