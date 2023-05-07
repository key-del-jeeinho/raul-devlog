import { Children, ReactNode, useContext } from "react";
import Button from "../atoms/Button";
import { createContext } from "react";

type ButtonListContextProp = {
    fadeIn: boolean,
    isLast: boolean,
}
const ButtonContext = createContext<ButtonListContextProp | null>(null)

interface Props {
    children: ReactNode,
    fadeIn: boolean,
}

export default function ButtonList({ children, fadeIn }: Props) {
    const elements = Children.toArray(children)
    const buttons = Children.toArray(
        elements.map((element, index) =>
            getButton(element, fadeIn, index, elements.length)
    ))
    return (<div>{buttons}</div>)
}

function getButton(
    element: ReactNode,
    fadeIn: boolean,
    index: number,
    length: number
): ReactNode {
    const isLast = length == index + 1
    console.log(length + ", " + index + ", " + isLast)
    const providerValue: ButtonListContextProp = { fadeIn, isLast }
    return (<ButtonContext.Provider value={providerValue}>
        {element}
    </ButtonContext.Provider>)
}

interface ButtonProps {
    children: ReactNode,
    onClick: () => void,
}

ButtonList.Button = function ButtonListButton ({ 
    children,
    onClick,
}: ButtonProps) {
    const context = useContext(ButtonContext)
    if(context == null) return null
    
    const { fadeIn, isLast } = context
    return (<div>
        <Button 
            marginOverflowedShadow={isLast}
            fadeIn={fadeIn}
            onClick={onClick}
        >{children}</Button>
    </div>)
}