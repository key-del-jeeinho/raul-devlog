import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html,body {
    max-width: 100vw;
    min-width: 1200px;
    overflow-x: hidden;
}

body {
    color: #000000;
    background: #FFFFFF
}

ul, ol {
    list-style: none;
}
`