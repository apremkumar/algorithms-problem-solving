let input = [20, 12, 10, 15, 2], input2 = [-2, 45, 0, 11, -9]

function arrayEquals(a, b) {
    return a.length === b.length && a.every((e, i) => e === b[i]);
}

function swap(list, firstIndex, secondIndex) {
    list[firstIndex] += list[secondIndex];
    list[secondIndex] = list[firstIndex] - list[secondIndex];
    list[firstIndex] -= list[secondIndex];
    return list;
}

function selectionSort(list) {
    for (let i = 0, smallest = 0; i < list.length; i++, smallest = i) {
        for (let j = i; j < list.length; j++) {
            if (list[j] < list[smallest]) smallest = j
        }
        if (smallest !== i) swap(list, i, smallest)
    }
}

selectionSort(input) && console.assert(arrayEquals(input, [2, 10, 12, 15, 20]))
selectionSort(input2) && console.assert(arrayEquals(input2, [-9, -2, 0, 11, 45]))