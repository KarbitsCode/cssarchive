const bbInput = document.getElementById("bb-input")
const umInput = document.getElementById("um-input")
const tbInput = document.getElementById("tb-input")
const inputText = new Array(bbInput, umInput, tbInput)
const resultText = document.getElementById("result-output")
const formulaText = document.getElementById("formula-output")
const explanationText = document.getElementById("explanation-text")
const warnLabel = document.getElementById("warn-label")
const calcButton = document.getElementById("calc-button")
const resetButton = document.getElementById("reset-button")

const doConvert = () => {
    doReset(all = false)
    const kl = document.querySelector("input[name='jenis-kelamin']:checked")
    const bb = parseInt(bbInput.value)
    const tb = parseInt(tbInput.value)
    const um = parseInt(umInput.value)
    if (isFinite(bb) && isFinite(tb) && isFinite(um) && kl !== null) {
        if (um >= 18) {
            const result = (bb / ((tb)/100)**2).toFixed(1)
            let resultFormula
            if (isFinite(result)) {
                resultFormula = `BMI = (${bb}) / (${tb}/100)^2 = ${result} kg/m^2`
                console.log("INFO:", resultFormula)
                if (window.MathJax && typeof window.MathJax.typeset === "function") {
                    resultFormula = `\\[ \\text{BMI} = \\frac{${bb}}{\\left( \\frac{${tb}}{100} \\right)^2} = ${result}\\ \\mathrm{kg/m^2} \\]`
                    requestAnimationFrame(() => (MathJax.typeset()))
                }
                formulaText.parentElement.firstElementChild.textContent = "Rumus Kalkulasi:"
                formulaText.textContent = resultFormula
                formulaText.style.display = "block"
                let resultStatus
                if (result < 18.5) {
                    resultStatus = "Kekurangan berat badan"
                } else if (result > 18.4 && result < 25.0) {
                    resultStatus = "Berat badan ideal"
                } else if (result > 24.9 && result < 30.0) {
                    resultStatus = "Kelebihan berat badan"
                } else if (result > 29.9) {
                    resultStatus = "Obesitas"
                }
                resultText.parentElement.firstElementChild.textContent = `Status Berat Badan${kl ? ` untuk ${kl.value}` : ""}:`
                resultText.textContent = resultStatus
                resultText.style.display = "block"
            } else {
                console.error("ERROR: Input bukan angka/salah")
                explanationText.textContent = "Error: Input bukan angka/salah"
                explanationText.style.display = "block"
            }
        } else {
            console.error("ERROR: Kalkulator BMI ini hanya tersedia untuk standar orang dewasa (18 tahun ke atas)")
            explanationText.textContent = "Error: Kalkulator BMI ini hanya tersedia untuk standar orang dewasa (18 tahun ke atas)"
            explanationText.style.display = "block"
        }
    } else {
        console.error("ERROR: Input tidak lengkap")
        explanationText.textContent = "Error: Input tidak lengkap"
        explanationText.style.display = "block"
    }
}

const doReset = (all = true) => {
    resultText.parentElement.firstElementChild.textContent = ""
    formulaText.parentElement.firstElementChild.textContent = ""
    resultText.textContent = ""
    formulaText.textContent = ""
    explanationText.textContent = ""
    warnLabel.style.display = "none"
    resultText.style.display = "none"
    formulaText.style.display = "none"
    explanationText.style.display = "none"
    if (all) {
        inputText.forEach(input => input.value = "")
        console.log("INFO: Text area dibersihkan")
    }
}

calcButton.addEventListener("click", () => doConvert())
resetButton.addEventListener("click", () => doReset())

inputText.forEach((input) => {
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault()
            doConvert()
        }
    })
})

inputText.forEach((input) => {
    input.addEventListener("input", (state) => {
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
})

window.addEventListener("load", () => {
    document.head.appendChild(Object.assign(document.createElement("script"), { src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" }))
    doReset()
})
