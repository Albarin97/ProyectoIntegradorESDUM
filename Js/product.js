const defaultFile = 'https://m.media-amazon.com/images/I/611arNpQf9L._AC_SL1500_.jpg';

const imgMain = document.getElementById('img-product')

for (let i = 1; i <= 4; i++) {
    const file = document.getElementById(`img-thumbnail-${i}`);
    file.addEventListener('mouseenter', (e) => {
      imgMain.src = e.target.src;
    });
  }