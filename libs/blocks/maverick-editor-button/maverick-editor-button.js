import { loadScript } from '../../utils/utils.js';

function loadMaverickScript(el) {
	return Promise.all([
		loadScript('http://maverickk.corp.adobe.com/maverick.js'),
	]).then(() => {
		const element = document.createElement('div');
		element.classList.add('mount');
		el.appendChild(element);
		// Maverick.loadMaverickEditor('button', document.querySelector('.mount'));

		const form = document.createElement('form');
		form.classList.add('maverick-form');
		const labelElement = document.createElement('input');
		labelElement.setAttribute('type', 'text');
		labelElement.setAttribute('placeholder', 'Please enter label for Button');
		const styleElement = document.createElement('select');
		const opts = [
			{
				label: 'CTA',
				value: 'cta'
			},
			{
				label: 'Link',
				value: 'link'
			}
		];

		opts.forEach((option) => {
			const element = document.createElement('option');
			element.setAttribute('value', option.value);
			element.innerHTML = option.label;
			styleElement.appendChild(element);
		})

		form.appendChild(labelElement);
		form.appendChild(styleElement);
		el.appendChild(form);
	});
}

export default function init(el) {
	loadMaverickScript(el);
	console.log(el, 'button editor');
}
