import React, { useState, useEffect } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { MdEdit, MdDelete ,} from "react-icons/md";
import { IoCopy } from "react-icons/io5";


// To use an image from the public folder, just use its path as a string in the src attribute. No import is needed.
// Remove the import line. Instead, use "/copy.gif" directly in your <img> tag where needed.

const Manager = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordArray, setpasswordArray] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [form, setform] = useState({
        website: "",
        username: "",
        password: ""
    });


    const getPasswords = async () => {
        try {
            let req = await fetch("http://localhost:3000/")
            let passwords = await req.json()
            setpasswordArray(passwords)
        } catch (error) {
            toast.error('Failed to load passwords');
            console.error('Error fetching passwords:', error);
        }
    }

    useEffect(() => {
        getPasswords()
    }, [])

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        console.log("copied");
        toast.success('Copied Successfully!');
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })

    }

    const savePassword = async (e) => {
        e.preventDefault();
        const newId = uuidv4();
        const newEntry = { ...form, id: newId };

        try {
            // Delete existing password if editing
            if (form.id) {
                await fetch("http://localhost:3000/", { 
                    method: "DELETE", 
                    headers: { "Content-Type": "application/json" }, 
                    body: JSON.stringify({id: form.id}) 
                });
            }

            // Add new password
            await fetch("http://localhost:3000/", { 
                method: "POST", 
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify(newEntry)
            });

            setpasswordArray([...passwordArray, newEntry])
            toast.success('Password saved successfully!');

            // Reset form after saving
            setform({
                website: "",
                username: "",
                password: ""
            });
        } catch (error) {
            toast.error('Failed to save password');
            console.error('Error saving password:', error);
        }
    }

    const deletePassword = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this item?");

        if (isConfirmed) {
            try {
                await fetch("http://localhost:3000/", { 
                    method: "DELETE", 
                    headers: { "Content-Type": "application/json" }, 
                    body: JSON.stringify({ id }) 
                });

                const newPassArray = passwordArray.filter((item) => item.id !== id);
                setpasswordArray(newPassArray);
                toast.success('Password deleted successfully!');
            } catch (error) {
                toast.error('Failed to delete password');
                console.error('Error deleting password:', error);
            }
        }
    }

    const editPassword = (id) => {
        console.log("edition with ", id)
        setform({ ...passwordArray.filter(i => i.id === id)[0], id: id })
        setpasswordArray(passwordArray.filter(i => i.id !== id))
    }



    return (
        <div className='Manager p-2 md:p-4'>
            <Toaster />
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body p-4 md:p-6">
                    <h2 className="card-title text-lg md:text-xl"><a className="btn btn-ghost text-lg md:text-xl font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        SecurePass
                    </a></h2>

                    <p className="text-sm md:text-base">Best Password Manager</p>
                    <div className="w-full">
                        <form className="flex flex-col gap-3 md:gap-4 w-full" onSubmit={savePassword}>
                            <input
                                value={form.website}
                                onChange={handleChange}
                                type="text"
                                placeholder="Website"
                                className="input input-bordered w-full text-sm md:text-base"
                                name="website"
                                required
                            />
                            <input
                                value={form.username}
                                onChange={handleChange}
                                type="text"
                                placeholder="Username"
                                className="input input-bordered w-full text-sm md:text-base"
                                name="username"
                                required
                            />
                            <div className="relative">
                                <input
                                    value={form.password}
                                    onChange={handleChange}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="input input-bordered w-full pr-12 text-sm md:text-base"
                                    name="password"
                                    required
                                />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer z-10" onClick={togglePasswordVisibility}>
                                    {showPassword ?
                                        <FaEye className="h-4 w-4 md:h-5 md:w-5 text-gray-500 hover:text-gray-700" /> :
                                        <FaEyeSlash className="h-4 w-4 md:h-5 md:w-5 text-gray-500 hover:text-gray-700" />
                                    }
                                </div>
                            </div>
                            <button type="submit" className={`btn mt-2 text-sm md:text-base ${isEditing ? 'btn-warning' : 'btn-secondary'}`}>
                                {isEditing ? 'Update' : 'Add'}
                            </button>
                            {isEditing && (
                                <button
                                    type="button"
                                    className="btn btn-outline btn-sm text-xs md:text-sm"
                                    onClick={() => {
                                        setIsEditing(false);
                                        setEditId(null);
                                        setform({ website: "", username: "", password: "" });
                                    }}
                                >
                                    Cancel Edit
                                </button>
                            )}
                        </form>
                    </div>
                    <div className="overflow-x-auto mt-4 md:mt-6">
                        <table className="table table-zebra w-full">
                            {/* head */}
                            <thead>
                                <tr className="text-xs md:text-sm">
                                    <th className="w-8 md:w-12"></th>
                                    <th className="min-w-20">Website</th>
                                    <th className="min-w-20">UserId</th>
                                    <th className="min-w-20">Secret</th>
                                    <th className="w-16 md:w-20">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {passwordArray.map((item, index) => {
                                    return (
                                        <tr key={item.id} className="text-xs md:text-sm">
                                            <th className="text-xs md:text-sm">{index + 1}</th>
                                            <td className="max-w-32 md:max-w-none">
                                                <div className="flex items-center justify-between gap-1 md:gap-2">
                                                    <span className="truncate">{item.website}</span>
                                                    <IoCopy className="cursor-pointer" onClick={() => copyText(item.website)} />
                                                </div>
                                            </td>
                                            <td className="max-w-32 md:max-w-none">
                                                <div className="flex items-center justify-between gap-1 md:gap-2">
                                                    <span className="truncate">{item.username}</span>
                                                    <IoCopy className="cursor-pointer" onClick={() => copyText(item.username)} />
                                                </div>
                                            </td>
                                            <td className="max-w-32 md:max-w-none">
                                                <div className="flex items-center justify-between gap-1 md:gap-2">
                                                    <span className="truncate">{"*".repeat(item.password.length)}</span>
                                                    <IoCopy className="cursor-pointer" onClick={() => copyText(item.password)} />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex items-centerb  gap-1 md:gap-2">
                                                    <MdEdit
                                                        className="cursor-pointer text-blue-500 hover:text-blue-700 h-4 w-4 md:h-5 md:w-5"
                                                        onClick={() => editPassword(item.id)}
                                                    />
                                                    <MdDelete
                                                        className="cursor-pointer text-blue-500 hover:text-red-700 h-4 w-4 md:h-5 md:w-5"
                                                        onClick={() => deletePassword(item.id)}
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manager