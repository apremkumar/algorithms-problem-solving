let input = [6, 5, 12, 10, 9, 1]

function arrayEquals(a, b) {
    return a.length === b.length && a.every((e, i) => e === b[i]);
}

function swap(list, firstIndex, secondIndex) {
    list[firstIndex] += list[secondIndex];
    list[secondIndex] = list[firstIndex] - list[secondIndex];
    list[firstIndex] -= list[secondIndex];
    return list;
}

function merge(firstHalf, secondHalf) {
    let resultList = [], i = 0; j = 0, k = 0

    while (i < secondHalf.length) {
        if (firstHalf[j] === secondHalf[i]) resultList.push(firstHalf[j]) && j++ && i++
        else if (firstHalf[j] > secondHalf[i]) resultList.push(secondHalf[i]) && i++
        else resultList.push(firstHalf[j]) && j++

        if (i === secondHalf.length) {
            resultList = resultList.concat(firstHalf.slice(j))
            break
        } else if (j === firstHalf.length) {
            resultList = resultList.concat(secondHalf.slice(i))
            break
        }
    }

    return resultList
}

function mergeSort(list) {
    if (list.length > 2) {
        return merge(mergeSort(list.slice(0, Math.floor(list.length / 2))), mergeSort(list.slice(Math.floor(list.length / 2))))
    } else if (list.length === 2) {
        list[0] > list[1] && swap(list, 0, 1)
        return list
    } else if (list.length === 1) {
        return list
    }
}

console.assert(arrayEquals(mergeSort(input), [1, 5, 6, 9, 10, 12]))