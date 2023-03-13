import React, { useState } from "react";
import BodyChat from "./BodyChat";
import InputChat from "./InputChat";
import { useMutation } from "react-query";
import { fetchResponse } from "../api";

const Home = () => {
  const [chat, setChat] = useState([]);

  const mutation = useMutation({
    mutationFn: () => {
      return fetchResponse(chat);
    },

    onSuccess: (data) =>
      setChat((prev) => [
        ...prev,
        { sender: "ai", message: data.message.replace(/^\n\n/, "") },
      ]),
  });

  const sendMessage = async (message) => {
    await Promise.resolve(setChat((prev) => [...prev, message]));
    mutation.mutate();
  };
  return (
    <div className="bg-[#343541] h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-between  align-middle">
      <div className="uppercase font-bold  text-2xl text-center mb-3">
        Fake chat GPT @@
      </div>

      <div
        className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center
      scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md
      "
      >
        <BodyChat chat={chat} />
      </div>

      <div className="w-full max-w-4xl min-w-[20rem] self-center scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md">
        <InputChat sendMessage={sendMessage} loading={mutation.isLoading} />
      </div>
    </div>
  );
};

export default Home;
