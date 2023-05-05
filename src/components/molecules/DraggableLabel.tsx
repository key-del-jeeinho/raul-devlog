import LabelStyle from "@/interfaces/LabelStyle";
import DraggableComponent from "./DraggableComponent";
import Label from "../atoms/Label";

interface Props {
    children: string,
    type: LabelStyle,
    isFixed: boolean
}

export default function DraggableLabel({type, children, isFixed}: Props) {
    return (
        <DraggableComponent isFixed={isFixed}>
            <Label style={type}>{children}</Label>
        </DraggableComponent>
    )
}