"use client"
import { SessionProvider } from "next-auth/react"
export default function SessionWraper ({children} : {children : React.ReactNode}){
    return (
    <SessionProvider>{children}</SessionProvider>
    )
}