let input = [-2, 45, 0, 11, -9]

function arrayEquals(a, b) {
    return a.length === b.length && a.every((e, i) => e === b[i]);
}

function swap(list, firstIndex, secondIndex) {
    list[firstIndex] += list[secondIndex];
    list[secondIndex] = list[firstIndex] - list[secondIndex];
    list[firstIndex] -= list[secondIndex];
    return list;
}

function bubbleSort(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 1; j < list.length; j++) {
            if (list[j] < list[j - 1]) swap(list, j - 1, j)
        }
    }
}

bubbleSort(input) && console.assert(arrayEquals(input, [-9, -2, 0, 11, 45]))