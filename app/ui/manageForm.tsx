import { useState } from 'react'
import memberForm  from './memberForm'

export default function manageForm(props: {}) {
    const [numberForm,setNumberForm] =useState([0])
    const[inputdisabled,setInputdisabled] = useState(false)
    // const [inputdisabled2,setInputdisabled2] = useState([false])
    let text = 'write member name'   
    const addForm = () =>{
        let copyNumberForm = [...numberForm]
        copyNumberForm.push(0)
        setNumberForm(copyNumberForm)
    }
    const reduceForm = () =>{
        let copyNumberForm = [...numberForm]
        copyNumberForm.splice(-1,1)
        setNumberForm(copyNumberForm)
    }

    return(
        // 
        // complete：プラスボタンを押したらフォームが増え,削除ボタンを押すとフォームが消える.
        // complete:コンポーネントを複数回呼ぶ。 ⓪動的に同じ処理を繰り返す。forEach①②配列の要素数分の実行をする。
        // complete:コンポーネントを縦に並べる.cssで制御する
        // フォームの右側に完了するボタンをつける.その右に編集ボタンをつける
        // stateの配列を使って、
        // TODO:stateに配列を用意し、追加、削除する。もっと配列操作を経験する。 
        <div>
            <button
                className='rounded bg-white h-5 w-5 text-black'
                onClick={()=>(addForm())}
            >
                +
            </button>
            <button
                className='rounded bg-white h-5 w-5 text-black'
                onClick={()=>(reduceForm())}
            >
                -
            </button>
            <ul>
                {Array.from(numberForm,()=>
                    <li>
                        <div>
                            {/* {memberForm({})} */}
                            {/* ここでpropsとか使ったら、格好良くない？言われたルール通りの内容じゃない？ */}
                            <button
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
                            </input>
                        </div>
                    </li>
                )
                }
            </ul>
            
            {/* <p>{Array.from(text).map{(tx)=>{"¥"+tx}}}</p> */}
            {/* <p>{const endText = updatedTexts.at(-1) ?? ""const endText = updatedTexts.at(-1) ?? ""}</p> */}
            {/* {isoverlimit &&<div> 決定</div>} */}
            {/* clsx */}
        </div>
    )
}
