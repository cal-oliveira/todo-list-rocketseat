import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export function Button({...rest}:ButtonProps){
    return(
        <button 
            className="px-4 py-4 bg-blue_dark rounded-lg text-gray-100 font-bold text-sm flex items-center gap-2"
            {...rest}
        >
            Criar 
            
            <img src="./plus.png" alt="" />
        </button>
    )
}