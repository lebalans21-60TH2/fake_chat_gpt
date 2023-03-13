import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

const BodyChat = ({ chat }) => {
  const aiStyle =
    "bg-white bg-opacity-30 backdrop-blur-lg dropshadow-md mr-auto";

    const parent = useRef(null);
    const bottomRef = useRef(null);

        // only for aut animations
        useEffect(()=>{
            parent.current && autoAnimate(parent.current);
        }, [parent])
    
        //for scrolling bottom
        useEffect(()=>{
            bottomRef.current?.scrollIntoView({behavior: "smooth"})
        }, [chat])
  return (
    <div className="flex flex-col gap-4" ref={parent}>
      {chat.map((message, i) => {
        return (
          <div
            key={i}
            className={`border-[#2A2B32] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] bg-[#444654] ${ message.sender === "ai" && aiStyle}`}
          >
            <pre className="whitespace-pre-wrap ">
              <span>{message.message}</span>
            </pre>
          </div>
        );
      })}

      {/* User chat */}
      {/* <div className='border-[#2A2B32] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] bg-[#444654]'>
            <pre className='whitespaces-pre-wrap'>
                <span>Hi leen</span>
            </pre>
        </div> */}

      {/* AI chat */}
      {/* <div
        className={`border-[#2A2B32] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] bg-[#444654] ${aiStyle}`}
      >
        <pre>
          <span>alo alo</span>
        </pre>
      </div> */}
       <div ref={bottomRef} className="h-3"></div>
    </div>
  );
};

export default BodyChat;
