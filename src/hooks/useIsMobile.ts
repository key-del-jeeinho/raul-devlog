import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const MOBILE_MAX_WIDTH = "599px"

export function useIsMobile(): boolean {
    const [isMobile, setIsMobile] = useState(false)
    const mobile = useMediaQuery({ query: `(max-width: ${MOBILE_MAX_WIDTH}` })
    useEffect(() => {
        setIsMobile(mobile)
    }, [mobile])
    return isMobile
}