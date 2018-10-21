/*
 * @file: 
 * @version: 1.0.0
 * @author: yangguoqiang
 * @Date: 2018-10-21 12:10:08
 * @LastEditors: yangguoqiang
 * @LastEditTime: 2018-10-21 12:10:08
 * @Description: 
 */

function hashFunc(str,max){
    var hashCode = 0;
    [].forEach.call(str,function(item,index){
        hashCode = 37*hashCode + str.charCodeAt(index);
    });
    return hashCode % max;
}
console.log(hashFunc('abc',7));