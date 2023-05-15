import styled from "styled-components"

interface PrimaryButtonStyleProps {
    fadeIn: boolean,
}

const PrimaryButtonStyle = styled.span<PrimaryButtonStyleProps>`
    button {
        ${(props) => props.fadeIn ? "transition: font-size 1000ms, box-shadow 1000ms, padding 1000ms, transform 1000ms;" : ""}
        appearance: none;
        border-style: none;

        padding: 15px 20px 15px 20px;
        margin: 0px 8px 8px 0px;
        border-radius: 50vh;

        background-color: ${(props) => props.theme.colors.box_fill__primary_button};
        color: ${(props) => props.theme.colors.text_fill__primary_button};
        box-shadow: 8px 8px ${(props) => props.theme.colors.box_shadow__primary_button};

        font-size: ${(props) => props.theme.font_sizes.primary_button};
        font-weight: ${(props) => props.theme.font_weights.primary_button};
        font-family: ${(props) => props.theme.font_families.primary_button};

        :hover {
            box-shadow: 7px 7px ${(props) => props.theme.colors.box_shadow__primary_button};
            transform: translate(1px, 1px);
            transition: font-size 300ms, box-shadow 300ms, padding 300ms, transform 300ms;
        }

        :active {
            box-shadow: 4px 4px ${(props) => props.theme.colors.box_shadow__primary_button};
            transform: translate(4px, 4px);
            transition: font-size 300ms, box-shadow 300ms, padding 300ms, transform 300ms;
        }
    }
`

interface Props {
    children: React.ReactNode,
    fadeIn?: boolean,
    onClick: () => void
}

export default function PrimaryButton({children, fadeIn, onClick}: Props) {
    return (<PrimaryButtonStyle fadeIn={fadeIn??false}>
        <button onClick={onClick} aria-roledescription="button">{children}</button>
    </PrimaryButtonStyle>)
}