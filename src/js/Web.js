particles = []

function setup(){
  createCanvas(600,400)
}

function draw(){
  background(50)

  if(random(1) < 0.2){
    particles.push(new Particle(random(width),random(height)))
  }

  for(i = 0; i < particles.length; i++){
    for(j = i; j < particles.length; j++){
      particles[i].createLine(particles[j].x, particles[j].y)
    }

    particles[i].createLine(mouseX, mouseY)
    particles[i].show()
    particles[i].update()
    particles[i].clear(i)
  }

}
