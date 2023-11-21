import React, { useCallback, useState } from "react";

export const serverAdress = import.meta.env.VITE_SERVER;

const UserForm = () => {

    const [username, setUsername] = useState<string>("")
    const [serverResponse, setServerResponse] = useState<string>("")

    const handleChangeUsername =  useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }, [])

    const usernameRequest = useCallback(async(name: string) => {
        try {
            const response = await fetch(`${serverAdress}/hello/${name}`)
            const data = await response.text();
            setServerResponse(data);
            console.log(data);
        } catch(error) {
            console.error('Erreur', error);
            
        }
    }, [])

    return (
        <>
            <div style={{width: "35%", display: "flex", flexDirection: "column"}}>
                <label htmlFor="username">Nom d'utilisateur</label>
                <input type="text" name="username" onChange={handleChangeUsername} value={username}/>
                <button onClick={() => usernameRequest(username)}>Envoyer</button>
                <div>{serverResponse}</div>
            </div>
        </>
    )
}

export default UserForm;