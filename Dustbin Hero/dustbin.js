class dustbin {

constructor(x, y, width, height) {
    var options ={
        isStatic: true
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbin.png");
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
}
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("black");
        stroke("grey");
        imageMode(CENTER);
        image(this.image, 200, 300, 100, 150);

    }
}