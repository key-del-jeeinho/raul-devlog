import styled from "styled-components"

const PrimaryButtonStyle = styled.span`
    display: inline-block;
    button {
        appearance: none;
        border-style: none;

        padding: 15px 20px 15px 20px;
        margin: 0px 8px 8px 0px;
        border-radius: 50vh;

        background-color: ${(props) => props.theme.colors.box_fill__primary_button};
        color: ${(props) => props.theme.colors.text_fill__primary_button};
        box-shadow: 8px 8px black;

        font-size: 24pt;
        font-weight: bold;

        :hover {
            box-shadow: 7px 7px black;
            transform: translate(1px, 1px);
            transition: all 50ms;
        }

        :active {
            box-shadow: 4px 4px black;
            transform: translate(4px, 4px);
            transition: all 50ms;
        }
    }
`

interface Props {
    children: string,
    onClick: () => void
}

export default function PrimaryButton({children, onClick}: Props) {
    return (<PrimaryButtonStyle>
        <button onClick={onClick}>{children}</button>
    </PrimaryButtonStyle>)
}