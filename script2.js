let s = [ John: 100, Ann: 160, Pete: 130 ]

let sum = 0;

/*function showSum(obj) {
*/
for(let key in obj) {

if(typeof obj[key] == "number") {
sum += obj[key];
}

}

return alert(sum);

}

showSum(s);