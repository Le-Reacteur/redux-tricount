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

export const Validator = (() => {
  function validate(validator, value) {
    return validator(value, '');
  }

  const notEqualWrapper = (validator, value, msg) => (val, name) => {
    const sub = validator(val, name);
    if (sub.error) {
      return sub;
    }
    if (sub.value === value) {
      return { error: msg || `Value should not be equal to ${value}` };
    }
    return sub;
  };

  const notEmptyStr = msg => (val, name) => {
    if (!typeof val === 'string' || val.length === 0) {
      return { error: msg || `${name} must be a non emty string (got ${val})` };
    }
    return { value: val };
  };

  const numberFromString = msg => (val, name) => {
    const valStr = (val || '').replace(/,/g, '.');
    const num = parseFloat(valStr, 10);
    if (Number.isNaN(num)) {
      return { error: msg || `${name} must be a number (got ${val})` };
    }
    return { value: num };
  };

  const schema = validationMap => (val, name) => {
    if (!val) {
      return { error: `Schema expect a value but got nil` };
    }
    const result = Object.keys(validationMap).reduce((acc, key) => {
      const value = val[key];
      if (value === undefined) {
        acc[key] = { error: `Missing key ${key}` };
        return acc;
      }
      const validator = validationMap[key];
      acc[key] = validator(value, `${name}.${key}`);
      return acc;
    }, {});
    const errors = Object.keys(result).reduce((acc, key) => {
      if (result[key].error) {
        acc.push(`Error in ${key} : ${result[key].error}`);
      }
      return acc;
    }, []);
    if (errors.length > 0) {
      return { error: errors.join('\n') };
    }
    const output = Object.keys(result).reduce((acc, key) => {
      acc[key] = result[key].value;
      return acc;
    }, {});
    return { value: output };
  };

  return {
    schema,
    validate,
    notEmptyStr,
    notEqualWrapper,
    numberFromString,
  };
})();
