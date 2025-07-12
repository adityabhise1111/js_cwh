import React, { useState, useEffect } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { MdEdit, MdDelete } from "react-icons/md";


// To use an image from the public folder, just use its path as a string in the src attribute. No import is needed.
// Remove the import line. Instead, use "/copy.gif" directly in your <img> tag where needed.

const Manager = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordArray, setpasswordArray] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        let password = localStorage.getItem("password");
        if (password) {
            setpasswordArray(JSON.parse(password))
        }


    }, [])

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        console.log("copied");
        toast.success('Copied Successfully!');
    }

    


    const [form, setform] = useState({
        website: "",
        username: "",
        password: ""
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })

    }

    const savePassword = (e) => {
        e.preventDefault();
        
        if (isEditing) {
            // Update existing password
            const updatedArray = passwordArray.map(item => 
                item.id === editId ? { ...form, id: editId } : item
            );
            setpasswordArray(updatedArray);
            localStorage.setItem("password", JSON.stringify(updatedArray));
            setIsEditing(false);
            setEditId(null);
            toast.success('Password updated successfully!');
        } else {
            // Add new password
            const newEntry = {...form, id: uuidv4()};
            setpasswordArray([...passwordArray, newEntry]);
            localStorage.setItem("password", JSON.stringify([...passwordArray, newEntry]));
            toast.success('Password added successfully!');
        }

        // Reset form after saving
        setform({
            website: "",
            username: "",
            password: ""
        });
    }

    const deletePassword = (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this item?");
        
        if (isConfirmed) {
            const newPassArray = passwordArray.filter((item) => item.id !== id);
            setpasswordArray(newPassArray);
            localStorage.setItem("password", JSON.stringify(newPassArray));
            toast.success('Password deleted successfully!');
        }
    }

    const editPassword = (id) => {
        const itemToEdit = passwordArray.find((item) => item.id === id);
        
        if (itemToEdit) {
            setform({
                website: itemToEdit.website,
                username: itemToEdit.username,
                password: itemToEdit.password
            });
            setIsEditing(true);
            setEditId(id);
            toast.info('Edit mode activated!');
        }
    }



    return (
        <div className='Manager'>
            <Toaster />
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"><a className="btn btn-ghost text-xl font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        SecurePass
                    </a></h2>

                    <p>Best Password Manager</p>
                    <div className="w-100">
                        <form className="flex flex-col gap-2 w-full" onSubmit={savePassword}>
                            <input
                                value={form.website}
                                onChange={handleChange}
                                type="text"
                                placeholder="Website"
                                className="input input-bordered w-full"
                                name="website"
                                required
                            />
                            <input
                                value={form.username}
                                onChange={handleChange}
                                type="text"
                                placeholder="Username"
                                className="input input-bordered w-full"
                                name="username"
                                required
                            />
                            <div className="relative">
                                <input
                                    value={form.password}
                                    onChange={handleChange}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="input input-bordered w-full pr-12"
                                    name="password"
                                    required
                                />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer z-10" onClick={togglePasswordVisibility}>
                                    {showPassword ?
                                        <FaEye className="h-5 w-5 text-gray-500 hover:text-gray-700" /> :
                                        <FaEyeSlash className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                                    }
                                </div>
                            </div>
                            <button type="submit" className={`btn mt-2 ${isEditing ? 'btn-warning' : 'btn-secondary'}`}>
                                {isEditing ? 'Update' : 'Add'}
                            </button>
                            {isEditing && (
                                <button 
                                    type="button" 
                                    className="btn btn-outline btn-sm"
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
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Website</th>
                                    <th>UserId</th>
                                    <th>Secret</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {passwordArray.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <th>{index + 1}</th>
                                            <td>
                                                <div className="flex items-center gap-2" onClick={() => copyText(item.website)}>
                                                    <span>{item.website}</span>
                                                    <img width="15" src="/copy.gif" alt="Copy" className="cursor-pointer" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-2" onClick={() => copyText(item.username)}>
                                                    <span>{item.username}</span>
                                                    <img width="15" src="/copy.gif" alt="Copy" className="cursor-pointer" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-2" onClick={() => copyText(item.password)}>
                                                    <span>{item.password}</span>
                                                    <img width="15" src="/copy.gif" alt="Copy" className="cursor-pointer" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <MdEdit 
                                                        className="cursor-pointer text-blue-500 hover:text-blue-700" 
                                                        onClick={() => editPassword(item.id)}
                                                    />
                                                    <MdDelete 
                                                        className="cursor-pointer text-red-500 hover:text-red-700" 
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