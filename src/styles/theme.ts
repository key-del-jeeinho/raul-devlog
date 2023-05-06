import { DefaultTheme } from "styled-components";
import paper002 from '../../public/images/img_paper-002.png'

const primary = "#1B5E20"
const primary_light = "#206D1F"
const black = "#000000"
const neutral2 = "#424242"
const neutral3 = "#9E9E9E"
const neutral4 = "#E0E0E0"
const white = "#FFFFFF"

export const lightTheme: DefaultTheme = {
    colors: {
        text_fill__title: black,

        text_fill__sub_title: black,

        text_fill__primary_button: white,
        box_fill__primary_button: primary,
        box_shadow__primary_button: black,

        text_fill__button: black,
        box_outline__button: primary,
        box_fill__button: white,
        box_shadow__button: primary_light,

        text_fill__label_texture: black,
        box_outline__label_texture: black,

        text_fill__label_colored: primary,
        box_fill__label_colored: white,
        box_outline__label_colored: black,

        text_outline__label_frame: black,
        box_outline__label_frame: black,
        box_fill__label_frame: white,
        text_fill__label_frame: white,

        box_outline__label_monotone: black,
        text_fill__label_monotone: white,
        box_fill__label_monotone: black,
    },
    font_weights: {
        label: "bold",
        title: "bold",
        sub_title: "regular",
        primary_button: "bold",
        button: "bold",
    },
    font_sizes: {
        label: "24pt",
        bigger_label: "28pt",
        title: "96pt",
        sub_title: "24pt",
        primary_button: "24pt",
        button: "16pt",
    },
    font_families: {
        title: "PyeongChang",
        sub_title: "Pretendard",
        primary_button: "Pretendard",
        button: "Pretendard",
    },
    textures: {
        box_texture__label_texture: paper002.src,
    },
}
export const defaultTheme: DefaultTheme = lightTheme