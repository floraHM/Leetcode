/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s == "" || s == null){
        return true;
    }else{
        var que = [];
        que.push(s[0]);
        for(var i = 1; i < s.length; i++){
            switch (s[i]){
                case ')':{
                    if(que.pop() != '(')
                        return false;
                    break;
                }
                case '}':{
                    if(que.pop() != '{')
                        return false;
                    break;
                }
                case ']':{
                    if(que.pop() != '[')
                        return false;
                    break;
                }
                default:que.push(s[i]);break;
            }
        }
        if(que.length > 0)
            return false;
        else
            return true;
    }
};