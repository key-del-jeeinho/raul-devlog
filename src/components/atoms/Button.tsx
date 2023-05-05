import styled from "styled-components"

interface ButtonStyleProps {
    visibleOverflowedShadow: boolean
}

const ButtonStyle = styled.span<ButtonStyleProps>`
    position: relative;
    display: inline-block;
    margin: ${(props) => props.visibleOverflowedShadow 
        ? "0px 4px 4px 0px" 
        : "0px 0px 0px 0px"
    };
    button {
        appearance: none;
        border-style: none;
        padding: 10px 10px 10px 10px;

        border-radius: 50vh;
        border-color: ${(props) => props.theme.colors.box_outline__button};
        border-width: 1px;
        border-style: solid;

        background-color: ${(props) => props.theme.colors.box_fill__button};
        color: ${(props) => props.theme.colors.text_fill__button};
        box-shadow: 4px 4px ${(props) => props.theme.colors.box_shadow__button};

        font-size: ${(props) => props.theme.font_sizes.button};
        font-weight: ${(props) => props.theme.font_weights.button};
        font-family: ${(props) => props.theme.font_families.button};

        :hover {
            box-shadow: 3px 3px ${(props) => props.theme.colors.box_shadow__button};
            transform: translate(1px, 1px);
            transition: all 50ms;
        }

        :active {
            box-shadow: 2px 2px ${(props) => props.theme.colors.box_shadow__button};
            transform: translate(2px, 2px);
            transition: all 50ms;
        }
    }
`

interface Props {
    children: string,
    visibleOverflowedShadow?: boolean
    onClick: () => void
}

export default function Button({children, visibleOverflowedShadow, onClick}: Props) {
    return (<ButtonStyle visibleOverflowedShadow={visibleOverflowedShadow??false}>
        <button onClick={onClick}>{children}</button>
    </ButtonStyle>)
}