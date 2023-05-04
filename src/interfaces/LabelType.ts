type LabelType = 'colored'|'frame'|'texture'|'monotone'|'random'
export default LabelType

export function getRandomLabelType(): LabelType {
    const labelTypes: LabelType[] = ['colored', 'frame', 'texture', 'monotone'];
    const randomIndex: number = Math.floor(Math.random() * labelTypes.length);
    return labelTypes[randomIndex];
}