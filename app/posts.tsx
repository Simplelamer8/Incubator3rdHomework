"use client"
import { ReactNode, createContext, useEffect, useState } from "react";
import React from 'react'
import { Post } from "./page";
import axios from "axios";

export type TaskContextType = {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const TasksContext = createContext<TaskContextType>({posts: [], setPosts: () => {}});

const Provider: React.FC<{children: ReactNode}> = ({children}) => {
    
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try{
            const response = await axios.get('https://dummyjson.com/posts');
            console.log(response); 
            setPosts(response.data.posts);
          }
          catch(error){
            console.log("Error while fetching data:" + error);
          }
        }
    
        fetchData();
      }, [])

    return (
        <TasksContext.Provider value={{posts, setPosts}}>
            {children}
        </TasksContext.Provider>
    )
}


export {Provider, TasksContext};