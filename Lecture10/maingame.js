var canvas = document.getElementById("game");
var context = canvas.getContext('2d');

class player
{
    constructor(pos_x, pos_y, radius, color)
    {
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.radius = radius;
        this.color = color;
    }
    
    draw()
    {
        context.beginPath();
        context.arc(this.pos_x, this.pos_y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
    }
}

class bullet
{
    constructor(pos_x, pos_y, b_width, b_height, color)
    {
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.b_width = b_width;
        this.b_height = b_height;
        this.color = color;
    }

    draw()
    {
        context.beginPath();
        context.rect(this.pos_x, this.pos_y, this.b_width, this.b_height);
        context.fillStyle = this.color;
        context.fill();
    }
}

var char_player = new player(100, 100, 20, "skyblue");
char_player.draw(); 

canvas.addEventListener("click", function(click) {
    var rect = canvas.getBoundingClientRect();
    var b_x = click.clientX - rect.left;
    var b_y = click.clientY - rect.top;

    var char_bullet = new bullet(b_x, b_y, 10, 10, "red");
    char_bullet.draw();
})