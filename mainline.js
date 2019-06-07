let game = null;
let SCALE = 2;

class MainScene extends Phaser.Scene {
    constructor() {
        super("main");
    }
    runner_json_for_atlas() {
        return {
            frames : {
                walk1 : {
                    frame : {
                        x : 0, y : 0, w : 16, h: 16
                    }
                },
                walk2 : {
                    frame : {
                        x : 16*3, y : 0, w : 16, h: 16
                    }
                }
            }
        };
    }
    preload() {
        // need to load a sprite sheet?
        // 96x16
        // get images from here
        // https://0x72.itch.io/2bitcharactergenerator

        // load as sprite sheet
        this.load.spritesheet("a", "assets/aN0406200100_0012.png", {frameWidth : 16,
            frameHeight : 16 });
        
        // by hand as atlas
        // picked for front runner sprite
        // 0 and 3 are the images you want
        this.load.atlas("aa", "assets/0106210504_0012.png", this.runner_json_for_atlas());
        this.load.atlas("bb", "assets/aN0106020802_0012.png", this.runner_json_for_atlas());
        this.load.atlas("cc", "assets/aN0304160504_0012.png", this.runner_json_for_atlas());
    }
    create() {
        // this is a gross way to do this i think...
        this.cameras.main.setBackgroundColor("rgb(255,0,0)");
        // shows all of the frames
        var config = {
            key: 'aAnimation',
            frames: this.anims.generateFrameNumbers('a', { start: 0, end: 4, first: 0 }),
            frameRate: 2,
            repeat: -1
        };
    
        this.anims.create(config);
        let tmp = this.add.sprite(100,100,"a").play("aAnimation");
        tmp.setScale(SCALE);

        // shows just the atlas frames
        this.anims.create({ key: 'a2', frames: this.anims.generateFrameNames('aa'), repeat: -1,
            frameRate : 3 });
        let tmp2 = this.add.sprite(200,100,"a").play("a2");
        tmp2.setScale(SCALE);

        this.anims.create({ key: 'b2', frames: this.anims.generateFrameNames('bb'), repeat: -1,
        frameRate : 3 });
        let tmp3 = this.add.sprite(100,200,"a").play("b2");
        tmp3.setScale(SCALE);

        this.anims.create({ key: 'c2', frames: this.anims.generateFrameNames('cc'), repeat: -1,
        frameRate : 3 });
        let tmp4 = this.add.sprite(200,200,"a").play("c2");
        tmp4.setScale(SCALE);


    }
}

function mainline() {
    game = new Phaser.Game({
        width : 300,
        height : 300,
        type : Phaser.AUTO,
        pixelArt: true,
        scene : [MainScene]
    })
}

window.onload = mainline;