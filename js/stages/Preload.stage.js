import game from "../game";

export const Preload = {
    preload: function() {
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
        game.load.tilemap('level1', 'maps/level1.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tileset', 'maps/tilea2.png');
        game.load.image('treasure', 'maps/pixel_treasure_chest.png');
        game.load.image('coin', 'sprites/coin.png');
        game.load.image('bullet', 'sprites/bullet.png');
        game.load.image('heavyBullet', 'sprites/heavyBullet.png');
        game.load.image('background001', 'sprites/bg001.png');
        game.load.image('avatar', 'sprites/avatar.png');
        game.load.image('buff_havoc', 'sprites/buffs/buff.havoc.png');
        game.load.image('buff_enrage', 'sprites/buffs/buff.enrage.png');
        game.load.image('icon_basic', 'sprites/icons/icon-001.png');
        game.load.image('icon_heavy', 'sprites/icons/icon-002.png');
        game.load.spritesheet('hero', 'sprites/hero.png', 110, 160);
        game.load.spritesheet('blob-ani', 'sprites/mob-ani01.png', 32, 32);
        game.load.audio('mobHit', 'sounds/mob_hit.wav');
        game.load.audio('gunShot', 'sounds/gun_shot.mp3');
        game.load.audio('shotHeavy', 'sounds/shotHeavy.mp3');
        game.load.audio('trackRumble', 'sounds/Rumble.mp3');
    },
    create: function() {   
        game.songs = { trackRumble: game.add.audio('trackRumble') };
        game.songs.trackRumble.volume = 0.05;
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 1000;
        game.state.start("Level");
    },
    update: function() {}
}