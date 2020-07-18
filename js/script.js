let sum = 0;
let N = Math.floor(+prompt("Введіть перше число"));
while(isNaN(N) || N == ""){
    N =  +prompt("Введіть перше число");
}

let M = Math.floor(+prompt("Введіть друге число"));

while(isNaN(M) || N >= M || M ==""){
    M = +prompt("Введіть друге число, більше від попереднього");
}


let skipEvenNumbers = confirm ("Пропускати парні числа?");
 
while (N <= M ){
if(skipEvenNumbers){
    if(N % 2 ===0){
        N ++;
        continue;
    }

}
sum += N;
N ++;
}

document.writeln(sum);

