import { ChatTeardropDots } from "phosphor-react"
// import { useState } from "react" - To use with commented if function
import { Popover } from '@headlessui/react'
import { WidgetForm } from "./WidgetForm"

export function Widget() {
/*
If we didn't use headless UI's Popover, we'd need to use:
    const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    function toggleWidgetVisibility(){
        setIsWidgetOpen(!isWidgetOpen) 
        } */


// If there is an else, must use { isWidgetOpen ? <p> Hello World</p> : null }. We use && because there's just an "if-then"
    return (
        <Popover className = "absolute bottom-4 right-4 md:bottom-8  md:right-8 flex flex-col items-end">
             <Popover.Panel> 
                 <WidgetForm />
             </Popover.Panel>

        <Popover.Button className = "bg-brand-500 rounded-full px-3 h-12 text-white hover:bg-brand-200 transition-color flex items-center group">
            <ChatTeardropDots className="w-6 h-6" />
            <span className = "max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-linear"> 
                <span className = "pl-2"></span>
                Feedback 
            </span>
        </Popover.Button>
        </Popover>
    )
}