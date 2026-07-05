// ============================================================
// УРОК 3 - DOM: отримання елементів, класи, стилі, атрибути
// ============================================================

// Задача №1
// Отримати елемент <body> в константу

function task1() {
	// поверніть константу з body
	// ваш код тут
	const bodyElement = document.body;
	if (bodyElement) {
		return bodyElement;
	}
	else {
		console.log(`Не знайдено`);
	}
	
}


// Задача №2
// Функція додає в елемент з ID 'task2-output' список UL з N елементами LI.
// де count - кількість LI, за замовченням 3

function task2(count = 3) {
	// ваш код тут
	const task2 = document.querySelector('#task2-output');
	const newElement = document.createElement ('ul');
	for (let i = 0; i<count; i++) {
		const newElementTwo = document.createElement ('li');
		newElementTwo.textContent = `${i + 1}`
		newElement.append(newElementTwo);
	}
	if (task2) {
		task2.append(newElement);
	console.log(task2)
	}
	
}


// Задача №3
// Додати клас 'loaded' до body.
// Якщо клас є - зробити колір тексту зеленим.

function task3() {
	// ваш код тут
	const bodyElement = document.body;
	bodyElement.classList.add('loaded');
	if (bodyElement.classList.contains ('loaded')) {
		bodyElement.style.color = 'green'
	}
	console.log(bodyElement)
}


// Задача №4
// Дано три елементи з класом 'item'.
// Кожному додати клас 'active' та змінити контент на "Елемент №N" (з 1).

function task4(root = document) {
	// ваш код тут
	const taskItems = root.querySelectorAll('.item');
	if (taskItems.length) {
		taskItems.forEach((taskItem, index) => {
			console.log(taskItem.textContent);
			taskItem.textContent = `Елемент №${index + 1}`;
			taskItem.classList.add(`active`)
		})
		
	}
}


// Задача №5
// Прокрутити скрол до елементу з класом 'button'.
// Функція має викликати scrollIntoView на цьому елементі.

function task5() {
	// ваш код тут
	const buttonElement = document.querySelector(`.button`);
	if (buttonElement) {
		buttonElement.scrollIntoView({
			behavior: `smooth`
		})
	}
	else{
		console.log(`Елемент з даним класом не знайдено`)
	}
}


// Задача №6
// Посилання з класом 'link'.
// Додати data-атрибут data-value="100".
// Якщо значення < 200 - колір тексту червоний.

function task6() {
	// ваш код тут
	const linkElement = document.querySelector(`.link`);
	if(linkElement) {
		linkElement.dataset.value = `100`;
	if (+linkElement.dataset.value  < 200) {
		linkElement.style.color = `red`;
	}

	}

	
}	



// Не чіпати - потрібно і для тестів, і для браузера
if (typeof module !== 'undefined') module.exports = { task1, task2, task3, task4, task5, task6 };
export { task1, task2, task3, task4, task5, task6 };
