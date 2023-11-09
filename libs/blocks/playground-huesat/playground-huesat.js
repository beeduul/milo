const base = `${window.location.origin}/libs`;

export default function init(el) {

  const rows = el.querySelectorAll(':scope > div');
  rows.forEach(r => r.className = 'hide-block');

  import(`${base}/deps/playground/huesat/ft-milo-playground-huesat.js`);

  const picture = rows[0].children[0].children[0];

  const playground = document.createElement('ft-milo-playground-huesat');
  playground.imgSrcUrl = picture.children[3].src;

  playground.config = { editor: {
    descText:
      'Sometimes pictures don’t come out as vibrant as they appear in real life, but in Photoshop on the web, you can use adjustment layers to bring out colors within your photo.',
    hueLabel: 'Hue',
    saturationLabel: 'Saturation',
    downloadButtonText: 'Download',
    tryInPsButtonText: 'Continue in Photoshop',
    changeImageButtonText: 'Change image',
    errorDownloading:
      'Sorry, we were unable to export your image, please try another.',
  }};

  el.append(playground);


}
