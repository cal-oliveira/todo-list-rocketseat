import { ChangeEvent, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    handleTask: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Input({ handleTask, ...rest }:InputProps ){

    return(
        <input 
            {...rest}
            onChange={handleTask}
            className="w-full px-4 py-4 bg-gray-500 placeholder-gray-300 rounded-lg border border-solid border-gray-700 text-white outline-none" 
            placeholder="Adicione uma nova tarefa"
        />
    )
}