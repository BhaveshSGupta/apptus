human()
{
    var legs =2
    position_x = 0
    position_y = 0
    walk()
    {
        this.position_x = this.position_x+10
        this.position_y = this.position_y+10 
    } 
}
SuperHuman() extends human()
{
    var legs = 3
    walk()
    {
        this.position_x = this.position_x +20
        this.position_y = this.position_y +20
    }

}
// property=legs=2
// position x ,y , 0 0 
// methd walk 10 10

// super Human extends
// legs 3
// walk 20 20
