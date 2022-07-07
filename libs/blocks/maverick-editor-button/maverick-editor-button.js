import { loadScript } from '../../utils/utils.js';

function loadMaverickScript(el) {
	return Promise.all([
		loadScript('http://maverickk.corp.adobe.com/cmp/maverick.js'),
	]).then(() => {
		const element = document.createElement('div');
		element.classList.add('mount');
		el.appendChild(element);
		Maverick.loadMaverickEditor('button', document.querySelector('.mount'));
	});
}

export default function init(el) {
	loadMaverickScript(el);
	console.log(el, 'button editor');
}
