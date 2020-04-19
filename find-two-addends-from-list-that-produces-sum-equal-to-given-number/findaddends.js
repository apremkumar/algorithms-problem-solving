let k = 17, input = [10, 15, 3, 7];

function findAddends(list) {
    return list.some((el, i, arr) => arr.indexOf(k-el) > -1);
}

console.log(findAddends(input));