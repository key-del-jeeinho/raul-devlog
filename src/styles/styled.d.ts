import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            text_fill__title: string,
            text_fill__sub_title: string,
            text_fill__primary_button: string,
            text_fill__button: string,
            text_fill__label_colored: string,
            text_fill__label_texture: string,
            text_fill__label_monotone: string,
            text_fill__label_frame: string,

            text_outline__label_frame: string,

            box_outline__button: string,
            box_outline__label_frame: string,
            box_outline__label_colored: string,
            box_outline__label_texture: string,
            box_outline__label_monotone: string,

            box_fill__primary_button: string,
            box_fill__button: string,
            box_fill__label_colored: string,
            box_fill__label_frame: string,
            box_fill__label_monotone: string,

            box_shadow__primary_button: string,
            box_shadow__button: string,
        },
        font_weights: {
            label: string,
            title: string,
            sub_title: string,
            primary_button: string,
            button: string,
        },
        font_sizes: {
            label: string,
            bigger_label: string,
            title: string,
            sub_title: string,
            primary_button: string,
            button: string,
        },
        font_families: {
            title: string,
            sub_title: string,
            primary_button: string,
            button: string,
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