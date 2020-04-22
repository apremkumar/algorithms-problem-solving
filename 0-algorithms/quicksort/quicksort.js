let input = [8, 7, 6, 1, 0, 9, 2],
    input2 = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31],
    input3 = [3, 5, -3, -1, 1, 2, 4]

function arrayEquals(a, b) {
    return a.length === b.length && a.every((e, i) => e === b[i]);
}

function swap(list, firstIndex, secondIndex) {
    list[firstIndex] += list[secondIndex];
    list[secondIndex] = list[firstIndex] - list[secondIndex];
    list[firstIndex] -= list[secondIndex];
    return list;
}

function quickSort(list, startIndex = 0, endIndex = (list.length - 1)) {
    let pivotIndex = endIndex, pointerIndex = startIndex,
        swapCounter = startIndex

    for (let i = startIndex + 1; i < endIndex; i++) {
        if (list[pointerIndex] > list[i] && list[pointerIndex] > list[pivotIndex]
            && list[i] < list[pivotIndex]) {
            swap(list, pointerIndex, i)
            ++swapCounter
            pointerIndex = swapCounter
            i = swapCounter
        }

        if (list[i] < list[pointerIndex] && list[i] < list[pivotIndex]) pointerIndex = i
    }

    list[pointerIndex] > list[pivotIndex] && swap(list, pointerIndex, pivotIndex)
    startIndex < pointerIndex && quickSort(list, startIndex, pointerIndex - 1)
    pointerIndex < endIndex && quickSort(list, pointerIndex + 1, endIndex)
}

console.assert(arrayEquals(swap([1, 2, 3], 0, 2), [3, 2, 1]))
quickSort(input) && console.assert(arrayEquals(input, [1, 0, 2, 8, 7, 9, 6]))
quickSort(input2) && console.assert(arrayEquals(input2, [10, 14, 19, 26, 27, 31, 33, 35, 42, 44]))
quickSort(input3) && console.assert(arrayEquals(input3, [-3, -1, 1, 2, 3, 4, 5]))