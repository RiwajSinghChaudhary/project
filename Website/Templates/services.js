const servicesContainer = document.getElementById("services-container");

fetch("services.json")
  .then(response => response.json())
  .then(data => {
    data.services.forEach(service => {
      const serviceElement = document.createElement("div");
      serviceElement.classList.add("service");

      serviceElement.innerHTML = `
        <i class="fa ${service.icon}"></i>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      `;

      servicesContainer.appendChild(serviceElement);
    });
  })
  .catch(error => {
    console.error("Error fetching services data:", error);
  });
