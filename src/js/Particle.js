class Particle{

  constructor(x, y){
    this.x  = x
    this.y  = y
    this.vx = random(-2, 2)
    this.vy = random(-1, 1)
  }

  update(){
    this.x += this.vx
    this.y += this.vy
  }

  show(){
    fill(100, 220, 210)
    noStroke()
    j
    ellipse(this.x, this.y, 10, 10)
  }

  createLine(otherX, otherY){
    if(dist(this.x, this.y, otherX, otherY) < 100){
      stroke(100)
      line(this.x, this.y, otherX, otherY)
    }
  }

  clear(i){
    if(this.x > width || this.x < 0 || this.y > height || this.y < 0){
      particles.splice(i,1)
    }
  }

}
