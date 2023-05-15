import styled from "styled-components"

interface ButtonStyleProps {
    fadeIn: boolean,
    fixed: boolean,
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
        white-space: nowrap;
        ${({theme, fixed}) => fixed ? `width: ${theme.box_sizes.fixed_button__width}` : "width: 100%"};
        ${({theme, fixed}) => fixed ? `height: ${theme.box_sizes.fixed_button__height}` : ""};
        ${({fixed}) => fixed ? "" : "padding: 10px 10px 10px 10px"};
        
        ${(props) => props.fadeIn ? "transition: font-size 1000ms, box-shadow 1000ms, padding 1000ms, transform 1000ms;" : ""}
        appearance: none;
        border-style: none;

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
            transition: font-size 300ms, box-shadow 300ms, padding 300ms, transform 300ms;
        }

        :active {
            box-shadow: 2px 2px ${(props) => props.theme.colors.box_shadow__button};
            transform: translate(2px, 2px);
            transition: font-size 100ms, box-shadow 100ms, padding 100ms, transform 100ms;
        }
    }
`

interface Props {
    children: React.ReactNode,
    fixed: boolean,
    marginOverflowedShadow?: boolean,
    fadeIn?: boolean
    onClick: () => void
}

export default function Button({children, fixed, marginOverflowedShadow, fadeIn, onClick}: Props) {
    return (<Button3DStyle marginOverflowedShadow={marginOverflowedShadow??false}>
        <ButtonStyle fadeIn={fadeIn??false} fixed={fixed}>
            <button onClick={onClick} aria-roledescription="button">{children}</button>
        </ButtonStyle>
    </Button3DStyle>)
}