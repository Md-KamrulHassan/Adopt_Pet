// load category button

const loadCatagory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const result = await response.json();

  displayCatagory(result.categories);
};

// display catagory button
// {
//     "id": 1,
//     "category": "Cat",
//     "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
// }

const displayCatagory = (datas) => {
  const section = document.getElementById("button_section");

  datas.forEach((data) => {
    const { category, category_icon, id } = data;

    const btn = document.createElement("Button");
    btn.id = `btn-${id}`;
    btn.onclick = () => loadPetsByCatagory(category, id);
    btn.classList =
      "inline-flex items-center gap-3 px-14 py-2  border-gray-200 border rounded-lg catagory_button";

    btn.innerHTML = `
    
    <img class="w-14 h-14  " src="${category_icon}"   />
    <span class="font-extrabold text-gray-500 text-xl"> ${category}</span>
    
    `;

    section.appendChild(btn);
  });
};

// load pets and there details
let allPets = [];
const loadAllpets = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/pets"
  );
  const result = await response.json();

  allPets = result.pets;

  displayPets(allPets);
};

// remove active button
const removeActiveButton = () => {
  const buttons = document.getElementsByClassName("catagory_button");

  for (const btn of buttons) {
    btn.classList.remove("bg-[#0E7A81]", "bg-opacity-15", "rounded-[50px]");
  }

  console.log(buttons);
};
// load pets by catagory button and show active button
const loadPetsByCatagory = (catagoryName, id) => {
  console.log(catagoryName, id);
  // show active button
  removeActiveButton();
  const btn = document.getElementById(`btn-${id}`);
  btn.classList.add("bg-[#0E7A81]", "bg-opacity-15", "rounded-[50px]");

  console.log(btn);

  // show spinner
  document.getElementById("pets_section").style.display = "none";

  document.getElementById("spinner_section").style.display = "flex";

  setTimeout(async () => {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/peddy/category/${catagoryName}`
    );
    const result = await response.json();
    allPets = result.data;
    displayPets(allPets);
  }, 2000);
};

// {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
// }

const displayPets = (datas) => {
  // hide spinner and show pet section when clicked form button
  document.getElementById("spinner_section").style.display = "none";
  document.getElementById("pets_section").style.display = "flex";

  const showPets = document.getElementById("pet-details");

  showPets.innerHTML = "";

  if (!datas.length) {
    showPets.classList.remove("grid");

    showPets.innerHTML = `

    <div class="hero bg-base-200 min-h-[80vh]">
  <div class="hero-content text-center">
    <div class="w-11/12">
    <img class="mx-auto" src= "image/error.webp"   />  
      <h1 class="text-5xl font-bold">No Information Available</h1>
      <p class="py-6">
       It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that it has a.
      </p>
      
    </div>
  </div>
</div>
    
   
    
    `;
  } else {
    datas.forEach((data) => {
      showPets.classList.add("grid");
      const div = document.createElement("div");

      div.classList = "card card-compact border border-gray-200 p-5  ";

      div.innerHTML = `
   
  
  <figure>
    <img
    class=" rounded-md"
      src= ${data.image}
      alt="Shoes" />
  </figure>
 <div>
 <div class="py-6 space-y-2 border-b border-gray-200 "> 
 <h5 class="font-bold text-xl"> ${data.pet_name} </h5>
 <p class="flex gap-2 text-gray-500"> <img src="image/frame.png" />Breed: ${data.breed} </p>
  <p class="flex gap-2 text-gray-500"> <img src="image/Frame (1).png" />Birth: ${data.date_of_birth} </p>
   <p class="flex gap-2 text-gray-500"> <img src="image/Frame (2).png" />Gender: ${data.gender} </p>
    <p class="flex gap-2 text-gray-500"> <img src="image/Frame (3).png" />Price: ${data.price} </p>

 
 </div>
 <div class="flex gap-3 justify-between mt-2 flex-wrap"> 
 <button onclick="likePets('${data.image}')" class="px-4 py-2 border border-[0E7A81] border-opacity-15 rounded-lg"> <img class="w-6"  src="image/like.png" /> </button>

<button id='adopt_btn_${data.petId}' onclick = "countDown(${data.petId})" class= "font-bold text-lg px-4 py-2 text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white border border-[0E7A81] border-opacity-15 rounded-lg "> Adopt </button>
<button class= "font-bold text-lg px-4 py-2 text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white border border-[0E7A81] border-opacity-15 rounded-lg " onclick="showDetails(${data.petId})"> Details </button>

 </div>
 </div>
  </div>

   `;
      showPets.appendChild(div);
    });
  }
};

loadCatagory();
loadAllpets();
