import React, { useState } from "react";

const InputChat = ({sendMessage, loading}) => {
  const [quest, setQuest] = useState("");

  const handleSubmit =()=>{
  if(quest ==="") return;
  sendMessage({sender:"user", message: quest})
  setQuest("");
  }
  return (
    <div className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg px-5 py-4 overflow-auto relative ">
      {loading ? (
        <img src="./loader.gif" className="w-8 m-auto" />
      ) : (
        <>
         <textarea
      onKeyDown={(e) => {
        e.keyCode === 13 && e.shiftKey === false && handleSubmit();
      }}
        row={1}
        className="border-o bg-transparent outline-none w-10/12"
        value={quest}
        type = 'text'
        onChange={(e)=> setQuest(e.target.value)}
      />
      </>)}
     
      <img
      onClick={handleSubmit}
        src="./send.png"
        alt="send"
        className="absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-110"
      />
    </div>
  );
};

export default InputChat;
