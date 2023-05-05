type LabelStyle = 'colored'|'frame'|'texture'|'monotone'|'random'
export default LabelStyle

export function getRandomLabelStyle(): LabelStyle {
    const labelTypes: LabelStyle[] = ['colored', 'frame', 'texture', 'monotone'];
    const randomIndex: number = Math.floor(Math.random() * labelTypes.length);
    return labelTypes[randomIndex];
}