import LabelStyle from "@/interfaces/LabelStyle";
import DraggableComponent from "./DraggableComponent";
import Label from "../atoms/Label";
import BouncingLabel from "../atoms/BouncingLabel";
import LabelSize from "@/interfaces/LabelSize";

interface Props {
    children: string,
    style: LabelStyle,
    size: LabelSize,
    isFixed: boolean,
}

export default function DraggableBouncingLabel({style, size, children, isFixed}: Props) {
    return (
        <DraggableComponent isFixed={isFixed}>
            <BouncingLabel style={style} size={size}>{children}</BouncingLabel>
        </DraggableComponent>
    )
}