class BuilderBasicScene extends Phaser.Scene {
    constructor() {
        super("BuilderBasic")
    }

    create() {
        this.role = "Striker";
        this.rank = "Standard";
        this.createLevelInput();
        this.createRoleButtons();
        this.createRankButtons();
        this.add.text(360, 1200, "GO!", {
            fontSize: '48px'
        }).setOrigin(0.5).setInteractive().on('pointerdown', () => {
            this.scene.start('Monster', new Monster({
                level: this.level,
                role: this.role,
                rank: this.rank
            }));
        });
    }

    update() {
        this.level = parseInt(this.levelInput.node.value);
    }

    createLevelInput() {
        this.levelText = this.add.text(360, 100, "Enter Monster Level", {
            fontSize: '48px'
        }).setOrigin(0.5);
        this.levelInput = this.add.dom(360, 220, 'input', {
            width: '100px',
            height: '100px',
            fontSize: '48px',
            textAlign: 'center'
        }).setOrigin(0.5);
        this.levelInput.node.type = "number";
        this.levelInput.node.value = "2";
    }

    createRoleButtons() {
        this.roleText = this.add.text(360, 400, "Role\n" + this.role, {
            fontSize: '48px',
            align: 'center'
        }).setOrigin(0.5);
        const addRoleButton = (i, role, icon) => {
            this[`${role}Button`] = new IconButton(this, 55 + i * 100, 500, 40, icon)
                .addListener('click')
                .on('click', () => {
                    this.role = role;
                    this.roleText.text = "Role\n" + role;
                });
        }
        addRoleButton(0, "Controller", "🎮");
        addRoleButton(1, "Defender", "🛡️");
        addRoleButton(2, "Lurker", "🐱‍👤");
        addRoleButton(3, "Scout", "🏇");
        addRoleButton(4, "Sniper", "🏹");
        addRoleButton(5, "Striker", "⚔️");
        addRoleButton(6, "Supporter", "🙏");
    }

    createRankButtons() {
        this.rankText = this.add.text(360, 650, "Rank\n" + this.rank, {
            fontSize: '48px',
            align: 'center'
        }).setOrigin(0.5);
        const addRankButton = (i, rank, icon) => {
            this[`${rank}Button`] = new IconButton(this, 95 + i * 175, 850, 70, icon)
                .addListener('click')
                .on('click', () => {
                    this.rank = rank;
                    this.rankText.text = "Rank\n" + rank;
                });
        }
        addRankButton(0, "Minion", "💩");
        addRankButton(1, "Standard", "👾");
        addRankButton(2, "Elite", "👑");
        addRankButton(3, "Solo", "☠️");
    }
}