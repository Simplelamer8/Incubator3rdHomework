"use client"
import Image from "next/image";
import BlogCard from "./components/BlogCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { TaskContextType, TasksContext } from "./posts";

interface Reactions {likes: number, dislikes: number};
export interface Post {id: number, title: string, body: string, reactions: Reactions, tags: number[], userId: number, views: number};

export default function Home() {


  let posts:Post[] = [], setPosts:React.Dispatch<React.SetStateAction<Post[]>>;

  const postsData:TaskContextType|null = useContext(TasksContext);
  posts = postsData?.posts;
  setPosts = postsData?.setPosts;

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="text-left w-[80%] py-15">
        <h1 className="font-bold text-5xl">
          Hello, World!
        </h1>
      </div>
      {
        posts.map((post:Post, index:number) => (
          <BlogCard {...post} key={post.id} index={index} />
        ))
      }
    </main>
  );
}
