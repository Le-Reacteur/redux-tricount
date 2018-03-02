export function extractDataFromSubmitEvent(event) {
  return new Array(100)
    .fill(null)
    .map((v, index) => {
      return event.target[index] || null;
    })
    .filter(v => v !== null && v.name !== '')
    .reduce((acc, elem) => {
      acc[elem.name] = elem.value;
      return acc;
    }, {});
}

export function clearFormFromSubmitEvent(event) {
  const elems = new Array(100)
    .fill(null)
    .map((v, index) => {
      return event.target[index] || null;
    })
    .filter(v => v !== null && v.name !== '');

  elems.forEach(elem => {
    if (elem.nodeName.toLowerCase() === 'input' && elem.type === 'text') {
      elem.value = '';
    }
  });

  if (elems[0]) {
    elems[0].focus();
  }
}

export const getRandomColor = () => {
  return `hsl(${Math.floor(Math.random() * 360)}, 70%, 47%)`;
};

/** Used to generate unique IDs. */
let idCounter = {};

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 * Credit: lodasg
 */
export function uniqueId(prefix = '$lodash$') {
  if (!idCounter[prefix]) {
    idCounter[prefix] = 0;
  }

  const id = ++idCounter[prefix];
  if (prefix === '$lodash$') {
    return `${id}`;
  }

  return `${prefix + id}`;
}
