export default function subMenu() {
	console.log('Файл подключен')

	// Получаем все пункты верхнего меню
	const menuLi = document.querySelectorAll('.menu__list-item')
	console.log(menuLi)

	// Ставим прослушку на все пункты верхнего меню
	menuLi.forEach(li => {
		li.addEventListener('click', openSubMenu)
	});

	// Вызываем функцию при клике на пункты верхнего меню
	function openSubMenu(e) {
		if (e.target.querySelector('.menu__sub-list')) {
			e.target.classList.toggle('sub-menu-open')
			console.log(e.target)
		}
	}
}