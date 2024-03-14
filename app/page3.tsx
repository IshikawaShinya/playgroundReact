"use client"
import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useTimeoutFn } from 'react-use'
import clickCount from './ui/clickCount' 
import inputUserName from './ui/inputUserName'
import sendMoney from './ui/sendMoney'
import manageForm from './ui/manageForm'
import memberForm from './ui/memberForm'

// Stateの配列への追加
let nextId = 0;

export default function Home() {
  let [isShowing, setIsShowing] = useState(true)
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500)
  const [count,setCount] =useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  function Panel(props: {title: string, children: string,isActive: boolean,onshow: any}){
    return(
      <section className='panel rounded border-red'>
        <h5>{props.title}</h5>
        {props.isActive ? 
        (<p>{props.children}</p>)
      :(
        <button onClick = {props.onshow}>
          show
        </button>
      )
      }
      </section>
    )
  }
  // Stateの配列への追加
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([{id:0,name:''}]);
  return (
    <div className="flex flex-col items-center py-16">
      <p className='p-4'>Work2</p>
      {/* <p className='p-2'>単一のフォーム</p>
      <div>
        {memberForm({})}
      </div> */}
      {/* <p className='p-2'>管理可能なフォーム</p> */}
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
