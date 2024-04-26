// Sample car data
const carData = {
    name: "Tesla Model S",
    model: "2024",
    images: [
      "car1.jpg",
      "car2.jpg",
      "car3.jpg"
    ],
    motorCar: "Electric",
    carType: "Sedan"
  };
  
  // Update HTML content with car data
  document.getElementById("carName").innerText = carData.name;
  document.getElementById("carModel").innerText = "Model: " + carData.model;
  document.getElementById("motorCar").innerText = "Motor: " + carData.motorCar;
  document.getElementById("carType").innerText = "Type: " + carData.carType;
  
  // Update carousel images
  const carousel = document.getElementById("carousel");
  
  carData.images.forEach(image => {
    const img = document.createElement("img");
    img.src = image;
    img.alt = carData.name;
    img.className = "carousel-img";
    carousel.appendChild(img);
  });
  