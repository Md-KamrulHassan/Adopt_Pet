// {
//     "petId": 4,
//     "breed": "Holland Lop",
//     "category": "Rabbit",
//     "date_of_birth": "2023-06-30",
//     "price": 200,
//     "image": "https://i.ibb.co.com/4g3Jrjf/pet-4.jpg",
//     "gender": "Female",
//     "pet_details": "This adorable female Holland Lop rabbit, born on June 30, 2023, is known for her calm and gentle nature. She thrives in quiet environments and enjoys being handled with care. Priced at $200, she is an ideal pet for those looking for a low-maintenance, friendly rabbit. Note that she is not vaccinated.",
//     "vaccinated_status": "Not",
//     "pet_name": "Nibbles"
// }

const showDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/peddy/pet/${id}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data.petData);
  const {
    breed,
    category,
    date_of_birth,
    price,
    image,
    gender,
    pet_details,
    vaccinated_status,
    pet_name,
  } = data.petData;

  const modalDiv = document.getElementById("modal-section");

  modalDiv.innerHTML = `
  
  

<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
     
  <figure>
    <img
    class=" rounded-md w-full h-52"
      src= ${image}
      alt="Shoes" />
  </figure>
 <div>
 <div class="py-6 space-y-2 border-b border-gray-200 "> 
 <h5 class="font-bold text-xl"> ${pet_name} </h5>

 <div class="grid grid-cols-2"> 
 
  <p class="flex gap-2 text-gray-500"> <img src="image/frame.png" />Breed: ${breed} </p>
  <p class="flex gap-2 text-gray-500"> <img src="image/Frame (1).png" />Birth: ${date_of_birth} </p>
   <p class="flex gap-2 text-gray-500"> <img src="image/Frame (2).png" />Gender: ${gender} </p>
    <p class="flex gap-2 text-gray-500"> <img src="image/Frame (3).png" />Price: ${price} </p>
    <p class="flex gap-2 text-gray-500"> <img src="image/Frame (2).png" />Vaccinated Status: ${vaccinated_status} </p>
 
 </div>

 
 </div>

 <div class="mt-3"> 
 <h6 class="font-semibold mb-3"> Details Information </h6>

<p class="text-gray-500">${pet_details} </p>


<form class="mt-3" method="dialog">
        
        <button class="btn bg-[#0E7A81] bg-opacity-15 w-full text-[#0E7A81]">Cancel</button>
      </form>
 
 </div>
  </div>
</dialog>
  
  `;

  my_modal_5.showModal();
};
