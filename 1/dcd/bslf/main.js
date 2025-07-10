const localRakBuku = 'BOOKSELF_DICODING';
const idBuku = 'id';
const judulBuku = 'title';
const penulisBuku = 'author';
const tahunBuku = 'year';
const statusBuku = 'isComplete';
const maxBuku = 100;

function simpanBuku(dataBuku, perintah) {
	let storageBuku = JSON.parse(localStorage.getItem(localRakBuku));
	if (storageBuku === null) { 
		storageBuku = []; 
	};
	if (perintah === 'hapus') { 
		localStorage.setItem(localRakBuku, JSON.stringify(dataBuku));
	} else if (perintah === 'edit') { 
		for (let i = 0; i < storageBuku.length; i++) {
			if (storageBuku[i][idBuku] === dataBuku[idBuku]) {
				storageBuku[i] = dataBuku;
				localStorage.setItem(localRakBuku, JSON.stringify(storageBuku));
			};
		};
	} else { 
		for (let i = 0; i < storageBuku.length; i++) {
			if (storageBuku[i][judulBuku] === dataBuku[judulBuku] && storageBuku[i][penulisBuku] === dataBuku[penulisBuku] && storageBuku[i][tahunBuku] === dataBuku[tahunBuku]) {
				alert('Informasi buku sudah ada di rak!');
				return; 
			};
		};
		let dataBukuBaru = storageBuku.concat(dataBuku);
		localStorage.setItem(localRakBuku, JSON.stringify(dataBukuBaru));
	};
};

function displayBuku(filterJudul = /.*/) { 
	let rakDibaca = document.getElementById('completeBookList');
	let rakBelumDibaca = document.getElementById('incompleteBookList');
	rakDibaca.innerHTML = '';
	rakBelumDibaca.innerHTML = '';
	let storageBuku = JSON.parse(localStorage.getItem(localRakBuku));
	for (let i = 0; i < storageBuku?.length; i++) {
		if (storageBuku[i][statusBuku] === true && filterJudul.test(storageBuku[i][judulBuku])) {
			let htmlBukuDibaca = `
			  <div data-bookid="${storageBuku[i][idBuku]}" data-testid="bookItem">
				<h3 data-testid="bookItemTitle">${storageBuku[i][judulBuku]}</h3>
				<p data-testid="bookItemAuthor">Penulis: ${storageBuku[i][penulisBuku]}</p>
				<p data-testid="bookItemYear">Tahun: ${storageBuku[i][tahunBuku]}</p>
				<div>
				  <button data-testid="bookItemIsCompleteButton">Belum Selesai dibaca</button>
				  <button data-testid="bookItemDeleteButton">Hapus Buku</button>
				  <button data-testid="bookItemEditButton">Edit Buku</button>
				</div>
			  </div>
			`;
			rakDibaca.innerHTML += htmlBukuDibaca;
		} else if (storageBuku[i][statusBuku] === false && filterJudul.test(storageBuku[i][judulBuku])) {
			let htmlBukuBelumDibaca = `
			  <div data-bookid="${storageBuku[i][idBuku]}" data-testid="bookItem">
				<h3 data-testid="bookItemTitle">${storageBuku[i][judulBuku]}</h3>
				<p data-testid="bookItemAuthor">Penulis: ${storageBuku[i][penulisBuku]}</p>
				<p data-testid="bookItemYear">Tahun: ${storageBuku[i][tahunBuku]}</p>
				<div>
				  <button data-testid="bookItemIsCompleteButton">Selesai dibaca</button>
				  <button data-testid="bookItemDeleteButton">Hapus Buku</button>
				  <button data-testid="bookItemEditButton">Edit Buku</button>
				</div>
			  </div>
			`;
			rakBelumDibaca.innerHTML += htmlBukuBelumDibaca;
		};
	};
	if (rakDibaca.innerText === '') { 
		rakDibaca.innerHTML = '<i>Kosong</i>';
	}; 
	if (rakBelumDibaca.innerText === '') { 
		rakBelumDibaca.innerHTML = '<i>Kosong</i>';
	};
	assignButton(); 
};

function assignButton() {
	document.querySelectorAll('button[data-testid="bookItemIsCompleteButton"]').forEach((element) => {
		element.addEventListener('click', (event) => {
			let id = element.parentElement.parentElement.dataset.bookid;
			let storageBuku = JSON.parse(localStorage.getItem(localRakBuku));
			if (storageBuku !== null) {
				let dataBuku;
				for (let i = 0; i < storageBuku.length; i++) {
					if (storageBuku[i][idBuku] === id) {
						dataBuku = storageBuku[i];
						dataBuku[statusBuku] = !dataBuku[statusBuku]; 
					};
				};
				simpanBuku(dataBuku, 'edit');
				displayBuku(); 
			};
		});
	});
	document.querySelectorAll('button[data-testid="bookItemDeleteButton"]').forEach((element) => {
		element.addEventListener('click', (event) => {
			let id = element.parentElement.parentElement.dataset.bookid;
			let storageBuku = JSON.parse(localStorage.getItem(localRakBuku));
			if (storageBuku !== null) {
				if (confirm('Yakin?')) {
					let dataBuku;
					for (let i = 0; i < storageBuku.length; i++) {
						if (storageBuku[i][idBuku] === id) {
							dataBuku = storageBuku;
							dataBuku.splice(i, 1);
						};
					};
					simpanBuku(dataBuku, 'hapus');
				};
				displayBuku(); 
			};
		});
	});
	document.querySelectorAll('button[data-testid="bookItemEditButton"]').forEach((element) => {
		element.addEventListener('click', (event) => {
			let id = element.parentElement.parentElement.dataset.bookid;
			let storageBuku = JSON.parse(localStorage.getItem(localRakBuku));
			if (storageBuku !== null) {
				for (let i = 0; i < storageBuku.length; i++) {
					if (storageBuku[i][idBuku] === id) {
						element.parentElement.parentElement.innerHTML = `
							<form id="bookItemEdit">
								<label>Judul: </label><input type="text" required value="${storageBuku[i][judulBuku]}"></input>
								<label>Penulis: </label><input type="text" required value="${storageBuku[i][penulisBuku]}"></input>
								<label>Tahun: </label><input type="number" required value="${storageBuku[i][tahunBuku]}"></input>
								<div>
								  <button id="bookItemEditSave" type="submit">Simpan</button>
								  <button id="bookItemEditCancel" type="button">Batal</button>
								</div>
							</form>
						`;
						document.getElementById('bookItemEdit').addEventListener('submit', (event) => {
							event.preventDefault();
							let tampungBuku = {};
							tampungBuku[idBuku] = id;
							tampungBuku[judulBuku] = event.target[0].value;
							tampungBuku[penulisBuku] = event.target[1].value;
							tampungBuku[tahunBuku] = event.target[2].value;
							tampungBuku[statusBuku] = storageBuku[i][statusBuku];
							simpanBuku(tampungBuku, 'edit');
							displayBuku(); 
						});
						document.getElementById('bookItemEditCancel').addEventListener('click', (event) => {
							displayBuku(); 
						});
						break;
					};
				};
			};
		});
	});
};

document.getElementById('bookForm').addEventListener('submit', (event) => {
	event.preventDefault();
	let dataBuku = {}; 
	dataBuku[idBuku] = String(Number(new Date()));
	dataBuku[judulBuku] = String(event.target[0].value);
	dataBuku[penulisBuku] = String(event.target[1].value);
	dataBuku[tahunBuku] = Number(event.target[2].value);
	dataBuku[statusBuku] = (event.target[3].checked);
	simpanBuku(dataBuku);
	displayBuku();
});

document.getElementById('bookFormIsComplete').addEventListener('click', (event) => {
	if (event.target.checked === true) { 
		document.querySelector('span').innerText = 'Selesai dibaca';
	} else if (event.target.checked === false) {
		document.querySelector('span').innerText = 'Belum selesai dibaca';
	};
});

document.getElementById('searchBookTitle').addEventListener('input', (event) => {
	displayBuku(new RegExp(event.target.value, 'i'));
});

document.getElementById('searchBook').addEventListener('submit', (event) => {
	event.preventDefault();
	document.getElementById('searchBookTitle').dispatchEvent(new Event('input'));
});

document.addEventListener('DOMContentLoaded', () => {
	displayBuku();
});
