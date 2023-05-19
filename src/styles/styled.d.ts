import Color from '../interfaces/Color'
import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            icon_fill__DEFAULT: Color,
            icon_fill__nav_bar: Color,

            text_fill__primary_title: Color,
            text_fill__primary_sub_title: Color,
            text_fill__secondary_title: Color,
            text_fill__secondary_sub_title: Color,
            text_fill__nav_bar: Color,
            text_fill__article_summary_box: Color,
            text_fill__article_summary_box_description: Color,
            text_fill__primary_button: Color,
            text_fill__button: Color,
            text_fill__label_colored: Color,
            text_fill__label_texture: Color,
            text_fill__label_monotone: Color,
            text_fill__label_frame: Color,
            text_fill__background_circular_text: Color,

            text_outline__label_frame: Color,

            box_outline__nav_bar: Color,
            box_outline__side_bar: Color,
            box_outline__article_summary_box: Color,
            box_outline__primary_button: Color,
            box_outline__button: Color,
            box_outline__label_frame: Color,
            box_outline__label_colored: Color,
            box_outline__label_texture: Color,
            box_outline__label_monotone: Color,

            box_fill__nav_bar: Color,
            box_fill__article_summary_box: Color
            box_fill__primary_button: Color,
            box_fill__button: Color,
            box_fill__label_colored: Color,
            box_fill__label_frame: Color,
            box_fill__label_monotone: Color,

            box_shadow__primary_button: Color,
            box_shadow__button: Color,
        },
        font_weights: {
            label: string,
            primary_title: string,
            primary_sub_title: string,
            secondary_title: string,
            secondary_sub_title: string,
            primary_button: string,
            button: string,
        },
        font_sizes: {
            primary_title: string,
            primary_sub_title: string,
            secondary_title: string,
            secondary_sub_title: string,
            nav_bar: string,
            label: string,
            bigger_label: string,
            primary_button: string,
            button: string,
        },
        font_families: {
            primary_title: string,
            primary_sub_title: string,
            secondary_title: string,
            secondary_sub_title: string,
            primary_button: string,
            button: string,
            background_circular_text: string
        },
        box_sizes: {
            fixed_button__width: string,
            fixed_button__height: string,
            fixed_primary__button_width: string,
            fixed_primary__button_height: string,
        },
        images: {
            box_texture__page: string,
            box_texture__side_bar: string,
            box_texture__label: string,
            box_content__dark_mode_button: string,
        },
    }
}