document.addEventListener("DOMContentLoaded", function() {
  fetch("data.json")
  .then((response) => response.json())
  .then((items) => {
    console.log(items); // 데이터 로그로 확인
    const foodData = items;

    function filterFood(genre) {
      const gridContainer = document.querySelector('.grid-container');
      gridContainer.innerHTML = '';
  
      foodData.find(item => item.genre === genre).food.forEach(foodItem => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
  
        gridItem.innerHTML = `
          <img src="${foodItem.image}" alt="${foodItem.name}">
          <div class="caption">
            <p><strong>Name:</strong> ${foodItem.name}</p>
            <p><strong>Shop:</strong> ${foodItem.shop}</p>
            <p><strong>Location:</strong> ${foodItem.location}</p>
            <p><strong>Price:</strong> ${foodItem.price}</p>
          </div>
        `;
  
        gridContainer.appendChild(gridItem);
      });
    }
  
    const filterButtons = document.querySelectorAll('.filter a');
    filterButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        const genre = this.dataset.genre;
        filterFood(genre);
      });
    });
  });
})