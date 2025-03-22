function create() {
  const width = this.sys.game.config.width;
  const height = this.sys.game.config.height;

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function addRandomCircles(numCircles) {
    for (let i = 0; i < numCircles; i++) {
      let x = Math.random() * width;
      let y = Math.random() * height;
      let radius = Math.random() * 100 + 20;
      let color = getRandomColor();
      this.add.circle(x, y, radius, color);
    }
  }

  addRandomCircles.call(this, 50); 
}

const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 1000,
  scene: {
    create
  }
}

const game = new Phaser.Game(config);
