"use client"
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const login = () => {
    const { data: session } = useSession()
    const router = useRouter()
    
    useEffect(() => {

        document.title = "Login - Buy Me A Chai"
        if (session) {
            router.push('/dashboard')
        }
    }, [session, router])
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-gray-900 rounded-xl shadow-lg p-10 w-full max-w-md">
                <h1 className="text-center font-extrabold text-3xl text-white mb-8 tracking-tight">
                    Login to Get Your Chai
                </h1>
                <div className="flex flex-col gap-4">
                    <button onClick={() => signIn("google")} className="flex items-center justify-center gap-3 w-full py-3 px-6 rounded-lg bg-white hover:bg-gray-100 transition font-semibold text-gray-800 shadow border border-gray-200">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                        Continue with Google
                    </button>
                    <button className="flex items-center justify-center gap-3 w-full py-3 px-6 rounded-lg bg-[#1877F2] hover:bg-[#145db2] transition font-semibold text-white shadow border border-[#1877F2]">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" className="w-5 h-5" />
                        Continue with Facebook
                    </button>
                    <button onClick={() => signIn("github")} className="flex items-center justify-center gap-3 w-full py-3 px-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition font-semibold text-white shadow border border-gray-700">
                        <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-5 h-5" />
                        Continue with GitHub
                    </button>
                </div>
            </div>
        </div>
    )
}

export default login