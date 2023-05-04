import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            text_fill__label_colored: string,
            text_fill__label_texture: string,
            text_fill__label_monotone: string,
            text_fill__label_frame: string,

            text_outline__label_frame: string,

            box_outline__label_frame: string,
            box_outline__label_colored: string,
            box_outline__label_texture: string,
            box_outline__label_monotone: string,

            box_fill__label_colored: string,
            box_fill__label_frame: string,
            box_fill__label_monotone: string,
        },
        font_weights: {
            label: string,
            title: string,
        },
        font_sizes: {
            label: string
            title: string
        },
        font_families: {
            title: string
        },
        textures: {
            box_texture__label_texture: string
        },
    }
}