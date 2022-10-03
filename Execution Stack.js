let a = "hello";
function first(){
    console.log('fungsi pertama');
    second();
    console.log('fungsi pertama lagi');
}
function second(){
    console.log('fungsi kedua');
}
first();
console.log('global execution context');