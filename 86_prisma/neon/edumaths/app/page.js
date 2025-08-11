"use client";

// import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Component() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const [form, setform] = useState({
        name: '',
        email: '',
        username: '',
        profilePicture: '',
        coverPicture: '',
        razorpayId: '',
        razorpaySecret: ''
    })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setUsers((prev) => [...prev, data]);
  };

  console.log(users);
  
  return (
    <>
     
      <div>
        <h1>Users</h1>
        {users.map((u) => (
          <p key={u.id}>{u.name}</p>
        ))}
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input value={form.name} onChange={handleChange} type="text" name="name" placeholder="Name" required />
          <input value={form.email} onChange={handleChange} type="email" name="email" placeholder="Email" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
