import React from "react";
import { MdAttachFile, MdSend } from "react-icons/md";

const ChatPage = () => {
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

      <main className="py-20 border w-2/3 dark:bg-slate-600 mx-auto h-screen overflow-auto">
        <div className="message_container">
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1> <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
          <h1>hii</h1>
        </div>
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
