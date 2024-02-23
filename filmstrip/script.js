let toggles = document.querySelectorAll('.toggle')
let gridItems = document.querySelectorAll('.grid-item')

toggles.forEach((toggle, index) => {
    let toggleType = toggle.dataset.type

    toggle.addEventListener('click', (e) =>{
        gridItems.forEach((item, index) => {
            if (item.dataset.type == toggleType){
                item,classList.remove('hidden')
            } else{
                    item.classList.add('hidden')
                }
            })
        })
    })

toggles.forEach((element, index) => {
    console.log('element', index); 
    console.log('index', index); 
})

natureBtn.addEventListener('click', () => {
    console.log('')
})
