import { DefaultTheme } from "styled-components";
import texture001 from '../../public/images/img_texture-001.png'
import texture002 from '../../public/images/img_texture-002.png'
import flower001 from '../../public/images/img_flower-001.png'
import paper002 from '../../public/images/img_paper-002.png'
import { black, neutral3, neutral4, neutral5, primary, primary_light, white } from "./colors";

export const lightTheme: DefaultTheme = {
    colors: {
        icon_fill__DEFAULT: black,

        text_fill__primary_title: black,
        text_fill__primary_sub_title: black,
        
        text_fill__secondary_title: black,
        text_fill__secondary_sub_title: black,

        icon_fill__nav_bar: black,
        text_fill__nav_bar: black,
        box_fill__nav_bar: "rgba(255, 255, 255, 0.1)",
        box_outline__nav_bar: "rgba(0, 0, 0, 0.1)",

        box_outline__side_bar: "rgba(255, 255, 255, 0.1)",

        text_fill__article_summary_box_description: neutral3,

        text_fill__article_summary_box: black,
        box_outline__article_summary_box: neutral4,
        box_fill__article_summary_box: white,
        box_shadow__article_summary_box: "rgba(217, 217, 217, 0.25)",

        text_fill__primary_button: white,
        box_outline__primary_button: primary,
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

        box_fill__label_frame: white,
        text_fill__label_frame: white,
        box_outline__label_frame: black,
        text_outline__label_frame: black,

        box_outline__label_monotone: black,
        text_fill__label_monotone: white,
        box_fill__label_monotone: black,

        text_fill__background_circular_text: neutral4,
    },
    font_weights: {
        label: "bold",
        primary_title: "bold",
        primary_sub_title: "regular",
        secondary_title: "bold",
        secondary_sub_title: "regular",
        primary_button: "bold",
        button: "bold",
    },
    font_sizes: {
        primary_title: "9.6rem",
        primary_sub_title: "2.4rem",
        secondary_title: "4.8rem",
        secondary_sub_title: "1.6rem",
        nav_bar: "2.4rem",
        label: "2.4rem",
        bigger_label: "2.8rem",
        primary_button: "2.4rem",
        button: "1.6rem",
    },
    font_families: {
        primary_title: "PyeongChang",
        primary_sub_title: "Pretendard",
        secondary_title: "Pretendard",
        secondary_sub_title: "Pretendard",
        primary_button: "Pretendard",
        button: "Pretendard",
        background_circular_text: "Pretendard",
    },
    box_sizes: {
        fixed_button__width: "10rem",
        fixed_button__height: "4rem",
        fixed_primary__button_width: "15rem",
        fixed_primary__button_height: "6rem",
    },
    images: {
        box_texture__page: texture001.src,
        box_texture__side_bar: texture002.src,
        box_texture__label: paper002.src,
        box_content__dark_mode_button: flower001.src
    },
}