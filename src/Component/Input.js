import React,{useState} from 'react'

function Input(props) {
const [title,setTitle] = useState("")
const [content,setContent] = useState("")

    function addTitle(event){
        setTitle(event.target.value)
    }

    function addContent(event){
        setContent(event.target.value)
    }
    
    const submitHandler =(event)=>{
        event.preventDefault();
        const data={
            title:title,
            detail:content
        };
        console.log(data.title,data.content)
        setContent('')
        setTitle('')
        props.inputData(data)
        props.onClose()
    }

  return (
    <div className='card'>
    <form onSubmit={submitHandler} className='modal'>

        <label>Title</label><br/>
        <input type='text' placeholder='enter the title here' value={title} onChange={addTitle}/><br/>
        <label>Content</label> <br/>
        <input type='text' placeholder='enter the content here' value={content} onChange={addContent} /> <br/><br/>
        <button type='submit' className='btn btn--alt'  >Add</button>
        <button className='btn'  onClick={props.onClose} >cancle</button>
    </form>
    </div>
  )
}

export default Input