import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from './Card'

const DataFetch = () => {
    const [posts, setPosts] = useState([])
    const [limit, setLimits] = useState(10)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => setPosts(res.data.slice(0, limit)))
            .catch(err => console.log(err))

    }, [limit]) 


    return (
        <>
            <div className='text-center'>
                {
                    posts.map((item) => {
                        // return <li key={item.id}>{item.body}</li>
                        return <Card card_item={item} />
                    })
                }
                {
                    posts.length < 100 &&
                    // limit < 100 &&
                    <button className='btn btn-success btn-lg  m-4' onClick={() => { setLimits(limit + 10) }}>Show More</button>
                }
                {
                    posts.length > 10 &&
                    // limit > 10 &&
                    <button className='btn btn-primary btn-lg'  onClick={() => { setLimits(limit - 10) }}>Show Less</button>
                }
            </div>
        </>
    )
}

export default DataFetch