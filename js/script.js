let sum = 0;
let N = +prompt("Введіть перше число");
while(isNaN(N) || N == "" || !Number.isInteger(N)){
    N = +prompt("Введіть перше ціле число");
}

let M = +prompt("Введіть друге ціле число");

while(isNaN(M) || N >= M || M =="" || !Number.isInteger(M)){
    M = +prompt("Введіть друге ціле число, більше від попереднього");
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

