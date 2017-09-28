/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var result = [];
    var deci = 1;  //进位
    if(digits[0] == 0 || digits.length == 0){
        return [1];
    }
    else{
        var i = digits.length - 1;
        while(i >= 0){
            if(digits[i] + deci  == 10){
                result.push(0);
                deci = 1;
            }
            else{
                result.push(digits[i] + deci);
                deci = 0;
            }
            i--;
        }
        if(deci == 1){
            result.push(1);
        }
    }
    result = result.reverse();
    return result;
};