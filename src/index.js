/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let length = preferences.length;
    let count = 0;
    for (let i = 0; i < length; i++) {
        let one = preferences[i] - 1;
        if (one === i) continue;
        let two = preferences[one] - 1;
        if (one === two) continue;
        let three = preferences[two] - 1;
        if (three === two) continue;
        if (three === i) {
            count++;
        }
    }
    return count / 3;
};