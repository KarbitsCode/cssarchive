(async () => {
	for (const script of ["d", "b", "c", "e"]) {
		await import(`./${script}.js`);
	};
})();
