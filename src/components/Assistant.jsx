import { useEffect, useState } from "react";
import assistantMan from "../assets/assistantMan.svg";

export default function Assistant() {
    const [showAssistant, setShowAssistant] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowAssistant(true);
        }, 3000);
    }, []);

    return (
        <div>
            {showAssistant && <div className="fixed bottom-2 right-2 lg:bottom-4 lg:right-4 p-4 z-50">
                <button className="p-2 rounded-full absolute top-1 right-1" onClick={() => setShowAssistant(false)}>X</button>
                <div className="mr-10 p-2 px-4 bg-light-blue rounded-tl-[1.875rem] rounded-tr-[1.875rem] rounded-bl-[1.875rem] text-white">
                    <span className="text-[0.875rem] leading-[0.875rem]">Hi! I am Ben, your virtual assistant. <br /> How can I make your day better?</span>
                </div>
                <div className="flex flex-col items-end pt-3 w-full space-x-2 w-13 h-13 rounded-full">
                    <div className="bg-white p-1 rounded-full shadow-lg">
                        <img alt='assistant' loading="lazy" src={assistantMan} width={56} height={56} className="rounded-full" />
                    </div>
                </div>
            </div>}
        </div>
    )
}