import LabelStyle from "@/interfaces/LabelStyle";
import DraggableComponent from "./DraggableComponent";
import Label from "../atoms/Label";
import BouncingLabel from "../atoms/BouncingLabel";

interface Props {
    children: string,
    type: LabelStyle,
    isFixed: boolean
}

export default function DraggableBouncingLabel({type, children, isFixed}: Props) {
    return (
        <DraggableComponent isFixed={isFixed}>
            <BouncingLabel style={type}>{children}</BouncingLabel>
        </DraggableComponent>
    )
}