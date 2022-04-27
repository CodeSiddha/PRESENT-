import React from 'react'
export default function Header(){
    return(
        // bg-gradient-to-r from-[#1e1e62] via-[#2330c2] href-[#142724]
        // bg-gradient-to-r from-[#120336] via-[#100a55] href-[#142724]
            <header className='sticky top-0 z-50 m-auto px-10 py-5 bg-gradient-to-r from-[#120336] to-[#272c68] ' >
                <div className='flex justify-center items-center'>
                    <a href='/' className='font-bold text-2xl  text-green-500 font-lato m-auto'>PRESENT!!</a>
                </div>
            </header>   
       
    )
}