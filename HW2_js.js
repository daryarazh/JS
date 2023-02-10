// 1. Сделать функцию которая при вызове напишет в консоль сумму 2-х переданных в неё чисел

function f1(p1, p2) {

result = p1 + p2
console.log (result)

}

// 2. Сделать функцию которая вернёт в консоль квадрат переданного числа

f1(3,4)

function f1(x) {

     result = x * x
    console.log (result)
    
}
    
    f1(24)

// 3. Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON
//     {"name":И,
//     "surname":Ф,
//     "middlename":О}

function f1(name1, surname, middlename) {

    console.log (JSON.stringify({name: name1, surname: surname, middlename: middlename}))
        
} 
        
    f1('N','S','M')


