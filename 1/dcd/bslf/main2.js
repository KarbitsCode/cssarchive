const idBuku = 'ID_BUKU_';
const judulBuku = 'JUDUL_BUKU';
const penulisBuku = 'PENULIS_BUKU';
const tahunBuku = 'TAHUN_BUKU';
const statusBuku = 'STATUS_BUKU';
const maxBuku = 100;

function simpanBuku(dataBuku, editBuku) {
	if (!editBuku) {
		for (let i = 0; i < maxBuku; i++) {
			let storageBuku = JSON.parse(localStorage.getItem(idBuku + i))
			if (storageBuku !== null) { 
				if (storageBuku[judulBuku] === dataBuku[judulBuku] && storageBuku[penulisBuku] === dataBuku[penulisBuku] && storageBuku[tahunBuku] === dataBuku[tahunBuku]) {
					break; 
				};
			} else if (storageBuku === null) { 
				localStorage.setItem(idBuku + i, JSON.stringify(dataBuku));
				break;
			};
		};
	} else { 
		localStorage.setItem(editBuku, JSON.stringify(dataBuku));
	};
};

function displayBuku(filterJudul = /.*/) { 
	let rakDibaca = document.getElementById('completeBookList');
	let rakBelumDibaca = document.getElementById('incompleteBookList');
	rakDibaca.innerHTML = '';
	rakBelumDibaca.innerHTML = '';
	for (let i = 0; i < maxBuku; i++) {
		let storageBuku = JSON.parse(localStorage.getItem(idBuku + i));
		try {
			storageBuku[judulBuku];
		} catch (e) {
			continue;
		};
		if (storageBuku[statusBuku] === true && filterJudul.test(storageBuku[judulBuku])) {
			let htmlBukuDibaca = `
			  <div data-bookid="${i}" data-testid="bookItem">
				<h3 data-testid="bookItemTitle">${storageBuku[judulBuku]}</h3>
				<p data-testid="bookItemAuthor">Penulis: ${storageBuku[penulisBuku]}</p>
				<p data-testid="bookItemYear">Tahun: ${storageBuku[tahunBuku]}</p>
				<div>
				  <button data-testid="bookItemIsCompleteButton">Belum Selesai dibaca</button>
				  <button data-testid="bookItemDeleteButton">Hapus Buku</button>
				  <button data-testid="bookItemEditButton">Edit Buku</button>
				</div>
			  </div>
			`;
			rakDibaca.innerHTML += htmlBukuDibaca;
		} else if (storageBuku[statusBuku] === false && filterJudul.test(storageBuku[judulBuku])) {
			let htmlBukuBelumDibaca = `
			  <div data-bookid="${i}" data-testid="bookItem">
				<h3 data-testid="bookItemTitle">${storageBuku[judulBuku]}</h3>
				<p data-testid="bookItemAuthor">Penulis: ${storageBuku[penulisBuku]}</p>
				<p data-testid="bookItemYear">Tahun: ${storageBuku[tahunBuku]}</p>
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
			let i = element.parentElement.parentElement.dataset.bookid;
			let storageBuku = JSON.parse(localStorage.getItem(idBuku + i));
			if (storageBuku !== null) {
				let dataBuku = {...storageBuku, [statusBuku]: !storageBuku[statusBuku]}; 
				simpanBuku(dataBuku, idBuku + i);
				displayBuku(); 
			};
		});
	});
	document.querySelectorAll('button[data-testid="bookItemDeleteButton"]').forEach((element) => {
		element.addEventListener('click', (event) => {
			let i = element.parentElement.parentElement.dataset.bookid;
			let storageBuku = JSON.parse(localStorage.getItem(idBuku + i));
			if (storageBuku !== null) {
				if (confirm('Yakin?')) {
					localStorage.removeItem(idBuku + i);
				};
				displayBuku(); 
			};
		});
	});
	document.querySelectorAll('button[data-testid="bookItemEditButton"]').forEach((element) => {
		element.addEventListener('click', (event) => {
			let i = element.parentElement.parentElement.dataset.bookid;
			let storageBuku = JSON.parse(localStorage.getItem(idBuku + i));
			if (storageBuku !== null) {
				element.parentElement.parentElement.innerHTML = `
					<form id="bookItemEdit">
						<label>Judul: </label><input type="text" required value="${storageBuku[judulBuku]}"></input>
						<label>Penulis: </label><input type="text" required value="${storageBuku[penulisBuku]}"></input>
						<label>Tahun: </label><input type="number" required value="${storageBuku[tahunBuku]}"></input>
						<div>
						  <button id="bookItemEditSave" type="submit">Simpan</button>
						  <button id="bookItemEditCancel" type="button">Batal</button>
						</div>
					</form>
				`;
				document.getElementById('bookItemEdit').addEventListener('submit', (event) => {
					event.preventDefault();
					let tampungBuku = {};
					tampungBuku[judulBuku] = event.target[0].value;
					tampungBuku[penulisBuku] = event.target[1].value;
					tampungBuku[tahunBuku] = event.target[2].value;
					tampungBuku[statusBuku] = storageBuku[statusBuku];
					simpanBuku(tampungBuku, idBuku + i);
					displayBuku(); 
				});
				document.getElementById('bookItemEditCancel').addEventListener('click', (event) => {
					displayBuku(); 
				});
			};
		});
	});
};

document.getElementById('bookForm').addEventListener('submit', (event) => {
	event.preventDefault();
	let tampungBuku = {}; 
	tampungBuku[judulBuku] = event.target[0].value;
	tampungBuku[penulisBuku] = event.target[1].value;
	tampungBuku[tahunBuku] = event.target[2].value;
	tampungBuku[statusBuku] = event.target[3].checked;
	simpanBuku(tampungBuku, false);
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
	displayBuku(new RegExp(event.target.value, "i"));
});

document.getElementById('searchBook').addEventListener('submit', (event) => {
	event.preventDefault();
	document.getElementById('searchBookTitle').dispatchEvent(new Event('input'));
});

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('searchSubmit').setAttribute('hidden', '');
	displayBuku();
});
