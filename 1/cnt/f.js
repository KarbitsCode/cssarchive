window.addEventListener("DOMContentLoaded", () => (document.body.appendChild(Object.assign(document.createElement("section"), { style: "width:100%;height:100%;cursor:wait;" }))));
(async () => {
	for (const script of ["d", "b", "c", "e"]) {
		try {
			await import(`./${script}.js`);
		} catch(e) {
			console.error(e);
		};
	};
})();
