/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.min = undefined;
    this.arr = new Array();
    this.order = new Array();
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.arr.push(x);
    if(this.min == undefined || x < this.min){
        this.min = x;
        this.order.splice(0,0,x);
    }
    else{
        var l = this.order.length;
        for(var i = 0;i < l; i++){
            if(x<= this.order[i]){
                this.order.splice(i,0,x);
                break;
            }
        }
        if( l ==  this.order.length){
            this.order[l] = x;
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var pop = this.arr.pop();
    if(pop == this.min){
        this.order.splice(0,1);
        this.min = this.order[0];
    }

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */