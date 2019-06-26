export class Player extends Phaser.Physics.Arcade.Sprite {

    private cursors: Phaser.Input.Keyboard.CursorKeys
    private maxJumps: number = 2
    private jumps: number = 0
    private grounded: boolean

    constructor(scene) {
        super(scene, 100, 450, "unicorn")

        this.cursors = this.scene.input.keyboard.createCursorKeys()

        
        this.scene.add.existing(this)
        this.scene.physics.add.existing(this)

        this.setCollideWorldBounds(true)
        this.setBounce(0)
        this.setDragX(600)
        this.setDragY(50) 
    }

    public update(): void {

        this.grounded = this.body.touching.down

        this.keyController()

    }

    public keyController() {
        if (this.cursors.left.isDown) {
            this.setVelocityX(-200)
            this.flipX = true
        } if (this.cursors.right.isDown) {
            this.setVelocityX(200)
            this.flipX = false
        }
        if (this.cursors.up.isDown && this.grounded) {
            this.setVelocityY(-600)
        }
    }

    private jump() {
        if (this.grounded){
            this.setVelocityY(-600)
        }
    }
}