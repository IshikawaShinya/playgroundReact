import { useState } from 'react'


export default function InputUserName(props: {}) {

    const [familyName,setFamilyName] =useState('')
    const [firstName,setFirstName] =useState('')
    function resetName(){
        setFamilyName('')
        setFirstName('')
      }
    return(
        <div>
            <input 
            placeholder='family name'
            className='text-black'
            onChange={e=>setFamilyName(e.target.value)}
            value={familyName}
            >
            </input>
            <div className='h-1'></div>
            <input
            placeholder='last name'
            className='text-black'
            onChange={e=>setFirstName(e.target.value)}
            value={firstName}>
            </input>
            <div className='h-1'></div>
            {/* リセットする */}
            <button 
            className='rounded bg-white h-5 w-10 text-black'
            onClick={()=>resetName()}
            >
            reset
            </button>

        </div>
    )
}