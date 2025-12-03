
/**
 * Removes an element from an array based on a callback function condition.
 * @param {Array} array - The array to remove an element from
 * @param {Function} callBack - A callback function that returns a boolean to identify the element to remove
 * @returns {Array} The modified array with the element removed
 */
export function removeFromArray(array, callBack){
    const i = array.findIndex(callBack);
    if (i !== -1) array.splice(i, 1); 
    return array;
}