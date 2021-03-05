function formatSearch(plantObject) {
  const newPlantSearch = plantObject.data.map((plantItem) => {
    return {
      name: plantItem.common_name,
      scientific: plantItem.scientific_name,
      family: plantItem.family_common_name,
      image: plantItem.image_url,
      year: plantItem.year,
      plant_id: plantItem.id
    };
  });
  const finalPlantSearch = newPlantSearch;
  return finalPlantSearch;
}

module.exports = {
  formatSearch
};
