import React, { memo } from 'react'


const Navbar = ({ adjective, getAdj  }) => {
    console.log('Navbar rendered')
    return (        <>
            <div>Navbar
                <br />
                i am a {adjective} navbar {getAdj()}
               
            </div> 
        </>
    )
}

export default memo(Navbar)
// Using memo to prevent unnecessary re-renders
// This will only re-render if the props change