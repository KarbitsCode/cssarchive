window.addEventListener("load", async () => {
	const params = new URLSearchParams(location.search);
	const center = 'https://eads-flask.vercel.app';
	const toggleDisabled = (element) => {
		element.querySelectorAll('input:not([type="hidden"]), button, textarea').forEach(e => {
			e.disabled = !e.disabled;
		});
	};
	const refreshData = () => {
		location.replace(`${center}/asnc.cnt?return=${btoa(location.href.split("?", 1)[0])}`);
	};
	if (!params.get("state")) {
		refreshData();
	} else {
		await import (`${center}/shuf.js`);
		const csrf = await fetch(`${center}/scfr.cnt`, { credentials: "include" });
		const data = JSON.parse(decodeFromThat(params.get("state")));
		if (Date.now() - data.last > 30_000) {
			refreshData();
			return;
		};
		const form = document.querySelector('form');
		form.action = `${center}/asnc.cnt`;
		form.elements._csrf.value = await csrf.text();
		form.elements.id.value = data.id;
		form.elements.count.value = data.cnt;
		if (data.cnt > 0) {
			form.nextElementSibling.nextElementSibling.textContent = `${data.cnt}/${data.total || '??'} flags!`;
			form.querySelector('span.example').remove();
		};
		if (data.more) {
			form.nextElementSibling.textContent = (typeof data.more === 'boolean') ? 'Wrong!' : data.more;
			form.nextElementSibling.style.setProperty('color', 'red');
		};
		toggleDisabled(form);
		form.addEventListener('submit', (e) => {
			setTimeout(() => toggleDisabled(e.target));
		});
	};
});
