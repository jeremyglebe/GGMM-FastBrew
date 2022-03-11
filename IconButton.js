class IconButton extends Phaser.GameObjects.DOMElement {
    constructor(scene, x, y, radius, text, color, background) {
        super(scene, x, y, 'button', `
        width: ${2 * radius}px;
        height: ${2 * radius}px;
        border-radius: ${2 * radius}px;
        font-size: ${Math.floor(1.65 * radius)}px;
        color: ${color || 'black'};
        background-color: ${background || 'white'};
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        overflow: hidden;
        outline: none;
        text-align: center;
        vertical-align: middle;
        padding: 0px;
        `,
            text);
        scene.add.existing(this);
    }
}