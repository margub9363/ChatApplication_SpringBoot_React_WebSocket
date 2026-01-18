import React, { useRef, useState } from "react";
import { MdAttachFile, MdSend } from "react-icons/md";
import Tannu from "../assets/Tannu.png";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      content: "hello",
      sender: "Rahman",
    },
    {
      content: "hii",
      sender: "Tannu",
    },
    {
      content: "hey",
      sender: "Margub",
    },
    {
      content: "yupp",
      sender: "Rocky",
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const chatBoxRef = useRef(null);
  const [stompClient, setStompClient] = useState(null);
  const [roomId, setRoomId] = useState("");
  const [currentUser] = useState("Rahman");
  return (
    <div className="">
      <header className="dark:border-gray-700 fixed h-20 w-full shadow dark:bg-gray-900 py-5 flex justify-around item-center">
        <div>
          <h1 className="text-xl font-semibold">
            Room : <span>Family Room</span>
          </h1>
        </div>
        <div>
          <h1 className="text-xl font-semibold">
            Room : <span>Rahman</span>
          </h1>
        </div>
        <div>
          <button className="dark:bg-red-500 dark:hover:bg-red-700 px-3 py-2 rounded-full">
            Leave Room
          </button>
        </div>
      </header>

      <main className=" px-10 py-20 border w-2/3 dark:bg-slate-600 mx-auto h-screen overflow-auto">
        {messages.map((message, index) => (
          <div key={index} className="flex justify-start">
            <div className="my-2 bg-blue-600 p-2 rounded max-w-xs">
              <div className="flex flex-row">
                <img className="h-10 w-10 gap-2" src={Tannu} alt="" />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold">{message.sender}</p>
                  <p>{message.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
      <div className="fixed bottom-4 w-full h-16">
        <div className="h-full pr-10 gap-4 flex items-center justify-between w-1/2 mx-auto dark:bg-gray-900 rounded-full">
          <input
            type="text"
            placeholder="Type your message here..."
            className="dark:border-gray-600 w-full dark:bg-gray-800 px-5 py-2 rounded-full h-full focus:outline-none"
          />
          <div className="flex gap-1">
            <button className="dark:bg-purple-600 h-10 w-10 flex justify-center items-center rounded-full">
              <MdAttachFile size={20} />
            </button>
            <button className="dark:bg-green-600 h-10 w-10 flex justify-center items-center rounded-full">
              <MdSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
