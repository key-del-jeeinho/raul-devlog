import useDraggable from "@/hooks/useDraggable";
import { SimplePosition } from "@/interfaces/Position";
import React, { MutableRefObject } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

interface Props {
    children: JSX.Element,
    isFixed: boolean
}
interface NodeProps {
    needFixed: boolean
}

const DraggableNode = styled.div<NodeProps>`
	display: inline-block;
    
    position: absolute;
    background-color: blueviolet;
    transition: ${props => props.needFixed ? `transform 0.3s` : `transform 0.1s`};
`

export default function DraggableComponent({ children, isFixed }: Props) {
    const initialPosition = new SimplePosition(0, 0)
    const [position, needFixed, nodeRef, onStart, onDrag, onStop] = useDraggable(initialPosition, isFixed)
    return (
        <Draggable 
            position={position}
            nodeRef={nodeRef}
            onDrag={onDrag}
            onStart={onStart}
            onStop={onStop}
        >
            <DraggableNode ref={nodeRef} needFixed={needFixed}>
                {children}
            </DraggableNode>
        </Draggable>
    )//
}