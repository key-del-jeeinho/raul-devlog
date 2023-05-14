import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function useIsMobile(): boolean {
    const [isMobile, setIsMobile] = useState(false)
    const mobile = useMediaQuery({ query: "(max-width: 599px" })
    useEffect(() => {
        setIsMobile(mobile)
    }, [mobile])
    return isMobile
}