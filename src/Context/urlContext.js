import { createContext, useState } from "react";

export const urlContext = createContext(null);

export default function Context({children}){
    const [urls,setUrl] = useState('');

    return(
        <urlContext.Provider value={{urls,setUrl}}>
            {children}
        </urlContext.Provider>
    )


}