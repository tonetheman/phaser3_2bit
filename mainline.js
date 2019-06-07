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
        this.load.atlas("dd", "assets/aN0109110702_0012.png", this.runner_json_for_atlas());
        this.load.atlas("ee", "assets/aN0402040404_0012.png", this.runner_json_for_atlas());
        this.load.atlas("ff", "assets/aN0612120504_0012.png", this.runner_json_for_atlas());
        this.load.atlas("gg", "assets/aN0103080205_0012.png", this.runner_json_for_atlas());
        this.load.atlas("hh", "assets/aN0306030003_0012.png", this.runner_json_for_atlas());
        this.load.atlas("ii", "assets/aN0502090802_0012.png", this.runner_json_for_atlas());
        this.load.atlas("jj", "assets/aN0304200004_0012.png", this.runner_json_for_atlas());
        this.load.atlas("kk", "assets/aN0501040304_0012.png", this.runner_json_for_atlas());
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
        function bob(keyname, atlasname,x,y) {
            this.anims.create({ key: keyname, frames: this.anims.generateFrameNames(atlasname), repeat: -1,
            frameRate : 3 });
            let tmp2 = this.add.sprite(x,y,"a").play(keyname);
            tmp2.setScale(SCALE);
        }
        bob = bob.bind(this); // forcing it back into the right scope sigh

        bob("a2","aa",200,100);
        bob("b2","bb",100,200);
        bob("c2","cc",200,200);
        bob("d2","dd",150,150);
        bob("e2","ee",50,50);
        bob("f2","ff",150,50);
        bob("g2","gg",50,150);
        bob("h2","hh",25,100)
        bob("i2","ii",100,25)
        bob("j2","jj",125,200)
        bob("k2","kk",100,225)
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