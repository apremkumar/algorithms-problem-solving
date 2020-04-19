let input1 = [1, 2, 3, 4, 5], input2 = [3, 2, 1];

function arrayEquals(a, b) {
    return a.length === b.length && a.every((e, i) => e === b[i]);
}

function conditionalProductArray(data) {
    return data.reduce((a, e, i) =>
        a.map((it, idx) => it * (i !== idx? e: 1)
    ), [...data].fill(1))
}

console.assert(arrayEquals(conditionalProductArray([...input1]), [120, 60, 40, 30, 24]))
console.assert(arrayEquals(conditionalProductArray([...input2]), [2, 3, 6]))