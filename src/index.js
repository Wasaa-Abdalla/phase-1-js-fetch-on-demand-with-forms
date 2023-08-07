const init = () => {
  document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    const input = document.querySelector('input#searchByID')
    console.log(input.value)

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(res=>res.json())
    .then(data=>{
        const title = document.querySelector('h4')
        const summary = document.querySelector('p')
        title.innerText = data.title
        summary.innerText = data.summary
    })
  })
}

document.addEventListener('DOMContentLoaded', init);