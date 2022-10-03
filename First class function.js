const foo = function() {
    console.log("foobar");
}
foo();
function spica() {
    return "Aimer, ";
}
function soil(blanc, name){
    console.log(blanc()+name);
}
soil(spica,"Javascript!");
function spica(){
    return function(){
        console.log("Hello!");
    }
}