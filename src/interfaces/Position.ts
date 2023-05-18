export default interface Position {
    x: number,
    y: number
}

export class SimplePosition implements Position {
    x: number
    y: number
    
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}