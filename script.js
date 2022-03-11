/** @type {Phaser.Core.Config} */
const config = {
    type: Phaser.AUTO,
    width: 720,
    height: 1280,
    scale: {
        parent: 'game',
        mode: Phaser.Scale.FIT,
    },
    dom: {
        createContainer: true,
        parent: 'game'
    },
    scene: [
        BuilderBasicScene,
        MonsterScene
    ],
    fps: {
        min: 10,
        target: 10,
        forceSetTimeOut: true
    }
}
new Phaser.Game(config);
