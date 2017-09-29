/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var tmp = x;
    var low, high;
    var result;
    if(x<=0){
        return 0;
    }
    tmp = Math.floor(tmp/2);
    while(1){
        low = tmp * tmp;
        high = (tmp+1) * (tmp+1);
        if(low == x || (low < x && high > x)){
            return tmp;
        }
        if(high == x){
            return tmp + 1;
        }
        else if(high < x){
            tmp = tmp + 1;
        }
        else{
            tmp = Math.floor(tmp/2);
        }
    }
};