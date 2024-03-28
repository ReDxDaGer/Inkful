"use client";

const { createContext, useState } = require("react");

export const ThemeContext = createContext();

const getFeomLocalStorage = () =>{

    if (typeof window !== undefined){
        const value = localStorage.getItem("theme")
        return value || "light"
    }
};

export const ThemeContextProvider = ({children})=>{
    const [theme , setTheme] = useState(()=>{
        return getFeomLocalStorage();
    });
    return(
        <>
            <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
        </>
    )
}