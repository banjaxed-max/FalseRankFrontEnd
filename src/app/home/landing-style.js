document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container-0');
  const movingDivs = document.getElementsByClassName('container');
  const speed = 2; // change this to adjust the speed of the animation
  let position = container.clientWidth; // start the animation offscreen to the right

  // create clones of the divs and append them to the end of the container
  for (let i = 0; i < movingDivs.length; i++) {
    const clone = movingDivs[i].cloneNode(true);
    container.appendChild(clone);
  }

  function animate() {
    position -= speed;
    container.style.transform = `translateX(${position}px)`;

    // check if the first div has completely scrolled out of view
    if (position < -movingDivs[0].clientWidth) {
      // remove the first div from the container and add it to the end
      const firstDiv = movingDivs[0];
      container.removeChild(firstDiv);
      container.appendChild(firstDiv);

      // adjust the position of the container so that it doesn't jump
      position += firstDiv.clientWidth + 20;
    }

    requestAnimationFrame(animate);
  }

  animate();

  console.log('success!')
});
