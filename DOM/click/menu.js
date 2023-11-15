export default function menu() {

	// Получить узлы с которыми будем работать:
	const menu = document.querySelector('.menu')

	// Поставить прослушку на определенное событие, в данном случае событие 'click', которое будет
	// запускать соответствующую функцию (в данном случае это - 'openMenu'). 
	// При наступлении события 'click' выполняется функция 'openMenu':
	document.addEventListener('click', openMenu)

	// Собственно сама функция 'openMenu':
	function openMenu(e) {
		console.log(e)
		if (e.target.closest('.menu__icon')) {
			console.log('Да это Кнопка')

			menu?.classList.toggle('menu-open')
		} else {
			console.log('Это НЕ Кнопка')
		}

		if (!e.target.closest('.menu__list') && !e.target.closest('.menu__icon')) {
			console.log('no')

			menu?.classList.remove('menu-open')
		}

	}
}	