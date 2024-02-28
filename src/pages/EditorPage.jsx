import React from "react";
import logo from "/src/assets/logo.png";
import { useState } from "react";
import Client from "../components/Client";
import { MdContentCopy } from "react-icons/md";
import toast from "react-hot-toast";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const EditorPage = () => {
  const navigate = useNavigate()
  const location =useLocation();

  const [clients, setClients] = useState([
    { username: "Riyasat", socketId: 1 },
  ]);

  const copyText = () =>{
    navigator.clipboard.writeText(location.state.roomId)
    toast("RoomId Copied to clipboard",{
      icon: <MdContentCopy/>
    })
  }

  const leave = () =>{
    toast.error("Room Left")
    navigate("/")
  }

  const backtoHome = () =>{
    navigate("/")
  }

  return (
    <div className="flex text-white bg-primary ">
      <div className=" w-[20%]  resize h-screen flex flex-col bg-primary p-6 pt-10 ">
        <div className=" w-fit flex h-8 gap-2 cursor-pointer" onClick={backtoHome} >
          <img src={logo} className="h-8 " alt="logo" />
          {/* <div className=' border-r h-12 '/> */}
          <h1 className=" font-extrabold text-2xl">CodeSync</h1>
        </div>
        <div className="pt-10 text-xl font-semibold ">Connected</div>

        <div className="  flex flex-col h-full justify-between    ">
          <div className="pt-5 flex  overflow-y-scroll max-h-[60vh]   flex-wrap gap-2">
            {clients.map((client) => (
              <Client name={client.username} key={client.socketId} />
            ))}
            {/* <Client userName = "ri" /> */}
          </div>
          <div className=" flex flex-col items-center gap-2">
            <button onClick={copyText} className=" border border-white/60 w-full text-white/60  font-semibold p-2 rounded-xl flex justify-center items-center gap-2 hover:bg-white/60 hover:text-primary "> <MdContentCopy className=" delay-0"/> Copy RoomId</button>
            <button onClick={leave} className=" bg-red-600 w-full  hover:bg-red-700 p-2 rounded-xl flex justify-center items-center">Leave</button>
          </div>
        </div>
      </div>
      <div className=" w-[80%] h-screen bg-secondary/10 ">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
