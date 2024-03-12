import {useState}from 'react';

export default function memberForm(props: {}) {
    //Rendered more hooks than during the previous render.
    //原理原則がわからん。
    //setはそのタイミングでレンダリング走る。そのため、setの前にsetを書くとエラーが出る。
    //topレベルでまとめてuseStateを宣言する。もしくは他の関数を

    return(
        <div>
            {/* <button
              className = 'rounded bg-white h-5 w-10 text-black'
              onClick={()=>{setInputdisabled(true)}}

              >
                完了
            </button>
            <button
              className = 'rounded bg-white h-5 w-10 text-black'
              onClick={()=>{setInputdisabled(false)}}
              >
                編集
            </button>
            <input
              placeholder = 'write money'
              className = 'text-black bg-white'
              disabled = {inputdisabled}
            //   onChange = {}
            //   value = {}
            >
            </input> */}
        </div>
    )
}