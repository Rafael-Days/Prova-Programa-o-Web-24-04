
function generateInfoSection(name, UF){

    const est = Object.values(name).filter(names => typeof names === 'string')

    const li = document.createElement('li')
    li.id = "ul-estados-label"
    li.textContent = `Estados: ${UF}`

    const linha = document.querySelector('li')
    linha.src = est[0]
    linha.alt = ` ${UF}`

    const section = document.querySelector('#ul-estados')

    section.appendChild(li)
}

async function estadosData(UF){

    try {
        const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}`)
    
        const jsonData = await data.json()
    
        generateInfoSection(jsonData.name, UF)
      } catch (error) {
        console.error(error)
      }
}

function getSearchParams(){

    if (!location.search) {
        return
      }

    const urlSearchParams = new URLSearchParams(location.search)

    const estado = urlSearchParams.get("")

    document.title = estado

    estadosData(estado)
}

document.addEventListener('DOMContentLoaded', function () {
    getSearchParams()
})