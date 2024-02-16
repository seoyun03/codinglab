var btn = document.querySelector('.toggle-container')

btn.addEventListener('click',(e) => {
    console.log('e',e)
    
    btn.classList.toggle('is-active')
})

