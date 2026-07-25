Q1
function outer() {
    let x = 10;

    return function () {
        console.log(x);
    };
}

const fn = outer();

fn();

Output?
Q2
function outer() {
    let x = 5;

    return function () {
        console.log(x * 3);
    };
}

const fn = outer();

fn();

Output?

🟡 Level 2 (Counter)
Q3
function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const c = counter();

c();
c();
c();

Output?

Q4
function counter() {
    let count = 100;

    return function () {
        count -= 10;
        console.log(count);
    };
}

const c = counter();

c();
c();

Output?

🟠 Level 3 (Two Closures)
Q5 ⭐
function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const a = counter();
const b = counter();

a();
a();

b();

a();

b();

Output?

Q6 ⭐⭐⭐
function greeting(name) {
    return function () {
        console.log("Hello " + name);
    };
}

const x = greeting("Lokesh");
const y = greeting("Rahul");

x();
y();
y();
x();

Output?

🔴 Level 4 (Shared Closure)
Q7 ⭐⭐⭐⭐
function bank() {
    let balance = 1000;

    return {
        deposit(amount) {
            balance += amount;
        },

        withdraw(amount) {
            balance -= amount;
        },

        check() {
            console.log(balance);
        }
    };
}

const acc = bank();

acc.deposit(500);
acc.check();

acc.withdraw(200);
acc.check();

Output?

Q8 ⭐⭐⭐⭐⭐
function bank() {
    let balance = 1000;

    return {
        deposit(amount) {
            balance += amount;
        },

        check() {
            return balance;
        }
    };
}

const acc = bank();

acc.deposit(500);

console.log(acc.check());

console.log(acc.balance);

Output?

🔥 Final Boss
Q9
function outer() {
    let x = 10;

    return {
        first() {
            x++;
        },

        second() {
            x += 5;
        },

        show() {
            console.log(x);
        }
    };
}

const obj = outer();

obj.show();

obj.first();

obj.show();

obj.second();

obj.show();

Output?

🧠 Concept Questions
Q10

True or False?

Every call to an outer function creates a new closure.

Q11

True or False?

Two functions returned from the same outer function call share the same closure.

Q12

True or False?

Closure variables become object properties.

1.fn=cllaing inner function with using closure of x,so prints 10,
2.same logic.15,
3.1,2,3 ,,
4.100-10=90 and 90-10=80,
5.it creates two closures a,b, first a->1,2, b->1,agian a->3,next  b->2,
6.Hello Lokesh,Hello Rahul,Hello Rahul,Hello Lokesh,
7.it uses balance =1000,outer has 3 inner return functions so they all uses the same closure ,deposit=1500,check=1500,withdraw=1300,again check =1300,
8.depost{500} makes 1500 ,check uses same closure so it prints 1500,balnce is not belongs to account property  ,so  it prints undefined,
9.uses same closure for all 3 inside return functions ,so 10->11->11->11+5=16->show16,final output,
10.true,
11.true,
12.false, 
