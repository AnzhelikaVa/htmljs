let firstValue = '';

function digit(n) {
    console.log("Works! " + n);
    firstValue += n;
    write(firstValue);
}
 function write(n){
    document.getElementsById('display').value = n;
}