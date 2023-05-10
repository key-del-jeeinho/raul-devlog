import { Children, ReactNode, useContext } from "react";
import Button from "../atoms/Button";
import { createContext } from "react";
import ThemeButton from "../atoms/ThemeButton";

type ButtonListContextProp = {
    fadeIn: boolean,
    isLast: boolean,
    fixed: boolean,
}
const ButtonContext = createContext<ButtonListContextProp | null>(null)

interface Props {
    children: ReactNode,
    fixed: boolean,
    fadeIn: boolean,
}

export default function ButtonList({ children, fixed, fadeIn }: Props) {
    const elements = Children.toArray(children)
    const buttons = Children.toArray(
        elements.map((element, index) =>
            getButton(element, fadeIn, index, elements.length, fixed)
    ))
    return (<div>{buttons}</div>)
}

function getButton(
    element: ReactNode,
    fadeIn: boolean,
    index: number,
    length: number,
    fixed: boolean,
): ReactNode {
    const isLast = length == index + 1
    const providerValue: ButtonListContextProp = { fadeIn, fixed, isLast }
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
    
    const { fadeIn, isLast, fixed } = context
    return (<div>
        <Button 
            marginOverflowedShadow={isLast}
            fixed={fixed}
            fadeIn={fadeIn}
            onClick={onClick}
        >{children}</Button>
    </div>)
}

interface ThemeButtonProps {
}

ButtonList.ThemeButton = function ButtonListThemeButton ({ 
}: ThemeButtonProps) {
    const context = useContext(ButtonContext)
    if(context == null) return null
    
    const { fadeIn, isLast, fixed } = context
    return (<div>
        <ThemeButton 
            marginOverflowedShadow={isLast}
            fadeIn={fadeIn}
        />
    </div>)
}