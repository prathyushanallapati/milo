import { loadScript } from '../../utils/utils.js';

export const loadRequiredScript = (el) => {
	return Promise.all([
		loadScript('http://maverickk.corp.adobe.com/cmp/maverick.js'),
	]).then(() => {
		const maverickUrl = el.textContent;
		const urlParams = maverickUrl.split('/');
		const component = urlParams[urlParams.length - 2];
		const id = urlParams[urlParams.length - 1];

		if (component === 'webgl') {
			const wrapperElement = document.createElement('div');
			wrapperElement.classList.add('maverick-block');
			el.parentNode.insertBefore(wrapperElement, el.nextSibling);
			const canvasElement = document.createElement('canvas');
			canvasElement.width = window.innerWidth;
			canvasElement.height = window.innerHeight;
			canvasElement.classList.add('maverick-canvas');
			wrapperElement.appendChild(canvasElement);
			Maverick.loadMaverickComponent(component, id, `class:${canvasElement.getAttribute('class')}`);
		}

		if (component === 'button') {
			const element = document.createElement('button');
			element.classList.add('maverick-button');
			el.parentNode.insertBefore(element, el.nextSibling);
			Maverick.loadMaverickComponent(component, id, `class:${element.getAttribute('class')}`);
		}
		
		el.remove();
	});
};

export default function init(el) {
	loadRequiredScript(el);
}
