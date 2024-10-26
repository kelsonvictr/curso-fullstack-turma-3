for (let i  = 1; i <= 100; i++) {
    // QUANDO FOR MULTIPLO DE 3 E TAMBEM DE 5
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    } else if(i % 3 == 0) { // QUANDO FOR SOMENTE MULTIPLO DE 3
        console.log("Fizz")
    } else if(i % 5 == 0) { // QUANDO FOR SOMENTE MULTIPLO DE 5
        console.log("Buzz")
    } else { // QUANDO NAO ATENDER NENHUMA DESSAS OPCOES ACIMA
        console.log(i)
    }
}