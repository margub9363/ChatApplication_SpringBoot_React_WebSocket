import React from "react";

const ChatPage = () => {
  return (
    <div className="">
      <header className="dark:border-gray-700 shadow dark:bg-gray-900 py-5 flex justify-around item-center">
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
    </div>
  );
};

export default ChatPage;
