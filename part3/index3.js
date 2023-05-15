const year = document.querySelector('.year').value;
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

function checkLeapYear(year) {
btn.addEventListener('click', () => {
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
    result.textContent = 'Год является високосным';
    }
    else {
            result.textContent = 'Год не является високосным';
        }
    }
        else {
            result.textContent = 'Год является високосным';
        }
        }
        else {
            result.textContent = 'Год не является високосным';
        }

    });
}


checkLeapYear(year);



