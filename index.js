import {guitars} from './guitars.js'

const gallery = document.getElementById('guitarGallery')
const searchBtn = document.getElementById('searchBtn')
const searchInput = document.getElementById('searchInput')

function displayGears(items) {
    if (!gallery) return
    gallery.innerHTML = items.map(guitar => `
    <div class="card">
        <span class="category-badge">${guitar.category}</span>
        <img src="${guitar.image}" alt="${guitar.name}">
        <div class="card-info">
            <h3>${guitar.name}<h3>
            <p class="year-tag">${guitar.year}</p>
            <p>${guitar.description}</p>
        </div> 
    </div>    
    `).join('')
}
displayGears(guitars)

searchBtn.addEventListener('click', () => {
  
    const value = searchInput.value.toLowerCase()
    
    const results = guitars.filter(guitar =>{
  
        const nameMatch = guitar.name.toLowerCase().includes(value)
        const descMatch =  guitar.description.toLowerCase().includes(value) 
        const catMatch = guitar.category.toLowerCase().includes(value) 
        const yearMatch = guitar.year.toString().includes(value)
        return nameMatch || descMatch || catMatch || yearMatch
    })
    
    if (results.length ===0) {
        gallery.innerHTML = "<p>We Dont Have That Guitar Yet...</p>"
    } else {
        displayGears(results);
    }    
})
const resetBtn = document.getElementById('resetBtn')

resetBtn.addEventListener('click', () => {
    searchInput.value = ''
    displayGears(guitars)
} )
  searchInput.addEventListener('keypress', (e)=> {
        if (e.key ==="Enter"){
            searchBtn.click()
        }
    })