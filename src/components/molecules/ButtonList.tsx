import { Children, ReactNode, useContext } from "react";
import Button from "../atoms/Button";
import { createContext } from "react";

type ButtonListContextProp = {
    fadeIn: boolean,
    isLast: boolean,
    width?: string,
}
const ButtonContext = createContext<ButtonListContextProp | null>(null)

interface Props {
    children: ReactNode,
    width?: string,
    fadeIn: boolean,
}

export default function ButtonList({ children, width, fadeIn }: Props) {
    const elements = Children.toArray(children)
    const buttons = Children.toArray(
        elements.map((element, index) =>
            getButton(element, fadeIn, index, elements.length, width)
    ))
    return (<div>{buttons}</div>)
}

function getButton(
    element: ReactNode,
    fadeIn: boolean,
    index: number,
    length: number,
    width?: string,
): ReactNode {
    const isLast = length == index + 1
    const providerValue: ButtonListContextProp = { fadeIn, width, isLast }
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
    
    const { fadeIn, isLast, width } = context
    return (<div>
        <Button 
            marginOverflowedShadow={isLast}
            width={width}
            fadeIn={fadeIn}
            onClick={onClick}
        >{children}</Button>
    </div>)
}