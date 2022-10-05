import React from "react"

function InputArea(props)
{
    const [item, setItem] = React.useState("")
    function handleChange(event)
  {
    setItem(event.target.value)
  }

  

    return(
        <div className="form">
        <input 

            onChange={handleChange} 
            type="text" name="item" 
            value={item}

            />
        <button 
            onClick={() => {
                props.onAdd(item, setItem)
            }}
        >
          <span>Add</span>
        </button>
      </div>
    )
}

export default InputArea;