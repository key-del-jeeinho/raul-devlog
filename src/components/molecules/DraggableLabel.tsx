import LabelType from "@/interfaces/LabelType";
import DraggableComponent from "./DraggableComponent";
import Label from "../atoms/Label";

interface Props {
    children: string,
    type: LabelType,
    isFixed: boolean
}

export default function DraggableLabel({type, children, isFixed}: Props) {
    return (
        <DraggableComponent isFixed={isFixed}>
            <Label type={type}>{children}</Label>
        </DraggableComponent>
    )
}