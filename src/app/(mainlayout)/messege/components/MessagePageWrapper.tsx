"use client";

import { useGetAllUserDataQuery } from "@/redux/api/Features/user/userApi";
import { useAppSelector } from "@/redux/hook";
import { TUser } from "@/types";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdGroupAdd, MdPersonAdd } from "react-icons/md";

interface Message {
  isMine: boolean;
  text: string;
}

const ChatComponent = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello there!", isMine: false },
    { text: "Hi! How can I help you?", isMine: true },
    { text: "Is real time message implemented?", isMine: false },
    { text: "Sorry sir! not yet. It'll be implemented soon!!!", isMine: true },
    { text: "How many times need to implement it?", isMine: false },
    {
      text: "Actually we can't deploy free Socket.io server, that's why i the real-time messaging not implemented yet, i have knowledge about Socket.IO and i have created a real-time chat application but i can't deploy it free",
      isMine: true,
    },
  ]);

  const { currentPage, limit, searchTerm } = useAppSelector(
    (state) => state.job
  );
  const { data, isLoading } = useGetAllUserDataQuery([
    {
      name: "limit",
      value: limit,
    },
    {
      name: "page",
      value: currentPage,
    },
    {
      name: "searchTerm",
      value: searchTerm,
    },
  ]);

  const handleMessageSubmit = (text: string) => {
    const newMessage = { text, isMine: true };
    setMessages([...messages, newMessage]);
  };

  const users = data?.data;

  return (
    <div className="mt-3">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* User List */}
        <div className="md:w-5/12">
          <div className="h-[82vh] bg-gray-200 p-4 rounded overflow-y-scroll">
            <div className="flex justify-between items-center">
              <div>
                <p>Message</p>
              </div>
              <div className="flex items-center space-x-3">
                <MdPersonAdd className="text-2xl text-gray-600" />
                <MdGroupAdd className="text-2xl text-gray-600" />
              </div>
            </div>
            <div className="relative mt-4">
              <div className="absolute top-2 left-3">
                <BiSearchAlt2 className="text-2xl text-gray-600" />
              </div>
              <Input
                type="text"
                name="search"
                fullWidth
                className=""
                placeholder="Search Message"
              />
            </div>

            <div className="mt-4">
              {users?.map((user: TUser) => (
                <div
                  className="my-3 border rounded cursor-pointer"
                  key={user._id}
                >
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={user?.photo}
                      alt=""
                      width={500}
                      height={100}
                      className="size-14 rounded-full"
                    />
                    <p className="m-0 py-2 px-3 text-black hover:text-blue-500">
                      {user.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Box */}
        <div className="md:w-7/12 mt-4 md:mt-0">
          <div className="bg-white shadow rounded">
            <div className="p-4 border-b">
              <h3 className="text-lg">Chat Box</h3>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 ${
                      message.isMine ? "justify-end" : "justify-start"
                    }`}
                  >
                    <Image
                      src={
                        message.isMine
                          ? "https://i.ibb.co/WKJ4NJQ/367167d2-549d-42b7-a8ac-68f677e52f02.jpg"
                          : "https://i.ibb.co/v3LXJQs/a-young-24-year-old-bangladeshi-man-with-a-long-su-e7ho-SJVUTTOhubk5y-Xn-Msw-k-Tv-M9qhc-Sd-KWi0-EZ6.png"
                      }
                      alt="User"
                      width={500}
                      height={100}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="bg-gray-100 p-2 rounded">
                      {message.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 border-t">
              <MessageInput onMessageSubmit={handleMessageSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MessageInput: React.FC<{
  onMessageSubmit: (message: string) => void;
}> = ({ onMessageSubmit }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = () => {
    if (inputText.trim() !== "") {
      onMessageSubmit(inputText);
      setInputText("");
    }
  };

  return (
    <div className="flex">
      <Input
        type="text"
        className="flex-grow rounded-l"
        placeholder="Type your message..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button
        className="bg-blue-500 text-white rounded-r"
        onClick={handleSubmit}
      >
        Send
      </Button>
    </div>
  );
};

export default ChatComponent;
