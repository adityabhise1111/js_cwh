import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d)
    })
  }

  const onSubmit = async (data) => {

    // await delay(2000)
    // console.log(data)
    // if(data.username=== "admin" && data.password === "12345678")
    //   setError("myForm",{message:"Login successful"})

    let r = await fetch("http://localhost:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    let res = await r.text()
    console.log(data, res)
  }


  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        {isSubmitting && <div className="loader"></div>}
        <input {...register("username", { required: { value: true, message: "Naam to dal" }, minLength: { value: 3, message: "Kamse kam 3 to dal" }, maxLength: { value: 15, message: "bas bhai kitna dal riya hai 5 bahut hai" } })} type="text" />
        {errors.username && <div className='red'> {errors.username.message} </div>}
        <input {...register("password", { required: { value: true, message: "pass kon dalega" }, minLength: { value: 8, message: "Kamse kam 8 to dal" }, maxLength: { value: 15, message: "bas bhai kitna dal riya hai 10 bahut hai " } })} type="password" />
        {errors.username && <div className='red'> {errors.password.message} </div>}
        <input type="submit" value="submit" disabled={isSubmitting} />
        {errors.myForm && <div> {errors.myForm.message}</div>}
      </form>
    </>
  )
}

export default App
