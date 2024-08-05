export const drawDian = (selector: string, container: string) => {
  const canvas = document.querySelector(selector) as HTMLCanvasElement;

  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D ;

  const {clientWidth: width, clientHeight: height} = document.querySelector(container)as HTMLElement;

  canvas.setAttribute('width', width as unknown as string);
  canvas.setAttribute('height', height as unknown as string);
  canvas.style.background = '#00000000';

  const snows = Array.from({length: 80}, () => {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      speed: Math.random() * 3
    }
  });


  function render() {

    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    
    snows.forEach(item => {
      item.y = item.y > height ? 0 : (item.y + item.speed);

      item.x = item.x > width ? 0 : (item.x + Math.random() * 1);

      ctx.fillStyle = `rgb(255 255 255 / 80%)`

      ctx.strokeStyle = '#00000000'
      ctx.rect(item.x, item.y, 6, 6);
      
      ctx.stroke();
    });

    ctx.fill()

    requestAnimationFrame(render)
  };

  render();
}