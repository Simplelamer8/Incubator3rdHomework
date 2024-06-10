"use client"
import Image from "next/image";
import BlogCard from "./components/BlogCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { TaskContextType, TasksContext } from "./posts";

interface Reactions {likes: number, dislikes: number};
export interface Post {id: number, title: string, body: string, reactions: Reactions, tags: number[], userId: number, views: number};

export default function Home() {


  /*
    {
    "posts": [
          {
            "id": 1,
            "title": "His mother had always taught him",
            "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
            "tags": [
              "history",
              "american",
              "crime"
            ],
            "reactions": {
              "likes": 192,
              "dislikes": 25
            },
            "views": 305,
            "userId": 121
          },
          {...},
          {...}
          // 30 items
        ],
        "total": 251,
        "skip": 0,
        "limit": 30
      }
  */

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
        posts.map((post:Post) => (
          <BlogCard {...post} />
        ))
      }
    </main>
  );
}
