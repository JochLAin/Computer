'use strict';

export const convert = (object) => {
    if (!object) return [];
    if (object instanceof Array) return object;

    let array = [];
    for (let key in object) array.push(object[key]);
    return array;
}