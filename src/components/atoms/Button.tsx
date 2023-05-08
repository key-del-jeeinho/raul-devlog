import styled from "styled-components"

interface ButtonStyleProps {
    width?: string,
    fadeIn: boolean,
}

interface Button3DStyleProps {
    marginOverflowedShadow: boolean,
}

const Button3DStyle = styled.div<Button3DStyleProps>`
    display: inline-block;
    padding: ${(props) => props.marginOverflowedShadow 
        ? "0px 4px 4px 0px" 
        : "0px 0px 0px 0px"
    };
`

const ButtonStyle = styled.span<ButtonStyleProps>`
    position: relative;
    button {
        ${(props) => props.width != undefined ? `width: ${props.width};` : ""}
        ${(props) => props.fadeIn ? "transition: all 1s;" : ""}
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
            transition: all 300ms;
        }

        :active {
            box-shadow: 2px 2px ${(props) => props.theme.colors.box_shadow__button};
            transform: translate(2px, 2px);
            transition: all 100ms;
        }
    }
`

interface Props {
    children: React.ReactNode,
    width?: string,
    marginOverflowedShadow?: boolean,
    fadeIn?: boolean
    onClick: () => void
}

export default function Button({children, width, marginOverflowedShadow, fadeIn, onClick}: Props) {
    return (<Button3DStyle marginOverflowedShadow={marginOverflowedShadow??false}>
        <ButtonStyle fadeIn={fadeIn??false} width={width}>
            <button onClick={onClick}>{children}</button>
        </ButtonStyle>
    </Button3DStyle>)
}