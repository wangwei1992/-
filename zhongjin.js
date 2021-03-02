const map = {
    0: [],
    1: [],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}

const arr = [0, 2, 3]

function print(map, arr) {
    let result = []
    let tmpArr = arr.map(key => map[key])
    result = tmpArr.reduce((reduc, itemArr) => {
        if (!reduc.length) {
            reduc = itemArr
        }
        else if (!itemArr.length) {}
        else {
            let tmpRes = []
            reduc.forEach(ch => {
                itemArr.forEach(c => {
                    tmpRes.push(ch + c)
                })
            })
            reduc = tmpRes
        }
        return reduc
    }, [])
    return result
}
console.log(print(map, arr))