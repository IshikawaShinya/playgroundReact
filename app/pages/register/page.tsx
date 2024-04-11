"use client"
import Link from 'next/link'
import { useState } from 'react'
export default function Register() {

    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const post =()=>{
        const body ={
            email:email,
            password:password
        }
        fetch('http://localhost:8000/signup',{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
          })
    }

    const get =()=>{
        fetch('http://localhost:8000/users/',{
            method:"GET",
            headers:{
              "Content-Type":"application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div className='flex flex-col items-center py-16'>            
            <div className="p-16 text-white">新規登録</div>
            <label className='text-white'>email</label>
            <input
            placeholder='mail'
            className='text-black'
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            type='email'
            >
            </input>
            <div className='flex flex-row justfy-center items-center'>
                <label className='text-white'>password</label>
            </div>
            <input
            placeholder='password'
            className='text-black'
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            type='password'
            >
            </input>
            <button
            className='rounded bg-white h-5 w-15 text-black'
            onClick={post}
            >
                登録
            </button>
            <button
            onClick={get}
            >
            get
            </button>
        </div>

        // <section className="h-screen">
        //     <div className="h-full">
        //         <div className="flex h-full flex-wrap items-center justify-center">
        //             <div className="shrink-1 mb-12 grow-0 basis-auto">
        //                 <div className="mb-12">
        //                     <form action="">
        //                         <div className="flex flex-row items-center justify-center">
        //                             <p className="mb-0 me-4 text-lg">Sign Up With</p>
        //                             <button
        //                             type="button"
        //                             data-twe-ripple-init
        //                             data-twe-ripple-color="light"
        //                             className="mx-1 inline-block h-9 w-9 rounded-full bg-primary fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        //                             >
        //                                 <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
        //                                     <svg
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     viewBox="0 0 320 512"
        //                                     >
        //                                         <path
        //                                         d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
        //                                     </svg>
        //                                 </span>
        //                             </button>
        //                             <button
        //                             type="button"
        //                             data-twe-ripple-init
        //                             data-twe-ripple-color="light"
        //                             className=" mx-1 inline-block h-9 w-9 rounded-full bg-primary fill-white p-2 uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        //                             >
        //                                 <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
        //                                     <svg
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     viewBox="0 0 448 512">
        //                                     <path
        //                                         d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
        //                                     </svg>
        //                                 </span>
        //                             </button>
        //                             <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
        //                                 <p
        //                                 className="mx-4 mb-0 text-center font-semibold dark:text-white">
        //                                     or
        //                                 </p>
        //                             </div>
        //                             <div
        //                             className="relative mb-6"
        //                             data-twe-input-wrapper-init
        //                             >
        //                                 <input
        //                                 type="text"
        //                                 className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
        //                                 id="exampleFormControlInput2"
        //                                 placeholder="Email address"
        //                                 >
                                            
        //                                         Email address
                                            
        //                                 </input>
        //                             </div>
        //                             <div className = "relative mb-6" data-twe-input-wrapper-init>
        //                                 <input 
        //                                 type="password" 
        //                                 className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
        //                                 id="exampleFormControlInput22"
        //                                 placeholder="Password"
        //                                 >
        //                                         Password
        //                                 </input>
        //                             </div>
        //                             <div className="mb-6 flex items-center justify-between">
        //                                 <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
        //                                     <input 
        //                                     type="checkbox"
        //                                     className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
        //                                     value=""
        //                                     id="exampleCheck2"
        //                                     >
        //                                     </input>
        //                                     <label
        //                                     className="inline-block ps-[0.15rem] hover:cursor-pointer"
        //                                     htmlFor="exampleCheck2"
        //                                     >
        //                                         Remember me
        //                                     </label>
        //                                 </div>
        //                                 <Link
        //                                 href="#"
        //                                 >
        //                                     Terms and Conditions
        //                                 </Link>
        //                             </div>
        //                             {/* register button */}
        //                             <div className='text-center lg:text-left'>
        //                                 <button
        //                                 className="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        //                                 data-twe-ripple-init
        //                                 data-twe-ripple-color="light"
        //                                 >
        //                                     Register
        //                                 </button>
        //                                 {/* Register Link */}
        //                                 <p
        //                                 className='mb-0 mt-2 pt-1 text-sm font-semibold'
        //                                 >
        //                                     Have an account?
        //                                     <Link
        //                                     href="#!"
        //                                     className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
        //                                     >
        //                                         Lgoin
        //                                     </Link>

        //                                 </p>
        //                             </div>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}