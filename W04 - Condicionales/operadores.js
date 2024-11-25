/* En JavaScript, existen varios tipos de operadores que permiten realizar distintas acciones sobre variables y valores. A continuación, te doy un desglose de los principales tipos de operadores en JavaScript:

1. Operadores Aritméticos
Se usan para realizar operaciones matemáticas básicas. 

Suma (+): Suma dos valores.
Resta (-): Resta un valor del otro.
Multiplicación (*): Multiplica dos valores.
División (/): Divide un valor entre otro.
Módulo (%): Devuelve el residuo de una división.
Exponenciación (**): Eleva un número a la potencia de otro.
Incremento (++): Aumenta en 1 el valor de la variable.
Decremento (--): Disminuye en 1 el valor de la variable.
2. Operadores de Asignación
Se usan para asignar valores a las variables.

Asignación simple (=): Asigna un valor a una variable.*/

let x = 10;
/* Asignación con suma (+=): Suma y asigna el valor. */

x += 5;  // Equivalente a x = x + 5;
/* Asignación con resta (-=): Resta y asigna el valor.
Asignación con multiplicación (*=): Multiplica y asigna el valor.
Asignación con división (/=): Divide y asigna el valor.
Asignación con módulo (%=): Calcula el residuo y asigna el valor.
3. Operadores de Comparación
Comparan dos valores y devuelven un valor booleano (true o false).

Igualdad (==): Compara si dos valores son iguales (sin comprobar tipo). */

5 == "5";  // true (comparación no estricta)
/* Igualdad estricta (===): Compara si dos valores son iguales y del mismo tipo.*/

5 === "5";  // false (comparación estricta)
/* Desigualdad (!=): Compara si dos valores son diferentes (sin comprobar tipo).
Desigualdad estricta (!==): Compara si dos valores son diferentes y de distinto tipo.
Mayor que (>): Verifica si un valor es mayor que otro.
Menor que (<): Verifica si un valor es menor que otro.
Mayor o igual que (>=): Verifica si un valor es mayor o igual a otro.
Menor o igual que (<=): Verifica si un valor es menor o igual a otro.
4. Operadores Lógicos
Se usan para combinar o invertir expresiones lógicas.

Y lógico (&&): Devuelve true si ambas condiciones son verdaderas. */

(5 > 3 && 2 < 4);  // true
/* O lógico (||): Devuelve true si al menos una de las condiciones es verdadera.*/

(5 < 3 || 2 < 4);  // true
/* Negación lógica (!): Invierte el valor booleano de una expresión.*/
!(5 < 3);  // true