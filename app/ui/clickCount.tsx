import { useState } from 'react'

export default function ClickCount(props: {}) {
    const [count,setCount] =useState(0)
    return(
        <div>
            <button
            className='rounded bg-white h-5 w-10 text-black'
            onClick={()=>(setCount(count+1))}
            >
            </button>
            {count}
        </div>

    )
}