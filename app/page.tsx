"use client"
import { Transition } from '@headlessui/react'
import { useState } from 'react'
import { useTimeoutFn } from 'react-use'
import clickCount from './ui/clickCount' 
import inputUserName from './ui/inputUserName'
import sendMoney from './ui/sendMoney'
import manageForm from './ui/manageForm'
import Link from 'next/link'
import { useRouter } from "next/navigation"
// Stateの配列への追加
let nextId = 0;

const navigation ={
  register:{href:'/pages/register'},
  loginsuccess:{href:'/pages/loginSuccess'},
  passwordForgot:{href:'/pages/passwordForgot'}
}
export default function Home() {
  //Work3 REST API
  const [message, setMessage] = useState('')
  const [mail,setMail] = useState('')
  const [password,setPassword] = useState('')
  const [alertMessage,setAlertMessage] = useState<string>('')
  const router = useRouter();

  console.log(router)

  const pushLoginButton = () => {
    const body = {
      email:mail,
      password:password
    }
    fetch('http://localhost:8000/signin',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {
      setMessage(data.res)
      console.log(data.res)
      switch (String(data.res)){
        case 'empty':
          setAlertMessage('メールを入力してください')
          break
        case "success":
          router.push(navigation.loginsuccess.href)
          console.log('ログイン成功')
          break
        case "wrong mail":
          setAlertMessage('登録したログイン名と異なります')
          break
        default :
          setAlertMessage('読み込み完了')
          break
      }
    })
  }

  // const test =()=>{
  //   const body = {
  //     user_id:1,
  //     item:,
  //     db:
  //   }
  // }
  //APIに''を取得する
  return (
    <div className="flex flex-col items-center py-16">
      <div className='flex flex-col w-96 '>
        <p className='p-4 center'>Work4</p>
        <label className='text-white'>email address</label>
        <input
        placeholder='mail'
        className='text-black'
        onChange={(e)=>setMail(e.target.value)}
        value={mail}
        >
        </input>
        <div className='flex flex-col w-max'>
          <div className='flex-row justfy-center items-center'>
            <div>
            <label  className='text-white'>password</label>
            </div>
            <div className='right-0'>
              <Link
              href={navigation.passwordForgot.href}
              className="text-white"
              >
                Password Forgot?
              </Link>
            </div>
          </div>

          <input className='text-black'
          placeholder='password'
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          type='password'
          >
          </input>
        </div>

        <button
        className='rounded bg-white h-5 w-15 text-black'
        onClick={pushLoginButton}
        >
          {/* ログイン成功の時だけ画面遷移する。 */}
            ログイン
        </button>
        <div className='text-white'>
          {alertMessage}
        </div>
        <div className='items-right'>
        <Link
          href={navigation.register.href}
          className="text-white"
          >
            アカウントを持っていない方はこちら。新規登録
          </Link>
        </div>
      </div>
      {/* WORK3 */}
      {/* API */}
      <p className='p-4'>Work3</p>
      <p>{message}</p>
  
      <p className='p-4'>Work2</p>
      <div>
        {manageForm({})}
      </div>
      
      {/* WORK1 */}
      {/* 金額表示 */}
      <p className='p-4'>Work1</p>
      <div>
        {sendMoney({})}
      </div>
      {/*  */}
      {/* クリックカウント */}
      <p className='p-4'>Work0</p>
      <div>
        {clickCount({})}
      </div>
      {/* 名前入力フォーム */}
      {/* 入力できる */}
      {/* 変化があるたびに変更の値をstateに加える */}
      <div>
        {inputUserName({})}
      </div>

  </div>
  )
}
