console.log("65 69 65 6B 74 72 30 40 70 72 6F 74 6F 6E 6D 61 69 6C 2E 63 6F 6D")

const items = document.querySelectorAll('.rotator-item');
  let index = 0;

  setInterval(() => {
    const current = items[index];
    current.classList.remove('active');
    current.classList.add('exit');

    index = (index + 1) % items.length;

    const next = items[index];
    next.classList.remove('exit');
    next.classList.add('active');
  }, 3200); // Apple keynote ritmi