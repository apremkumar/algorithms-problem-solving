let input = [1, 12, 9, 5, 6, 10], input2 = [10, 3, 76, 34, 23, 32]

function arrayEquals(a, b) {
    return a.length === b.length && a.every((e, i) => e === b[i]);
}

function swap(list, firstIndex, secondIndex) {
    if (firstIndex !== secondIndex) {
        list[firstIndex] += list[secondIndex];
        list[secondIndex] = list[firstIndex] - list[secondIndex];
        list[firstIndex] -= list[secondIndex];
    }
    return list;
}

function findLargestNumbersIndex(list, parentNodeIndex) {
    return ((2 * parentNodeIndex) + 2) < list.length
        && list[(2 * parentNodeIndex) + 2] > list[parentNodeIndex]
        && list[(2 * parentNodeIndex) + 2] > list[(2 * parentNodeIndex) + 1]
        ? (2 * parentNodeIndex) + 2
        : (list[(2 * parentNodeIndex) + 1] > list[parentNodeIndex]
            ? (2 * parentNodeIndex) + 1
            : parentNodeIndex)
}

function heapify(list, parentNodeIndex = parseInt(list.length / 2) - 1) {
    let largestNodeIndex = findLargestNumbersIndex(list, parentNodeIndex)
    if (largestNodeIndex !== parentNodeIndex && parentNodeIndex >= 0) {
        swap(list, parentNodeIndex, largestNodeIndex)
        heapify(list, largestNodeIndex)
    }
}

function heapWorthy(list) {
    for (let i = list.length / 2 - 1; i >= 0; i--) heapify(list, i)
}

function heapSort(list) {
    let sortedList = []
    heapWorthy(list)
    for (let i = list.length - 1; i >= 0; i--) {
        swap(list, 0, i)
        sortedList.unshift(list.pop())
        list.length > 0 && heapify(list, 0)
    }
    return sortedList
}

console.assert(findLargestNumbersIndex([1, 2, 3], 0) === 2)
heapWorthy(input) && console.assert(arrayEquals(input, [12, 6, 10, 5, 1, 9]))
console.assert(arrayEquals(heapSort(input), [1, 5, 6, 9, 10, 12]))
console.assert(arrayEquals(heapSort(input2), [3, 10, 23, 32, 34, 76]))