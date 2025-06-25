import React, { useEffect } from 'react'
//import './Navbar.css'


const Navbar = ({ color }) => {

    useEffect(() => {
        alert("i render of every change")
      
    }) 

    useEffect(() => {
        alert("i render on 1st render")
      
    },[]) 

    useEffect(() => {
      
    
      return () => {
        alert("navbar unmounted")
      }
    }, [])
    
    

    useEffect(() => {
        alert(`coolor is ${color}`)
    }, [color])


    return (
        <div>
            <div>navbar</div>
            <div className='Navbar'>
                <div>
                    {color}
                </div>
                <div className="dash">
                    dashboard
                </div>
                <div className="user">user</div>
            </div>
        </div>
    )
}

export default Navbar