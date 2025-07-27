"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { updateProfile, fetchUser } from '@/actions/useractions'
import { useRouter } from 'next/navigation'


const page = () => {

    const { data: session, update } = useSession()
    const router = useRouter()
    const [form, setform] = useState({
        name: '',
        email: '',
        username: '',
        profilePicture: '',
        coverPicture: '',
        razorpayId: '',
        razorpaySecret: ''
    })

    useEffect(() => {

        document.title = "Profile Settings - Buy Me A Chai"
        if (!session) {
            router.push('/')
        }
        else {
            getdata()
        }
    }, [session, router])

    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {

        try {
            const response = await updateProfile(form, session.user.username)
            if (response.success) {
                alert("Profile updated successfully" )
            } else {
                throw new Error("Error updating profile" + response.error)
            }
        } catch (error) {
            alert("Error updating profile" + error.message)
        }
    }

    const getdata = async () => {
        try{
            let u = await fetchUser(session.user.name)

                // console.log("thissession", session) // Debug log
                // alert("thissession: " + JSON.stringify(session))
                // console.log("this user:", session.user) // Debug log
                // alert("this user: " + JSON.stringify(session.user))
                // console.log("username:", session.user.username) // Debug log
                // alert("username: " + session.user.username)}
                
            if (!u) {
                throw new Error("User data not found")
            }
            setform(u)
        } catch (error) {
            alert("Error fetching user data: " + error.message)
        }
    }

    return (
        <>
            <form action={handleSubmit} className="form bg-slate-900 " style={{ maxWidth: "500px", margin: "2rem auto", padding: "2rem", background: "#", borderRadius: "12px", color: "#", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
                <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Profile Settings</h2>
                <div style={{ marginBottom: "1rem" }}>
                    <label>Name</label>
                    <input value={form.name} onChange={handleChange} className='bg-slate-800 text-white' type="text" name="name" style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "none", marginTop: "0.5rem", background: "", color: "" }} />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label>Email</label>
                    <input value={form.email} onChange={handleChange} className='bg-slate-800 text-white' type="email" name="email" style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "none", marginTop: "0.5rem", background: "", color: "" }} />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label>Username</label>
                    <input value={form.username} onChange={handleChange} className='bg-slate-800 text-white' type="text" name="username" style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "none", marginTop: "0.5rem", background: "", color: "" }} />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label>Profile Picture</label>
                    <input value={form.profilePicture} onChange={handleChange} className='bg-slate-800 text-white' type="url" name="profilePicture" placeholder="Image URL" style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "none", marginTop: "0.5rem", background: "", color: "" }} />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label>Cover Picture</label>
                    <input value={form.coverPicture} onChange={handleChange} className='bg-slate-800 text-white' type="url" name="coverPicture" placeholder="Image URL" style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "none", marginTop: "0.5rem", background: "", color: "" }} />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label>Razorpay ID</label>
                    <input value={form.razorpayId} onChange={handleChange} className='bg-slate-800 text-white' type="text" name="razorpayId" style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "none", marginTop: "0.5rem", background: "", color: "" }} />
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <label>Razorpay Secret</label>
                    <input value={form.razorpaySecret} onChange={handleChange} className='bg-slate-800 text-white' type="password" name="razorpaySecret" style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "none", marginTop: "0.5rem", background: "", color: " " }} />
                </div>
                <button type="submit" style={{ width: "100%", padding: "0.75rem", borderRadius: "6px", border: "none", background: "#ff9800", color: "#222", fontWeight: "bold", fontSize: "1rem", cursor: "pointer" }}>
                    Submit
                </button>
            </form>
        </>
    )
}

export default page