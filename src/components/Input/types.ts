import React from "react"
import { unmountComponentAtNode } from "react-dom"

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    // LeftIcon pode receber um componente, então pode ser tipado assim:
    leftIcon?: React.ReactNode;
    name: string;
    control: any;
    errorMessage?: string;
}