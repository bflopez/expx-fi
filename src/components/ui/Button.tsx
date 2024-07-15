import {MouseEventHandler, ReactNode} from "react";
interface ButtonProps {
    variant?: "primary" | "secondary" | "tertiary"
    onClick?: MouseEventHandler<HTMLElement>,
    children?: ReactNode
    type?: "button" | "submit" | "reset"
}
const Button = (props: ButtonProps) =>{
    const { children, onClick, type, variant = "tertiary" } = props;
    const variantClasses = {
        tertiary: "hover:bg-gray-100 border border-white",
        secondary: "bg-white hover:bg-gray-100 border",
        primary: "bg-blue-500 hover:bg-blue-700 text-white"
    }
    return (
        <button className={`${variantClasses[variant]} font-medium py-2 px-4 text-sm rounded`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Button;