/*
 * @file: 
 * @version: 1.0.0
 * @author: yangguoqiang;
 * @Date: 2018-10-21 12:04:32
 * @LastEditors: yangguoqiang
 * @LastEditTime: 2018-12-01 23:54:54
 * @Description: 
 */

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 放一个或多个数字在末尾
// 改变了原数组
arr.push(10);// [0,1,2,3,4,5,6,7,8,9,10]
arr.push(11, 12);// [0,1,2,3,4,5,6,7,8,9,10,11,12]

// 放一个或多个数字在首位
// 改变原数组
arr.unshift(-1);// [-1,0,1,2,3,4,5,6,7,8,9,10,11,12]
arr.unshift(-3, -2);// [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12]

// 删除末尾的数字
// 改变原数组
arr.pop();// [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11]

// 删除首位的数字
// 改变原数组
arr.shift();// [-2,-1,0,1,2,3,4,5,6,7,8,9,10,11]

// 删除或替换指定位置一个或几个元素
// 改变原数组
arr.splice(0, 2);// [0,1,2,3,4,5,6,7,8,9,10,11] 删除
arr.splice(2, 3, 6, -1);// [0, 1, 6, -1, 5, 6, 7, 8, 9, 10, 11] 修改
arr.splice(5, 0, 3, 2, 1);// [0, 1, 6, -1, 5, 3, 2, 1, 6, 7, 8, 9, 10, 11] 插入
arr.splice(5, 3, 'a', 'b', 'c');// [0, 1, 6, -1, 5, "a", "b", "c", 6, 7, 8, 9, 10, 11] 修改

/*********************************************************************************************/

// 合并数组
// 返回新数组,不改变元素组
var arr1 = [1, 2, 3];
var arr2 = [3, 2, 1];
var newArr1 = arr1.concat(arr2);// [1, 2, 3, 3, 2, 1]

// 筛选数组中的元素
// 返回新数组,不改变元素组
var newArr2 = newArr1.filter(function (item) {
    return item < 3
}); // [1, 2, 2, 1]

// 遍历数组中的元素
newArr1.forEach(function (item) {
    // console.log(item);
});// 依次对元素进行操作

// 判断数组中是否包含某元素
// 返回 布尔值 false or true
var flag = newArr1.some(function (item) {
    return item === 3;
});// true

// 判断数组中的元素是否都包含某元素
// 返回 布尔值 false or true
var flag1 = newArr1.every(function (item) {
    return item === 3
});// false

// 数字数组元素的累加
// 返回 数字
var sum = newArr1.reduce(function (pre, cur) {
    return pre + cur
});// 12