import {useEffect, useState} from'react'
import { server_calls } from '../api/server';

export const useGetData = () => {
    const [titleData, setData] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    useEffect(()=>{
        handleDataFetch();
    }, [])

  return { titleData, getData:handleDataFetch}
}