// # Exercício 2

// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

// **Utilize o for...in para resolver**

// Exemplo com entrada **`7`**:
// ```jsx
// 7
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70
// ```

let num = Number(prompt("digite um número: "))

let index = 0

for (index = 1; index < 10; index++) {
        produto = (num * index)
        console.log(`${num} x ${index} = ${produto}`)
}