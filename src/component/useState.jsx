import React,{useState} from 'react'

const useState = () => {
    const [title, setTitle] = useState("")

    function addTitle(){
        setTitle("this is our title")
    }
  return (
    <div>
        <h1>{title}</h1>
        <button onclick={addTitle}>click me</button>
      
    </div>
  )
}

export default useState
