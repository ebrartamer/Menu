
  const btnContainer = document.querySelector('.btn-container')
  const sectionCenter = document.querySelector('.section-center')
  const allBtn = document.querySelector('#all')
  const breakfastBtn = document.querySelector('#breakfast')
  const lunchBtn = document.querySelector('#lunch')
  const shakesBtn = document.querySelector('#shakes')

/*
Bir dizi içindeki öğeleri map() fonksiyonu ile işleme tabi tutarak yeni bir dizi oluşturduktan sonra, join() fonksiyonu ile bu yeni dizideki öğeleri bir araya getirip, istenen çıktıyı oluşturabiliriz.
*/ 


document.addEventListener('DOMContentLoaded',function(){
  fetch("info.json")
  .then(response => response.json())
  .then(data =>{
    const DOMMenuItems = data.map(item =>{
      return ` 
      <article class="menu-item">
       <img src=${item.img} class="photo"  alt=${item.title}>
       <div class="item-info">
           <header>
           <h4>${item.title}</h4>
           <h4 class="price">$${item.price}</h4>
       </header>
       <p class="item-text">${item.desc}</p>
       </div>
     </article>`
    }).join('')
    sectionCenter.innerHTML=DOMMenuItems
  }
)
})

allBtn.addEventListener('click',allFetch)
function allFetch(){
  fetch("info.json")
.then(response => response.json()) //dizi haline geldi
.then(data => {
  const menuItems = data.map(item => { //map -> her bir menü ögesi için bir dizi ögesi oluşturur
    return ` 
     <article class="menu-item">
      <img src=${item.img} class="photo"  alt=${item.title}>
      <div class="item-info">
          <header>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
      </div>
    </article>`
  }).join('') // join -> dizideki tüm ögeleri birleştirir ve sonuç olarak uzun bir string dizi elde edilir
  //console.log(menuItems)

  sectionCenter.innerHTML=menuItems
})

}

breakfastBtn.addEventListener('click',breakfastFetch) 
function breakfastFetch(){
  fetch("info.json")
  .then(response => response.json())
  .then(data => {
    const breakfastItems = data.map(item => {
      if(item.category === "breakfast" ){
        return ` 
        <article class="menu-item">
         <img src=${item.img} class="photo"  alt=${item.title}>
         <div class="item-info">
             <header>
             <h4>${item.title}</h4>
             <h4 class="price">$${item.price}</h4>
         </header>
         <p class="item-text">${item.desc}</p>
         </div>
       </article>`
      
      }
    }).join('')
    sectionCenter.innerHTML=breakfastItems
  })
}

lunchBtn.addEventListener('click',lunchFetch)
function lunchFetch(){
  fetch("info.json")
  .then(response => response.json())
  .then(data => {
    const lunchItems = data.map(item => {

      if(item.category === "lunch"){
      return ` 
      <article class="menu-item">
       <img src=${item.img} class="photo"  alt=${item.title}>
       <div class="item-info">
           <header>
           <h4>${item.title}</h4>
           <h4 class="price">$${item.price}</h4>
       </header>
       <p class="item-text">${item.desc}</p>
       </div>
     </article>`
      }
    }).join('')
    sectionCenter.innerHTML=lunchItems 
  })
}

shakesBtn.addEventListener('click',shakesFetch)
function shakesFetch(){
  fetch("info.json")
  .then(response => response.json())
  .then(data => {
    const shakesItems = data.map(item => {
      if(item.category === 'shakes'){
        return ` 
        <article class="menu-item">
         <img src=${item.img} class="photo"  alt=${item.title}>
         <div class="item-info">
             <header>
             <h4>${item.title}</h4>
             <h4 class="price">$${item.price}</h4>
         </header>
         <p class="item-text">${item.desc}</p>
         </div>
       </article>`

      }
    }).join('')
    sectionCenter.innerHTML = shakesItems
  })
}