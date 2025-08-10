(async () => {
	for (const script of ["d", "b", "c", "e"]) {
		try {
			await import(`./${script}.js`);
		} catch(e) {
			console.error(e);
		};
	};
})();
