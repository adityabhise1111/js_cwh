"use client"
import React from 'react'
import { useSession } from 'next-auth/react'

const page = () => {

  return (
    <>
    <form  className="form bg-slate-900 "style={{ maxWidth: "500px", margin: "2rem auto", padding: "2rem", background: "#", borderRadius: "12px", color: "#", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Profile Settings</h2>
        <div style={{ marginBottom: "1rem" }}>
            <label>Name</label>
            <input className='bg-slate-800 text-white' type="text" name="name" style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "none", marginTop: "0.5rem", background: "", color: ""}} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
            <label>Email</label>
            <input className='bg-slate-800 text-white' type="email" name="email" style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "none", marginTop: "0.5rem", background: "", color: "" }} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
            <label>Username</label>
            <input className='bg-slate-800 text-white' type="text" name="username" style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "none", marginTop: "0.5rem", background: "", color: "" }} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
            <label>Profile Picture</label>
            <input className='bg-slate-800 text-white' type="url" name="profilePicture" placeholder="Image URL" style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "none", marginTop: "0.5rem", background: "", color: "" }} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
            <label>Cover Picture</label>
            <input className='bg-slate-800 text-white' type="url" name="coverPicture" placeholder="Image URL" style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "none", marginTop: "0.5rem", background: "", color: "" }} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
            <label>Razorpay ID</label>
            <input className='bg-slate-800 text-white' type="text" name="razorpayId" style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "none", marginTop: "0.5rem", background: "", color: "" }} />
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
            <label>Razorpay Secret</label>
            <input className='bg-slate-800 text-white' type="password" name="razorpaySecret" style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "none", marginTop: "0.5rem", background: "", color: " " }} />
        </div>
        <button type="submit" style={{ width: "100%", padding: "0.75rem", borderRadius: "6px", border: "none", background: "#ff9800", color: "#222", fontWeight: "bold", fontSize: "1rem", cursor: "pointer" }}>
            Submit
        </button>
    </form>
    </>
  )
}

export default page