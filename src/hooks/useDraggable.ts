import Position, { SimplePosition } from "../interfaces/Position";
import { MutableRefObject, RefObject, useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { DraggableData, DraggableEvent, DraggableEventHandler } from "react-draggable";

export default function useDraggable(initialPosition: Position, needFixed: boolean): [
    position: Position,
    needFixed: boolean,
    nodeRef: RefObject<HTMLDivElement>,
    onStart: DraggableEventHandler,
    onDrag: DraggableEventHandler,
    onStop: DraggableEventHandler
] {
    const [fixed, setFixed] = useState<boolean>(false)
    const [position, setPosition] = useState<Position>(initialPosition)
    
    const nodeRef = useRef<HTMLDivElement>(null)

    const onStart = useCallback((_e: DraggableEvent, _data: DraggableData) => {
        setFixed(false)
    }, [])
    const onDrag = useCallback((_e: DraggableEvent, data: DraggableData) => {
        const newPosition = new SimplePosition(data.x, data.y)
        setPosition(newPosition);
    }, [])
    const onStop = useCallback((_e: DraggableEvent, _data: DraggableData) => {
        if(needFixed) {
            setFixed(true)
            setPosition(initialPosition)
        }
    }, [initialPosition, needFixed])

    return [position, fixed, nodeRef, onStart, onDrag, onStop]
}