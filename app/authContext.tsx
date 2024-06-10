"use client"
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation';
import React, { createContext } from 'react'

export const AuthContext = createContext<{checkIsAuth:() => void}>({checkIsAuth: () => {}});

const Auth: React.FC<{children: React.ReactNode}> = ({children}) => {

    const router = useRouter();
    const checkIsAuth = () => {
        if (!localStorage.getItem("userToken"))
        {
            router.push("/login");   
        }
    }

  return (
    <AuthContext.Provider value={{checkIsAuth}}>
        {children}
    </AuthContext.Provider>
  )
}
export {Auth};