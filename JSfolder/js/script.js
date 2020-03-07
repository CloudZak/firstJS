"use strict";

let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let mandatoryExpenses = prompt('Введите обязательную статью расходов в этом месяце');
let howMany = prompt('Во сколько обойдется?');

let expenses = {};
expenses[mandatoryExpenses] = howMany;

let appData = {
    budget: money,
    timeData: time,
    expenses: {expenses},
    optionalExpenses: '',
    income : [],
    savings: ''
};

alert('Бюджет на один день равен ' + appData.budget/30);
