/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    if(s == "")
        return true;
    var flag = true;
    s = s.toLocaleLowerCase();
    var i,j;
    for(i = 0, j = s.length - 1; i <= j; i++,j--){
        if(i==j){
            break;
        }
        while(flag && (i <= j)){
            flag = false;
            if(!((s[i] >= '0' && s[i] <= '9') || (s[i] >= 'a' && s[i] <= 'z'))){
                flag = true;
                i++;
            }
            if(!((s[j] >= '0' && s[j] <= '9') || (s[j] >= 'a' && s[j] <= 'z'))){
                flag = true;
                j--;
            }
        }
        if(i>=j){
            break;
        }
        if(s[i] != s[j]){
            break;
        }
        flag = true;
    }
    if(i >= j)
        return true;
    else
        return false;
};