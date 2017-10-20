/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getnum = function(i,j){
    if(i == 0 || j == 0 || i == j){
        return 1;
    }
    else if(i == 1){
        return 1;
    }
    else{
        var num = getnum(i - 1, j - 1) + getnum(i - 1, j);
    }
    return num;
}
var getRow = function(rowIndex) {
    if(rowIndex == 0){
        return [1];
    }
    var result =[];
    for(var i = rowIndex, j = Math.floor(rowIndex/2); j >= 0; j--){
        if(rowIndex % 2 == 0 && j ==  rowIndex/2){
            result.push(getnum(i,j));
        }
        else{
            result.push(getnum(i,j));
            result.unshift(getnum(i,j));
        }

    }
    return result;
};