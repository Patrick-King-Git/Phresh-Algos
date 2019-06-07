function bracesValid(string){
    let x=0;
    let y=0;
    let z=0;
    let arr = [];
    for(let i in string){
        if(string[i] == "{"){
            x+=1;
            arr.push(string[i]);
        }
        if(string[i] == "("){
            y+=1;
            arr.push(string[i]);
        }
        if(string[i] == "["){
            z+=1;
            arr.push(string[i]);
        }
        if(string[i] == "}"){
            x-=1;
            if(arr[arr.length-1] != "{") {
                return false;
            }
            arr.pop();
        }
        if(string[i] == ")"){
            y-=1;
            if(arr[arr.length-1] != "(") {
                return false;
            }
            arr.pop();
        }
        if(string[i] == "]"){
            z-=1;
            if(arr[arr.length-1] != "[") {
                return false;
            }
            arr.pop();
        }
        if(x<0 || y<0 || z< 0){
            return false;
        }
    }
    if(x ==0 && y==0 && z==0){
        return true;
    }

}

console.log(bracesValid(")((({{[[]]}})))("))