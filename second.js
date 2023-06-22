//balanced parentheses

function balancedParens(string) {
    let stack = [];
    for(let i=0;i<string.length;i++){
        if(string[i] == "("||string[i] == "{"||string[i] == "["){
            stack.push(string[i]);
            continue;  // continue statement
        }

        if(stack.length == 0){
            return false;
        }

        let check;
        switch(string[i]){
            case ")":
                check = stack.pop();
                if(check == "{"||check == "["){
                    return false;
                }
                break;
            case "}":
                check = stack.pop();
                if(check == "("||check == "["){
                    return false;
                }
                break;
            case "]":
                check = stack.pop();
                if(check == "("||check == "{"){
                    return false;
                }
                break;

            }
    }
    return (stack.length == 0);   
}
if(balancedParens("{}()[[]")){
    console.log("Balanced");

}else{
    console.log("Not Balanced");
}
