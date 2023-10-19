'use client';
import {useEffect, useState} from 'react';
import useUsersApi from "@/service/Users";

const page = () => {
    const [followers, setFollowers] = useState([]);

    const [step, setStep] = useState(1);
    const [pbtn, psetBtn] = useState(false);
    const [nbtn, nsetBtn] = useState(false);
    useEffect(() => {
        if(step <= 1){
            psetBtn(true);
        }
        useUsersApi.followers().then((res) => {
            if(res.status == 200){
                setFollowers(res.data)
                nsetBtn(false);
            }
          
        })
    }, [step])

    const next = () => {
        setStep(step+1);
        nsetBtn(true);
    }

    const prev = () => {
        setStep(step-1);
        psetBtn(true);
    }
    return (
        <div className="grow">
            <ul>
                    {
                        followers?.length ? followers?.map((user) => {
                            return <li key={user?.id}>
                                 <div className="text-white">
                                    <div className="py-6 border-b border-gray-300 flex justify-between items-center">
                                        <a href={user?.html_url} target="_blank" className="flex items-center gap-x-3 cursor-pointer">
                                            <img src={user?.avatar_url} className="w-[50px] h-[50px] rounded-full" alt="user avatar" />
                                            <p>
                                                {user?.login}
                                            </p>
                                        
                                        </a>

                                        <button className="border p-2 px-4 duration rounded-lg hover:bg-slate-300">Follow</button>
                                    </div>
                                </div>
                            </li>
                        }): <h1>Not Found!</h1>
                    }
            </ul>
        </div>
    );
}

export default page