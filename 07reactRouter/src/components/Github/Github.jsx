import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()
//     const [data, setData] = useState(null)

//     useEffect(() => {
//         fetch('https://api.github.com/users/Gaurang-1919')
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//                 setData(data)
//             })
//         }, [])

    return (
        <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl">
            Github followers: {data?.followers ?? 'loading...'}
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Gaurang-1919')
    return response.json()
}