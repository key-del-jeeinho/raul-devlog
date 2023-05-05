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
        textures: {
            box_texture__label_texture: string,
        },
    }
}