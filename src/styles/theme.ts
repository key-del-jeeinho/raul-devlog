import { DefaultTheme } from "styled-components";
import paper002 from '../../public/images/img_paper-002.png'

const primary = "#1B5E20"
const black = "#000000"
const neutral2 = "#424242"
const neutral3 = "#9E9E9E"
const neutral4 = "#E0E0E0"
const white = "#FFFFFF"

export const lightTheme: DefaultTheme = {
    colors: {
        text_fill__label_texture: black,

        text_fill__label_colored: primary,
        box_fill__label_colored: white,

        text_outline__label_frame: black,
        box_outline__label_frame: black,
        box_fill__label_frame: white,
        text_fill__label_frame: white,

        text_fill__label_monotone: white,
        box_fill__label_monotone: black,
    },
    font_weights: {
        label: "bold",
    },
    font_sizes: {
        label: "24pt"
    },
    textures: {
        box_texture__label_texture: paper002.src
    },
}
export const defaultTheme: DefaultTheme = lightTheme