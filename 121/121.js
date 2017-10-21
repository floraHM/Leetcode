/**
 * @param {number[]} prices
 * @return {number}
 */
var compar = function(value){
    return function(a,b){
        if(a[value]> b[value])
            return 1;
        else if(a[value] < b[value])
            return -1;
        else
            return 0;
    }
};
var maxProfit = function(prices) {
    var end = prices.length - 1;
    var sorted = [];
    var profit = 0;
    for(var i = 0; i <= end; i++){
        var cur = [];
        cur.index = i;
        cur.value = prices[i];
        sorted.push(cur);
    }
    // console.log(sorted);
    sorted.sort(compar('value'));
    //console.log(sorted);
    var buy = 0, tmp_buy = 0;
    var sell = end, tmp_sell = 0;
    for(buy; buy <= end; buy++){
        sell = end;
        while(sell >= tmp_sell){
            if(sorted[buy].index <= sorted[sell].index){
                if(sorted[sell].value - sorted[buy].value > profit){
                    profit = sorted[sell].value - sorted[buy].value;
                    tmp_sell = sell;
                    break;
                }
            }
            sell--;
        }
    }
    return profit;
};