/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate_row = function(num,row){

}
var generate = function(numRows) {
    var triangle = [];
    var row = [];
    var num = 0;
    while(num < numRows){
        num++;
        row = [];
        console.log(num);
        if(num == 1){
            row.push(1);
            triangle.push(row);
        }
        else if(num == 2){
            row.push(1);
            row.push(1);
            triangle.push(row);
        }
        else{
            for(var i = 0, j = num - 1; i <= j; i++,j--){
                if(i == 0){
                    row[i] = row[j] = 1;
                }
                else{
                    row[i] = row[j] = triangle[num-2][i-1] + triangle[num-2][i];
                }

            }
            triangle.push(row);
        }

    }
    return triangle;
};