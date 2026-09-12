window.addEventListener('load', async () => {
	const params = new URLSearchParams(location.search);
	const center = 'https://eads-flask.vercel.app';
	const toggleDisabled = element => element.querySelectorAll('input:not([type="hidden"]), button, textarea').forEach(e => e.disabled = !e.disabled);
	const refreshData = extra => location.replace(`${center}/asnc.cnt?return=${btoa(location.href.split('?', 1)[0] + (extra ? '?' + extra : ''))}`);
	if (!params.get('state')) {
		refreshData();
	} else {
		await import (`${center}/shuf.js`);
		const data = JSON.parse(decodeFromThat(params.get('state')));
		if (Date.now() - data.last > 30_000) {
			refreshData();
			return;
		};
		const csrf = await fetch(`${center}/scfr.cnt`, { credentials: 'include' });
		const form = document.querySelector('form');
		form.action = `${center}/asnc.cnt`;
		form.elements._csrf.value = await csrf.text();
		form.elements.id.value = data.id;
		form.elements.count.value = data.cnt;
		let holdTimer;
		if (data.cnt > 0) {
			form.nextElementSibling.nextElementSibling.textContent = `${data.cnt}/${data.total || '??'} flags!`;
			form.querySelector('span.example').remove();
			if (data.cnt > 3) {
				document.addEventListener('pointerdown', () => {
					holdTimer = setTimeout(() => {
						if (!document.getElementById('reset')) {
							const button = document.createElement('button');
							button.setAttribute('type', 'button');
							button.setAttribute('title', 'Reset data');
							button.setAttribute('id', 'reset');
							button.addEventListener('click', () => refreshData('reset'));
							// <a href="https://www.flaticon.com/free-icons/restart" title="restart icons">Restart icons created by Magnific - Flaticon</a>
							const icon = document.createElement('img');
							icon.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/82/82004.png');
							icon.style.setProperty('width', '10px');
							button.appendChild(icon);
							form.appendChild(button);
						}
					}, 1000);
				});
				['pointerup', 'pointercancel'].forEach(event => document.addEventListener(event, () => clearTimeout(holdTimer)));
			}
		};
		if (data.more) {
			form.nextElementSibling.textContent = (typeof data.more === 'boolean') ? 'Wrong!' : data.more;
			form.nextElementSibling.style.setProperty('color', 'red');
		};
		toggleDisabled(form);
		form.addEventListener('submit', e => setTimeout(() => toggleDisabled(e.target)));
	};
});
