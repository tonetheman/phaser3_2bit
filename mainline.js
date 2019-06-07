let game = null;

class MainScene extends Phaser.Scene {
    constructor() {
        super("main");
    }
    preload() {
        // need to load a sprite sheet?
        // 96x16
        // get images from here
        // https://0x72.itch.io/2bitcharactergenerator

        // load as sprite sheet
        this.load.spritesheet("a", "aN0406200100_0012.png", {frameWidth : 16,
            frameHeight : 16 });
        
        // by hand as atlas
        // picked for front runner sprite
        // 0 and 3 are the images you want
        this.load.atlas("aa", "0106210504_0012.png", {
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
        });

        // one more aN0106020802_0012
        this.load.atlas("bb", "aN0106020802_0012.png", {
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
        });

    }
    create() {

        // shows all of the frames
        var config = {
            key: 'aAnimation',
            frames: this.anims.generateFrameNumbers('a', { start: 0, end: 4, first: 0 }),
            frameRate: 2,
            repeat: -1
        };
    
        this.anims.create(config);
        let tmp = this.add.sprite(100,100,"a").play("aAnimation");
        tmp.setScale(4);

        // shows just the atlas frames
        this.anims.create({ key: 'a2', frames: this.anims.generateFrameNames('aa'), repeat: -1,
            frameRate : 3 });
        let tmp2 = this.add.sprite(200,100,"a").play("a2");
        tmp2.setScale(4);

        this.anims.create({ key: 'b2', frames: this.anims.generateFrameNames('bb'), repeat: -1,
        frameRate : 3 });
        let tmp3 = this.add.sprite(100,200,"a").play("b2");
        tmp3.setScale(4);

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