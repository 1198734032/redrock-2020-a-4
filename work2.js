//写一个柯里化函数addSum，具有以下功能
//var x = addSum(1,2)
//x 3
//x(3) 6
//x(8) 14
function addSum(fn, ...arr1) {
    addSum.thisResult = fn;

    for (let i = 0; i < arr1.length; i++) {
        addSum.thisResult += arr1[i]
    }
    console.log(addSum.thisResult)
    return function (...arr2) {

        return addSum(addSum.thisResult, ...arr2)
    }
}
var x = addSum(1, 2)
x(3)
x(8)



