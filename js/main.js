console.log("65 69 65 6B 74 72 30 40 70 72 6F 74 6F 6E 6D 61 69 6C 2E 63 6F 6D")

const items = document.querySelectorAll('.rotator-item');
  let index = 0;

  setInterval(() => {
    items[index].classList.remove('active');
    items[index].classList.add('exit');

    index = (index + 1) % items.length;

    items[index].classList.remove('exit');
    items[index].classList.add('active');
  }, 2600);