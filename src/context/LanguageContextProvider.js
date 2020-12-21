import React, {createContext, useState } from "react";

export const LanguageContext = createContext({});

function LanguageContextProvider ({children}){
    const [language, setLanguage] = useState("nl");

    function toggleLanguage() {

        switch(language) {
            case "nl":
                setLanguage("es");
                break;
            case "es":
                setLanguage("nl");
                break;
            default:
                setLanguage("nl");
        }
    }

    const data = {
        language: language,
        toggleLanguage: toggleLanguage,
    };

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    );


}

export default LanguageContextProvider;