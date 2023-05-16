import { DefaultTheme } from "styled-components"
import texture003 from '../../public/images/img_texture-003.png'
import texture004 from '../../public/images/img_texture-004.png'
import flower002 from '../../public/images/img_flower-002.png'
import paper002 from '../../public/images/img_paper-002.png'
import { black, neutral2, neutral4, primary, primary_light, white } from "./colors";

export const darkTheme: DefaultTheme = {
    colors: {
        icon_fill__DEFAULT: white,
        
        text_fill__title: white,

        text_fill__sub_title: white,

        icon_fill__nav_bar: white,
        text_fill__nav_bar: white,
        box_fill__nav_bar: "rgba(255, 255, 255, 0.1)",
        box_outline__nav_bar: "rgba(0, 0, 0, 0.1)",

        box_outline__side_bar: "rgba(0, 0, 0, 0.1)",

        text_fill__primary_button: white,
        box_outline__primary_button: primary,
        box_fill__primary_button: black,
        box_shadow__primary_button: primary,

        text_fill__button: white,
        box_outline__button: primary,
        box_fill__button: black,
        box_shadow__button: primary,

        text_fill__label_texture: black,
        box_outline__label_texture: black,

        text_fill__label_colored: primary,
        box_fill__label_colored: black,
        box_outline__label_colored: white,

        box_fill__label_frame: black,
        text_fill__label_frame: black,
        box_outline__label_frame: white,
        text_outline__label_frame: white,

        box_outline__label_monotone: white,
        text_fill__label_monotone: black,
        box_fill__label_monotone: white,

        text_fill__background_circular_text: neutral2,
    },
    font_weights: {
        label: "bold",
        title: "bold",
        sub_title: "regular",
        primary_button: "bold",
        button: "bold",
    },
    font_sizes: {
        title: "9.6rem",
        sub_title: "2.4rem",
        nav_bar: "2.4rem",
        label: "2.4rem",
        bigger_label: "2.8rem",
        primary_button: "2.4rem",
        button: "1.6rem",
    },
    font_families: {
        title: "PyeongChangPeace",
        sub_title: "Pretendard",
        primary_button: "Pretendard",
        button: "Pretendard",
        background_circular_text: "DOSPilgiMedium",
    },
    box_sizes: {
        fixed_button__width: "10rem",
        fixed_button__height: "4rem",
        fixed_primary__button_width: "15rem",
        fixed_primary__button_height: "6rem",
    },
    images: {
        box_texture__page: texture003.src,
        box_texture__side_bar: texture004.src,
        box_texture__label: paper002.src,
        box_content__dark_mode_button: flower002.src
    },
}