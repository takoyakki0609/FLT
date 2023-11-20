import { Children, createContext, useState } from "react";

export const MemberContext = createContext(null)

function MemberContextProvider({Children}){
    const [activeMember, setActiveMember] = useState("카리나");
    return <MemberContext.Provider value={{activeMember, setActiveMember}}>
        {Children}
    </MemberContext.Provider>
}

export default MemberContextProvider