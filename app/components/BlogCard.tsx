import React from 'react'
import avatar from "../../public/images/avatar.png"
import rightImage from "../../public/images/rightImage.png"
import { Post } from '../page'
import eyeIcon from "@/public/images/eyeIcon.svg"
import thumbsUpIcon from "@/public/images/thumbsUpIcon.svg"
import Link from 'next/link'

export default function BlogCard({id, title, body, reactions, tags, userId, views}:Post) {
  return (
    <div className='card flex justify-between border-b w-[80%] border-slate-400 pb-8 h-96 mt-24' key={id}>
        <div className="left w-[60%] flex flex-col justify-between min-h-full">
            <Link href={`/post/${id}`}><h1 className='font-bold text-3xl'>{title}</h1></Link>
            <p className='description'>
                {body}
            </p>
            <div className="additionalData flex justify-between">
                <div className="left w-[40%]">
                    <ul className='flex align-center justify-around'>
                        {
                            tags.map((tag) => (
                                <li className='px-4 py-2 bg-gray-300 rounded-3xl'>{tag}</li>
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
        </div>
    </div>
  )
}
