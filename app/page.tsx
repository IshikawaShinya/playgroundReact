"use client"
import { Transition } from '@headlessui/react'
import { useState } from 'react'
import { useTimeoutFn } from 'react-use'
import clickCount from './ui/clickCount' 
import inputUserName from './ui/inputUserName'
import sendMoney from './ui/sendMoney'
import manageForm from './ui/manageForm'
import Link from 'next/link'
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

  const pushLoginButton = () => {
    const body = {
      mail:mail
      ,password:password
    }
    fetch('http://localhost:8000/',{
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
          setAlertMessage('ログイン成功')
          break
        case "wrong mail":
          setAlertMessage('登録したログイン名と異なります')
          break
        default :
          setAlertMessage('読み込み完了')
          break
      }
      // if (String(data.res) === 'empty')
      //   console.log("if成功")
    })
    }
  //APIに''を取得する
  return (
    <div className="flex flex-col items-center py-16">

      {/* Loginとsignup機能 */}
      {/* 入力画面。 */}
      {/* ログイン画面の一連の流れ
      入力。ログイン */}
      {/* バックエンドに渡す。
      バックエンドから帰ってくる。とりあえず。 */}
      {/* ログイン判定？ホーム画面遷移:エラー文書き出し */}
      {/* signUp機能 */}
      <p className='p-4'>Work4</p>
      <div className='flex flex-col'>
        <label className='text-white'>email address</label>
        <input
        placeholder='mail'
        className='text-black'
        onChange={(e)=>setMail(e.target.value)}
        value={mail}
        >
        </input>
        <div className='flex flex-row justfy-center items-center'>
          <label  className='text-white'>password</label>
          <div>
            <Link
            href={navigation.passwordForgot.href}
            className="ms-32 text-white"
            >
              Password Forgot?
            </Link>
          </div>
        </div>
        <input
        placeholder='password'
        className='text-black'
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        >
        </input>
        <button
        className='rounded bg-white h-5 w-15 text-black'
        onClick={pushLoginButton}
        >
          <Link
          href={navigation.loginsuccess.href}
          className="text-black"
          >
            ログイン
          </Link>
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
