type ObjType = {
  [index: string]: string
  foo: string
  bar: string
}

const obj: ObjType = {
  foo: "hello",
  bar: "world",
}

const propertyName1 = "foo"
const propertyName2: string = "foo"

console.log(obj[propertyName1]) // ok
console.log(obj[propertyName2]) // ok

import svgPaths from 'iconDist/svgIcons.json'

const Icon = ({icon, iconColor, style, className}) => {
  const { width, height, path } = svgPaths[icon]

  return (
    <svg
      width={width}
      height={height}
      fillRule="evenodd"
      clipRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <path d={path} />
    </svg>
  )
}