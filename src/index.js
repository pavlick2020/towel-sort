module.exports = function towelSort (matrix=[]) {
    let n = matrix.length
    let res = [];
     if(n === 0) {
         return [];
     }
       for(i = 0; i < n; i++) {  
       if(i % 2 === 0) {
       res.push(...matrix[i])
     } else {
       res.push(...matrix[i].reverse())
     }
     
    }
    return res;
}   
   
