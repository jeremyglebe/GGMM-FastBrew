class Monster {
    constructor(config) {
        this.level = config.level || 0;
        this.role = config.role.toLowerCase() || 'striker';
        this.rank = config.rank.toLowerCase() || 'standard';
        // AC calculation
        this.ac = MONSTER_LEVELS[this.level].ac + MONSTER_ROLES[this.role].ac + MONSTER_RANKS[this.rank].ac;
        // Hit Points calculation (solos are weird)
        if (this.rank != 'solo')
            this.hp = Math.ceil(MONSTER_LEVELS[this.level].hp * MONSTER_ROLES[this.role].hp * MONSTER_RANKS[this.rank].hp);
        else
            this.hp = Math.ceil(MONSTER_LEVELS[this.level].hp * MONSTER_ROLES[this.role].hp) + MONSTER_RANKS[this.rank].hp;
        // Attack bonus calculation
        this.ab = MONSTER_LEVELS[this.level].ab + MONSTER_ROLES[this.role].ab + MONSTER_RANKS[this.rank].ab;
        // Damage calculation
        this.dg = MONSTER_LEVELS[this.level].dg * MONSTER_ROLES[this.role].ab * MONSTER_RANKS[this.rank].dg;
        // Ability/Save DC calculation
        this.dc = MONSTER_LEVELS[this.level].dc;
        this.dc.h += MONSTER_RANKS[this.rank].dc;
        this.dc.l += MONSTER_RANKS[this.rank].dc;
        // Ability score modifiers
        this.am = JSON.stringify(MONSTER_LEVELS[this.level].am);
        // Speeed (assuming human base)
        this.sp = MONSTER_ROLES[this.role].sp;
        // Saving throws
        this.st = MONSTER_LEVELS[this.level].st;
        this.st.h += MONSTER_RANKS[this.rank].st;
        this.st.m += MONSTER_RANKS[this.rank].st;
        this.st.l += MONSTER_RANKS[this.rank].st;
    }
}

const MONSTER_RANKS = {
    minion: {
        ac: -2,
        ab: -2,
        hp: 0.2,
        dg: 0.75,
        st: -2,
        dc: -2,
        sk: -2
    },
    standard: {
        ac: 0,
        ab: 0,
        hp: 1.0,
        dg: 1.0,
        st: 0,
        dc: 0,
        sk: 0
    },
    elite: {
        ac: 2,
        ab: 2,
        hp: 2.0,
        dg: 1.1,
        st: 2,
        dc: 2,
        sk: 2
    },
    solo: {
        ac: 2,
        ab: 2,
        hp: ' x number of players',
        dg: 1.2,
        st: 2,
        dc: 2,
        sk: 4
    }
}

const MONSTER_ROLES = {
    controller: {
        // Armor class modification
        ac: -2,
        // Saving throw modification
        st: -1,
        // Hit point multiplier
        hp: 1.0,
        // Attack bonus modification
        ab: 0,
        // Damage multiplier
        dg: 1.0,
        // Speed assuming human race
        sp: 30,
        // Proficient in P, I, S?
    },
    defender: {
        ac: 2,
        st: 1,
        hp: 1.0,
        ab: 0,
        dg: 1.0,
        sp: 20,
    },
    lurker: {
        ac: -4,
        st: -2,
        hp: 0.5,
        ab: 2,
        dg: 1.5,
        sp: 30,
    },
    scout: {
        ac: -2,
        st: -1,
        hp: 1.0,
        ab: 0,
        dg: 0.75,
        sp: 40,
    },
    sniper: {
        ac: 0,
        st: 0,
        hp: 0.75,
        ab: 0,
        dg: 1.25,
        sp: 30,
    },
    striker: {
        ac: -4,
        st: -2,
        hp: 1.25,
        ab: 2,
        dg: 1.25,
        sp: 30,
    },
    supporter: {
        ac: -2,
        st: -1,
        hp: 0.75,
        ab: 0,
        dg: 0.75,
        sp: 30,
    }
}

const MONSTER_LEVELS = {
    2: {
        // Armor class
        ac: 14,
        // Hit points
        hp: 30,
        // Attack bonus
        ab: 3,
        // Damage
        dg: 4,
        // Spell/Ability save DCs
        dc: {
            // High
            h: 11,
            // Low
            l: 8
        },
        // Monster's trainable skills
        sk: {
            // Perception
            p: 1,
            // Initiative
            i: 1,
            // Stealth
            s: 1
        },
        // Proficiency bonus
        pb: 2,
        // Saving throws
        st: {
            // High
            h: 5,
            // Medium
            m: 3,
            // Low
            l: 0
        },
        // Ability modifiers (in order best to worst)
        am: [3, 2, 1, 1, 0, -1]
    }
}
