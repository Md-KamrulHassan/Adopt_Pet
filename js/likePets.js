const likePets = (thumbnail) => {
  const petsDiv = document.getElementById("like_pets");
  const left = document.getElementById("pet-details");

  petsDiv.style.height = `${left.offsetHeight}px`;

  const div = document.createElement("div");

  div.innerHTML = `
  <img class="rounded-2xl w-32 h-32 object-cover" src= ${thumbnail}  />
  
  `;

  petsDiv.appendChild(div);
};
