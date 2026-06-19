/**
 * @jest-environment jsdom
 */

const { task1, task2, task3, task4, task5, task6 } = require('../solution/solution');

beforeEach(() => {
	document.body.innerHTML = `
        <div id="task2-output"></div>
        <div class="item">old</div>
        <div class="item">old</div>
        <div class="item">old</div>
        <button class="button">Кнопка</button>
        <a class="link" href="#">посилання</a>
    `;

	document.body.className = '';
	document.body.style = '';
});

describe('Урок 3 - DOM', () => {

	test('Задача 1: отримати <body>', () => {
		const result = task1();
		expect(result).not.toBeNull();
		expect(result).toBe(document.body);
	});

	test('Задача 2: створити UL зі стандартною кількістю LI (3)', () => {

		task2();

		const container = document.querySelector('#task2-output');
		expect(container).not.toBeNull();

		const ul = container.querySelector('ul');
		expect(ul).not.toBeNull();

		const items = ul.querySelectorAll('li');
		expect(items.length).toBe(3);
	});

	test('Задача 2: створити UL з переданою кількістю LI (5)', () => {

		task2(5);

		const container = document.querySelector('#task2-output');
		expect(container).not.toBeNull();

		const ul = container.querySelector('ul');
		expect(ul).not.toBeNull();
		
		const items = ul.querySelectorAll('li');
		expect(items.length).toBe(5);
	});

	test('Задача 3: body отримує клас loaded та зелений колір', () => {
		task3();
		expect(document.body.classList.contains('loaded')).toBe(true);
		expect(document.body.style.color).toBe('green');
	});

	test('Задача 4: кожен .item отримує клас active і правильний текст', () => {

		task4();
		const items = document.querySelectorAll('.item');
		items.forEach((el, i) => {
			expect(el.classList.contains('active')).toBe(true);
			expect(el.textContent).toBe(`Елемент №${i + 1}`);
		});
	});

	test('Задача 5: scrollIntoView викликається на .button', () => {

		const btn = document.querySelector('.button');
		btn.scrollIntoView = jest.fn();
		task5();
		expect(btn.scrollIntoView).toHaveBeenCalled();
	});

	test('Задача 6: data-value="100" додано, колір червоний', () => {

		task6();
		const link = document.querySelector('.link');
		expect(link.dataset.value).toBe('100');
		expect(link.style.color).toBe('red');
	});

});
