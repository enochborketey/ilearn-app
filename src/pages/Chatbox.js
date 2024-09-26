import React, { useContext, useState, useEffect } from "react";
import ContextProvider, { Context } from "../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrip,
  faSwatchbook,
  faClipboardList,
  faBarsProgress,
  faMessage,
  faBell,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const ChatBox = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  };
  // State to store only the latest conversation
  const [history, setHistory] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [loadingState, setLoadingState] = useState(false); // New loading state for AI response
  const [userMessage, setUserMessage] = useState(""); // State to track user's input immediately

  // Effect to update conversation with the latest message and response
  useEffect(() => {
    // Load the recent conversation from localStorage
    const savedHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    if (savedHistory.length > 0) {
      setHistory(savedHistory);
      setSelectedConversation(savedHistory[savedHistory.length - 1]);
    }
  }, []);

  useEffect(() => {
    if (recentPrompt && resultData) {
      const newConversation = { prompt: recentPrompt, response: resultData };
      const updatedHistory = [...history, newConversation];
      setHistory(updatedHistory);
      setSelectedConversation(newConversation); // Set the latest conversation for display
      setLoadingState(false); // Set loading state to false when response is received

      // Save the updated history to localStorage
      localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
    }
  }, [recentPrompt, resultData]);

  // Function to handle sending messages
  const handleSend = () => {
    if (input.trim() === "") return; // Prevent sending empty messages
    setUserMessage(input); // Store user message to display immediately
    setLoadingState(true); // Show loading state while waiting for AI response
    onSent(); // Trigger the context function to handle AI response
    setInput(""); // Clear the input field after sending
  };

  // Function to delete a specific conversation
  const handleDelete = (indexToDelete) => {
    const updatedHistory = history.filter(
      (_, index) => index !== indexToDelete
    );
    setHistory(updatedHistory);
    localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
  };

  // Function to handle selecting a conversation from recent history
  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
  };

  // Helper function to truncate AI response to a few sentences
  const truncateResponse = (response, maxLength = 100) => {
    if (response.length > maxLength) {
      return response.substring(0, maxLength) + "...";
    }
    return response;
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="chatbox-container flex">
      {/* Sidebar for Recent Conversations */}
      <button
        className="sidebar-toggle-button bg-[#F61B01]  "
        onClick={handleToggleSidebar}
      >
        ☰ {/* Hamburger icon */}
      </button>

      {/* Sidebar for Recent Conversations */}
      {isSidebarOpen && (
        <div className="sidebar w-1/4 bg-white shadow-lg overflow-y-auto p-4">
          <h2>Recent Conversations</h2>
          <div className="space-y-3">
            {history.length === 0 ? (
              <p className="text-white">No recent conversations</p>
            ) : (
              history.map((item, index) => (
                <div
                  key={index}
                  className="border-b pb-2 flex justify-between items-center cursor-pointer"
                  onClick={() => handleSelectConversation(item)}
                >
                  <div>
                    <p className="user"> 
                      <span className="black">User:</span> <br></br>{item.prompt}</p>
                    <p className="ai">
                      <span className="black">AI: </span>
                      <br></br>{truncateResponse(item.response)}
                    </p>

                  <button
                    className="del  hover:text-black focus:outline-none"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(index);
                    }}
                  >
                    Delete
                  </button>   
                  </div>
                 
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Main Chat Area */}
      <div class="flex-1 flex flex-col justify-between bg-[#DADBF3] shadow-lg p-4 main-chat" >
        {/* Header */}
        <div className="border-b-2 pb-3 mb-3">
          <h1 className="text-4xl font-bold text-black">ChatBox</h1>
        </div>

        {/* Messages Section */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-3 p-3">
          {/* Display the user's input immediately */}
          {userMessage && (
            <div className="bg-[#F61B01] rounded-lg p-3 text-white">
              {userMessage}
            </div>
          )}

          {/* Show AI response or loading indicator */}
          {loadingState ? (
            <div className="bg-[#020BAA] rounded-lg p-3 text-white">
              Loading AI response...
            </div>
          ) : (
            selectedConversation && (
              <div className="bg-[#06082D] rounded-lg p-3 text-white">
                {selectedConversation.response}
              </div>
            )
          )}
        </div>

        {/* Input Section */}
        <div className="border-t pt-3 sticky bottom-0 ">
          <div className="flex justify-between gap-3">
            <input
              type="text"
              className="flex-1 border border-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="rounded-md  px-5 z-30 p-2 bg-[#F61B01]   text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-red-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700  hover:[text-shadow:2px_2px_2px_#fda4af] "
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
