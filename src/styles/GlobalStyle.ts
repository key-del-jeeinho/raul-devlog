import { MOBILE_MAX_WIDTH } from "@/hooks/useIsMobile";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
a { 
    text-decoration:none;
    color: inherit;
    :hover { 
        text-decoration:none
    }
}
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html {
        font-size: 10px;
}

@media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    html {
        font-size: 7px;
    }
}

html,body {
    height: 100vh;
    width: 100vw;
    min-width: 1200px;
    overflow-x: hidden;
}

body {
    color: #000000;
    background: #FFFFFF;
    font-family: 'Pretendard';
}

ul, ol {
    list-style: none;
}
`

export default GlobalStyle