import game from "../game";
import Projectile from "./Projectile.class";

export default class BasicBullet extends Projectile {

    constructor(sprite, data = {}) {
        super(sprite);
        this.game = game;
        this.baseCrit = 25;
        this.baseDamage = 7;
        this.baseSpeed = 1200;
        this.critical = false;
        this.criticalMultiplier = 3;
        this.spacing = 100;
        this.sound = this.game.add.audio('gunShot');
    };

    spawn(x, y) {
        this.classReset(x, y);
    };
}