import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html {
    font-size: 10px;
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