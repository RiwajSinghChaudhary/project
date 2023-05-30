function loadInventory() {
  const inventoryDiv = document.getElementById('inventory');

  fetch('inventory.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(jet => {
        const jetInfo = document.createElement('div');
        jetInfo.classList.add('jet-info');

        jetInfo.innerHTML = `
          <h3>${jet.make} ${jet.model}</h3>
          <p>Year: ${jet.year}</p>
          <p>Price: ${jet.price}</p>
          <button onclick="contactSeller('${jet.make}', '${jet.model}')">Contact Seller</button>
        `;

        inventoryDiv.appendChild(jetInfo);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function contactSeller(make, model) {
  const contactForm = document.getElementById('contact-form');
  contactForm.classList.add('show');
  contactForm.querySelector('#jet-make').value = make;
  contactForm.querySelector('#jet-model').value = model;
}

function closeContactForm() {
  const contactForm = document.getElementById('contact-form');
  contactForm.classList.remove('show');
}

loadInventory();
