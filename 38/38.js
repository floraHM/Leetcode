/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var result = "11";
    var tmp = [];
    var count = 1;
    len = result.length;
    if(n == 1 ){
        return "1";
    }
    else{
        for(var i = 2; i < n; i++){
            for(var j = 1; j < len; j++){
                if(result[j] == result[j-1]){
                    count++;
                }
                else{
                    tmp[tmp.length] = ""+count;
                    tmp[tmp.length] = result[j-1];
                    count = 1;
                }
            }
            tmp[tmp.length] = ""+count;
            tmp[tmp.length] = result[j-1];
            count = 1;
            result = tmp;
            tmp =[];
            len = result.length;
        }
        return result.join("");
    }
};
