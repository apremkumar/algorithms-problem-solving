let input = [9, 3, 5, 1, 4, 3]

function arrayEquals(a, b) {
    return a.length === b.length && a.every((e, i) => e === b[i]);
}

function swap(list, firstIndex, secondIndex) {
    list[firstIndex] += list[secondIndex];
    list[secondIndex] = list[firstIndex] - list[secondIndex];
    list[firstIndex] -= list[secondIndex];
    return list;
}

function insertAt(list, index, element) {
    list.splice(index, 0, element)
}

function removeAt(list, index) {
    return list.splice(index, 1)[0]
}

function insertionSort(list) {
    for (let i = 0, j = 1; i < list.length; ++j && (j < list.length || (++i && (j = i)))) {
        if (list[j] < list[j - 1]) insertAt(list, (j - 1), removeAt(list, j))
    }
}

insertionSort(input) && console.assert(arrayEquals(input, [1, 3, 4, 5, 9]))