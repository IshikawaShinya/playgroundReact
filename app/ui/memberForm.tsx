import {useState}from 'react';

export default function memberForm(props: {index:number,value:boolean,set: any}) {
    //Rendered more hooks than during the previous render.
    //原理原則がわからん。
    //setはそのタイミングでレンダリング走る。そのため、setの前にsetを書くとエラーが出る。
    //topレベルでまとめてuseStateを宣言する。もしくは他の関数を

    return(
        <div>
            <button
              className = 'rounded bg-white h-5 w-10 text-black'
              onClick={()=>{props.set}}

              >
                完了
            </button>
            <button
              className = 'rounded bg-white h-5 w-10 text-black'
              onClick={()=>{props.set}}
              >
                編集
            </button>
            <input
              placeholder = 'write money'
              className = 'text-black bg-white'
              disabled = {props.value}
            //   onChange = {}
            //   value = {}
            >
            </input>
        </div>
    )
}