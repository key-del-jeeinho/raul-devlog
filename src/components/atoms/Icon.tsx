import Color from '../../interfaces/Color'
import svgPaths from '../../../public/icons/svgIcons.json'
import { CSSProperties } from 'styled-components'

type IconType = {
    [type: string]: {
        width: number,
        height: number,
        path: string
    }
}

interface Props {
    type: string,
    color: Color,
    style?: CSSProperties,
    className?: string
}

export default function Icon({type, color, style, className}: Props) {
    const icons = svgPaths as IconType
    const { width, height, path } = icons[type]
    return (
        <svg
            width={width}
            height={height}
            fill={color}
            fillRule='evenodd'
            clipRule='evenodd'
            xmlns='http://www.w3.org/2000/svg'
            style={style}
            className={className}
        ><path d={path} />
        </svg>
    )
}