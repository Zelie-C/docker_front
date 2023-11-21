import { useEffect, useState } from "react"
import { serverAdress } from "./UserForm"

const Time = () => {

    const [time, setTime] = useState<number>(0)

    useEffect(
        () => {
            const getTime = async () => {
                try {
                    const response = await fetch(`${serverAdress}/server/time`);
                    const data = await response.json();
                    setTime(data);
                } catch(error) {
                    console.error('Erreur', error); 
                }
            }
            getTime()
        }, [])

    return (
        <>
            <div>
                {time}
            </div>
        </>
    )
}

export default Time