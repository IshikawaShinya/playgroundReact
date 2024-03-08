export default function memberForm(props: {}) {
    return(
        <div>
            <input
              placeholder = 'write money'
              className = 'text-black bg-white'
            //   onChange = {}
            //   value = {}
            >
            </input>
            <button
              className = 'rounded bg-white h-5 w-10 text-black'
              >
                完了
            </button>
            <button
              className = 'rounded bg-white h-5 w-10 text-black'
              >
                編集
            </button>
        </div>
    )
}