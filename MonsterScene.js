class MonsterScene extends Phaser.Scene {
    constructor() {
        super("Monster");
    }

    init(monster) {
        this.monster = monster;
    }

    create() {
        this.createBackButton();
        this.add.text(50, 100, this.toString(),
            {
                fontSize: '32px',
                wordWrap: {
                    width: 620,
                    useAdvancedWrap: true
                }
            });
    }

    createBackButton() {
        new IconButton(this, 50, 50, 36, "↶")
            .addListener('click')
            .on('click', () => {
                this.scene.start("BuilderBasic");
            });
    }

    toString() {
        const m = this.monster;
        return `
        Level: ${m.level}
        Role: ${m.role}
        Rank: ${m.rank}
        
        Armor Class: ${m.ac}
        Hit Points: ${m.hp}
        Attack Bonus: ${m.ab}
        
        Damage: ${m.dg}
        [${Math.floor(m.dg / 2.5)}D4 + ${Math.floor(m.dg % 2.5)}]
        [${Math.floor(m.dg / 3.5)}D6 + ${Math.floor(m.dg % 3.5)}]
        [${Math.floor(m.dg / 4.5)}D8 + ${Math.floor(m.dg % 4.5)}]
        [${Math.floor(m.dg / 5.5)}D10 + ${Math.floor(m.dg % 5.5)}]
        [${Math.floor(m.dg / 6.5)}D12 + ${Math.floor(m.dg % 6.5)}]
        
        Ability/Spell DC: ${m.dc.h} (High); ${m.dc.l} (Low)
        
        
        Ability Score Modifiers: ${m.am} (High to Low)
        
        
        Speed: ${m.sp} (Assuming human base)
        
        
        Saving Throws:  ${m.st.h} (High); ${m.st.m} (Medium); ${m.st.l} (Low)
        `
    }
}
