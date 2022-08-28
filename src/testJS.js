function myObj() {
    function InnerFunc(){
        console.log("YES");
    }
}

function myFunc(){
    console.log("START");
    this.InnerFunc();
}

let myNewObj = myFunc.bind(new myObj);
myNewObj();