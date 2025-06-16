function sortByPrice(allPets) {
  console.log(allPets);
  const sortedPets = allPets.toSorted(function (a, b) {
    return b.price - a.price;
  });

  displayPets(sortedPets);
}
