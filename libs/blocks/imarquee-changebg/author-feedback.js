document.getElementsByTagName('head')[0].insertAdjacentHTML(
  'beforeend',
  '<link rel="stylesheet" href="/libs/blocks/imarquee-changebg/author-feedback.css" />'
);

const LCP_SECTION_TITLES = ['background', 'foreground', 'text'];

const LCP_OFFSETS = [1, 3, 5]; // ['background', 'foreground', 'text'];

const GROUP_REGEX = /group\s+(\d)\s*:\s*(.*)/i;
const GRP_OFFSET = [6, 7, 12, 16];

const IMAGE_DIMENSIONS = [
  [599, 591], // mobile
  [1199, 747], // tablet
  [1920, 860], // desktop
];

const IMAGE_DIMENSIONS_DESKTOPONLY = [null, null, IMAGE_DIMENSIONS[2]];

const THUMBNAILS_DIMENSIONS = [
  [70, 70], // image 1 thumbnail
  [70, 70], // image 2 thumbnail
  [70, 70], // image 3 thumbnail
]

const notificationsContainer = document.createElement('div');
notificationsContainer.className = 'notifications';

function notify(message, className) {
  const messageContainer = document.createElement('div');
  messageContainer.innerHTML = message;
  messageContainer.className = className;

  notificationsContainer.append(messageContainer);

  console.log('appending notification', message)
}

function checkHexColor(row) {
  const cells = [...row.children];

  if (cells.length !== 1) {
    errors.push("color groups should only have one value");
    return;
  }

  const color = cells[0].innerText.trim();
  if (color.match(/^#[a-f0-9]{6}$/)) {
    errors.push("color formats should be #rrggbb", color)
  }
}

function checkImages3(row, dimensions, rowIdx) {
  if (row.children.length !== 3) {
    errors.push('expecting three images')
  }

  const cells = [...row.children];
  cells.forEach((cell, colIdx) => {

    const picture = cell.children[0];

    if (!dimensions[colIdx] && picture) {
      errors.push(`row ${rowIdx}, col ${colIdx} should be empty`)
      return;
    }

    if (dimensions[colIdx] && !(picture instanceof HTMLPictureElement)) {
      errors.push(`expected an image in row ${rowIdx}, col ${colIdx}`);
      return;
    }

    if (picture) {
      const img = picture.children[3];

      if (img.width !== dimensions[colIdx][0] || img.height !== dimensions[colIdx][1]) {
        errors.push(`wrong image size in row ${rowIdx}, col ${colIdx}: ${[img.width, img.height]}, expecting ${dimensions[colIdx]}`);
      }
    }
  })
}

const errors = [];


function analyze(el) {

  const rows = el.querySelectorAll(':scope > div');

  // check LCP images
  LCP_SECTION_TITLES.forEach((lcp, lcpIdx) => {
    // section
    const contentRowIdx = LCP_OFFSETS[lcpIdx];
    const sectionTitleRow = rows[contentRowIdx - 1];
    const contentRow = rows[contentRowIdx]
    // try {
      const sectionText = sectionTitleRow.children[0].innerText.toLowerCase().trim();
      if (lcp !== sectionText) {
        notify(`expecting '${lcp}' in row ${contentRowIdx}, got '${sectionText}'`, 'error');
      }
    // } catch {
    //   notify(`expecting '${lcp}' in row ${contentRowIdx}, couldn't read contents`, 'error');
    // }

    const dimensions = [...IMAGE_DIMENSIONS];
    if (sectionText === 'text') {
      dimensions[0] = [548, 334];
    }
    checkImages3(contentRow, dimensions, contentRowIdx);
  })

  // check groups
  for (let grpIdx = 0; grpIdx < 4; grpIdx++) {
    // try {
      const groupRowIdx = GRP_OFFSET[grpIdx];
      const groupRow = rows[groupRowIdx];
      const groupText = groupRow.children[0].innerText.toLowerCase().trim();
      const match = groupText.match(GROUP_REGEX)
      if (!match) {
        errors.push(`non conforming group title: ${groupText}`);
        return;
      }

      if (grpIdx === 0) {
        // remove background
        // ensure the next one is group 2
      } else if (grpIdx === 2) {
        // change color
        checkHexColor(rows[groupRowIdx + 1])
        checkHexColor(rows[groupRowIdx + 2])
        checkHexColor(rows[groupRowIdx + 3])
        // ensure the next one is group 3
      } else {
        // change photo/pattern
        const thumbnailsRow = rows[groupRowIdx + 1];
        const images1Row = rows[groupRowIdx + 2];
        const images2Row = rows[groupRowIdx + 3];
        const images3Row = rows[groupRowIdx + 4];
        checkImages3(thumbnailsRow, THUMBNAILS_DIMENSIONS, groupRowIdx + 1);
        checkImages3(images1Row, IMAGE_DIMENSIONS, groupRowIdx + 2);
        checkImages3(images2Row, IMAGE_DIMENSIONS_DESKTOPONLY, groupRowIdx + 3);
        checkImages3(images3Row, IMAGE_DIMENSIONS_DESKTOPONLY, groupRowIdx + 4);
      }

    // } catch {
    //   notify(`expecting a group text in ${groupRowIdx}`);
    // }
  };
}

export default function debug(el) {
  analyze(el);

  const debugContainer = document.createElement('div');
  debugContainer.className = 'debug';

  el.parentElement.append(debugContainer);
  debugContainer.append(el);

  debugContainer.append(notificationsContainer);

  errors.forEach(error => {
    notify(error, 'error');
  })


  if (notificationsContainer.children.length === 0) {
    notify("no errors", 'notice')
  }

}
