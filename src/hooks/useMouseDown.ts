import { Dispatch, useCallback, useEffect, useRef, useState } from "react";

export default function useMouseDown(): [isMouseDown: boolean] {
    const [isMouseDown, setMouseDown] = useState(false)
    const handleMouseUp = useCallback(() => { setMouseDown(false) }, []);
    const handleMouseDown = useCallback(() => { setMouseDown(true) }, []);
    useEffect(() => {
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousedown', handleMouseDown);

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousedown', handleMouseDown);
        }
    }, [handleMouseDown, handleMouseUp]);
  
  
    return [isMouseDown]
  };