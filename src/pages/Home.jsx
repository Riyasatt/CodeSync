import React from 'react'
import logo from "/src/assets/logo.png"
import { useState } from 'react'
import {v4 as uuidV4} from "uuid"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('')
  const [userName, setUserName] = useState('')

  const generateRoomId = () =>{
    const id = uuidV4();
    setRoomId(id)
    toast.success('RoomId Generated')

  }

  const joinRoom = () =>{
    if(!roomId || !userName){
      toast.error("Enter RoomId and UserName")
      return
    }
    navigate(`/editor/${roomId}`,{
      state : {
        userName,roomId
      }
    })
  }

  const handleEnter = (e) =>{
    if(e.code === "Enter"){
      joinRoom()
    }  
  }

  return (
    <div className=' min-h-screen min-w-full bg-primary text-white flex items-center justify-center'>
      <div className='w-full  sm:w-[30rem] sm:bg-white/10 sm:rounded-3xl p-10 sm:relative bottom-10'>
        <div className='flex justify-center items-center h-12 gap-5'>
          <img src={logo} className='h-12 ' alt="logo" />
          {/* <div className=' border-r h-12 '/> */}
          <h1 className=' font-extrabold text-4xl'>
            CodeSync
          </h1>
        </div>
        <div className=' flex flex-col gap-5 pt-40 sm:pt-14  '>
          <h4 className='font-bold'>
            Paste Invitaiton RoomID
          </h4>
          <input type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} onKeyUp={handleEnter} className=' w-full rounded-xl h-10 p-2 px-5 font-bold focus:outline-none text-primary/70' placeholder='Enter RoomId' />
          <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)} onKeyUp={handleEnter} className=' w-full rounded-xl h-10 p-2 px-5 font-bold focus:outline-none text-primary/70' placeholder='Enter Name' />
          <div className=' flex justify-end '>
          <button className='p-2 h-10 px-10 bg-tert hover:bg-tert/70 font-bold rounded-2xl' onClick={joinRoom}>
            Join
          </button>
          </div>
          <h2 className=' opacity-80 text-center'>
            If you don't have an invite ID, then create&nbsp; <button onClick={generateRoomId} className=' cursor-pointer text-secondary underline hover:font-semibold'> new room</button>
          </h2>
        </div>
          
      </div>
    </div>
  )
}

export default Home