import { createContext, useState } from "react";
import run from "../Config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
        const [input, setInput] = useState("");
        const [recentPrompt, setRecentPrompt] = useState("");
        const [prevPrompt, setPrevPrompts] = useState([]);
        const [showResult, setShowResult] = useState(false);
        const [resultData, setResultData] = useState("");
        const [loading, setLoading] = useState(false);

        const onSent = async (prompt) =>{
            setResultData("")
            setLoading(true)
            setShowResult(true)
            setRecentPrompt(input)
           const response = await run(input)
           setResultData(response)
           setLoading(false)
           setInput("")
        }
        
    const ContextValue ={
        prevPrompt,
        setPrevPrompts,
        onSent,
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        showResult,
        resultData,
        loading,
        
    }

    return(
        <Context.Provider value={ContextValue}>  
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;