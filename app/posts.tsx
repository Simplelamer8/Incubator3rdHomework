"use client"
import { ReactNode, createContext, useState } from "react";
import React from 'react'
import { Post } from "./page";

export type TaskContextType = {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const TasksContext = createContext<TaskContextType>({posts: [], setPosts: () => {}});

const Provider: React.FC<{children: ReactNode}> = ({children}) => {
    
    const [posts, setPosts] = useState<Post[]>([]);
    return (
        <TasksContext.Provider value={{posts, setPosts}}>
            {children}
        </TasksContext.Provider>
    )
}


export {Provider, TasksContext};