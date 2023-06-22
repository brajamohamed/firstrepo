function solve(arr,val){
    let n =arr.length;
    let res=[];
    let temp=[];
    for(let i=0;i<n;i++){
        if(arr[i]!=val){
            temp.push(arr[i])
        }
    }
    let m = temp.length;
    for(let i=0;i<n-m;i++){
        temp.push("_")
    }
    res.push(temp)
    res.push(m)
    return res

}
let ans= solve([1,2,3,3,2,1,4],3)
console.log("the modified array is : "+ ans[0] + " And the no.of numbers in this array is : "+ ans[1])