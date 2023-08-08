import React, { useState } from 'react'
import Modal from './Modal'
import BackDrop from './BackDrop'
import Input from './Input'

function Todo(props) {
    
const [backdrop, setBackdrop] = useState(false)
function askConfirmation(){
    setBackdrop(true)
    console.log("to be deleted")
    console.log(props.data.id)
}

const deleteIdSender=()=>{
  props.listId(props.data.id) //send id to app to be deleted
  setBackdrop(false)

}
function closeBackDrop(){
    setBackdrop(false)
}
  return (
    <div className='card'>
      <h2>{props.data.title}</h2>
      <p>{props.data.detail}</p>
      {backdrop && <Modal onCancle={closeBackDrop} onConfirm ={deleteIdSender} />}
      {backdrop && <BackDrop OnclickBackDrop ={closeBackDrop}/>}
      <div className='actions'>
           <button className='btn' onClick={askConfirmation} >delete</button>
      </div>
      {/* <Input/> */}
  </div>
  )
}

export default Todo