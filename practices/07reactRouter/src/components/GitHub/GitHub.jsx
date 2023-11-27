import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'


function GitHub() {
    
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/${username}`)
    //     .then(response => response.json())
    //     .then(data => {
    //     setData(data)
    //     console.log(data);
    //     })
    // }, [])
    //console.log(username);
    // const { username } = useParams()
    const data = useLoaderData()
    return (
        <>
            <div className='flex-none rounded-3xl bg-sky-700 text-white p-4 max-w-lg w-full ml-80'>
                <h1 >
                    ID: {data.id} 
                </h1><br />
                <h1 >
                    User Name: {data.name} 
                </h1><br />
                <h1 >
                    Bio: {data.bio}
                    
                </h1><br />
                <h1>
                    Location: {data.location}
                </h1>
            </div>

            <div className='flex bg-gray-200 justify-center p-4' >
                <img className='rounded-xl' src={data.avatar_url} alt="" />
            </div>
        </>
    )
}

export default GitHub

export const githubInfoLoader = async() => {

    const response = await fetch(`https://api.github.com/users/shikharbahikmagar`)
    return response.json()
}
