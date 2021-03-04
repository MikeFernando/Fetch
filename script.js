let url = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL'

const converter = () => {
    let input = document.getElementById('valor')
    let valor = input.value
    console.log(valor)

    fetch(url)
        .then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
            let rate = data.rates.BRL

            let resultado = `${valor} dolares = ${rate * valor} em reais`
            document.getElementById('resultado').innerHTML = resultado
        })
}