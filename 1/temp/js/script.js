const inputText = document.getElementById("number-input")
const resultText = document.getElementById("result-output")
const formulaText = document.getElementById("formula-output")
const explanationText = document.getElementById("explanation-text")
const inputLabel = document.getElementById("first-label")
const resultLabel = document.getElementById("second-label")
const warnLabel = document.getElementById("warn-label")
const convertButton = document.getElementById("convert-button")
const reverseButton = document.getElementById("reverse-button")
const resetButton = document.getElementById("reset-button")

const doConvert = () => {
    warnLabel.style.display = "none"
    if (inputLabel.textContent === "Celcius (°C)") {
        let celcius = inputText.value
        if (celcius !== "" && !(isNaN(celcius))) {
            celcius = parseFloat(celcius)
            let result = ((celcius * (9/5)) + 32).toFixed(1)
            let resultFormula
            if (isFinite(result)) {
                resultFormula = `(${celcius}°C * (9/5)) + 32 = ${result}°F`
            } else {
                resultFormula = ""
            }
            console.log("INFO:", resultFormula)
            resultText.value = result
            formulaText.value = resultFormula
            explanationText.innerHTML = `
            <div class="explanation-text">Cara Kerja Konversi Suhu Celcius (&deg;C)</div>
            <div class="normal-text">Suhu <big><i>S</i></big> dalam derajat Fahrenheit (&deg;F) sama dengan suhu <big><i>S</i></big> dalam derajat Celcius (&deg;C) kali <big>9/5</big> tambah <big>32</big>.</div>
            <br>
            <div class="normal-text"><big><i>S</i></big><sub>(&deg;F)</sub> = (<big><i>S</i></big><sub>(&deg;C)</sub> &times; <big>9/5</big>) &plus; <big>32</big></div>`
            explanationText.style.display = "inline"
        } else {
            resultText.value = "Error: Mohon masukan angka yang valid"
            formulaText.value = ""
            explanationText.style.display = "none"
            console.error("ERROR: Mohon masukan angka yang valid")
        }
    } else if (inputLabel.textContent === "Fahrenheit (°F)") {
        let fahrenheit = inputText.value
        if (fahrenheit !== "" && !(isNaN(fahrenheit))) {
            fahrenheit = parseFloat(fahrenheit)
            let result = ((fahrenheit - 32) * (5/9)).toFixed(1)
            let resultFormula
            if (isFinite(result)) {
                resultFormula = `(${fahrenheit}°F - 32) * (5/9) = ${result}°C`
            } else {
                resultFormula = ""
            }
            console.log("INFO:", resultFormula)
            resultText.value = result
            formulaText.value = resultFormula
            explanationText.innerHTML = `
            <div class="explanation-text">Cara Kerja Konversi Suhu Fahrenheit (&deg;F)</div>
            <div class="normal-text">Suhu <big><i>S</i></big> dalam derajat Celcius (&deg;C) sama dengan suhu <big><i>S</i></big> dalam derajat Fahrenheit (&deg;F) kurang <big>32</big> dikali <big>5/9</big></div>
            <br>
            <div class="normal-text"><big><i>S</i></big><sub>(&deg;C)</sub> = (<big><i>S</i></big><sub>(&deg;F)</sub> &minus; <big>32</big>) &times; <big>5/9</big></div>`
            explanationText.style.display = "inline"
        } else {
            resultText.value = "Error: Mohon masukan angka yang valid"
            formulaText.value = ""
            explanationText.style.display = "none"
            console.error("ERROR: Mohon masukan angka yang valid")
        }
    }
}

const doReverse = () => {
    if (inputLabel.textContent === "Celcius (°C)") {
        inputLabel.textContent = "Fahrenheit (°F)"
        resultLabel.textContent = "Celcius (°C)"
        console.log("INFO: Label ditukar", inputLabel.textContent, "dengan", resultLabel.textContent)
    } else if (inputLabel.textContent === "Fahrenheit (°F)") {
        inputLabel.textContent = "Celcius (°C)"
        resultLabel.textContent = "Fahrenheit (°F)"
        console.log("INFO: Label ditukar", inputLabel.textContent, "dengan", resultLabel.textContent)
    }
}

const doReset = () => {
    inputText.value = ""
    resultText.value = ""
    formulaText.value = ""
    warnLabel.style.display = "none"
    explanationText.style.display = "none"
    console.log("INFO: Text area dibersihkan")
}

convertButton.addEventListener("click", () => doConvert())
reverseButton.addEventListener("click", () => doReverse())
resetButton.addEventListener("click", () => doReset())

inputText.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault()
        doConvert()
    }
})

inputText.addEventListener("input", (state) => {
    let regex = /^[0-9.Ee+-]+$/
    let array = [null, undefined]
    if (!(array.includes(state.data)) && !(regex.test(state.data))) {
        warnLabel.textContent = "Perhatian: Input bukan angka: " + state.data
        warnLabel.style.display = "inline"
        console.warn("WARNING: Input bukan angka:", state.data)
    } else if (array.includes(state.data) || regex.test(state.data)) {
        warnLabel.style.display = "none"
    }
})

window.addEventListener("load", () => {
    doReset()
})
