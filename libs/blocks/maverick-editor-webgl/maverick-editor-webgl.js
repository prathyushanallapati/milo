import { loadScript } from '../../utils/utils.js';

export const loadRequiredScript = (el) => {
	return Promise.all([
		loadScript('http://maverickk.corp.adobe.com/cmp/maverick.js'),
	]).then(() => {
		const element = document.createElement('div');
		element.classList.add('mount');
		el.appendChild(element);
		Maverick.loadMaverickEditor('webgl', document.querySelector('.mount'));
	});
};

export default function init(el) {
	loadRequiredScript(el);
}
