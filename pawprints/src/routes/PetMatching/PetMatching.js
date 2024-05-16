import React, { useState } from "react";
import "../../components/ImageGallery/Gallery.css";

const petsData = {
  Dog: [
    { breed: "Labrador Retriever", count: 10 },
    { breed: "Huskies", count: 5 },
    { breed: "German Shepherd", count: 20 },
    { breed: "Bull Dog", count: 1 },
  ],
  Cat: [],
  Rabbit: [],
  Bird: [],
};

const PetMatching = () => {
  const [selectedPet, setSelectedPet] = useState("Select");
  const [searchTerm, setSearchTerm] = useState("");

  const handlePetChange = (e) => {
    setSelectedPet(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getFilteredPets = (pets) => {
    return pets.filter((pet) =>
      pet.breed.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredDogs = getFilteredPets(petsData.Dog);
  const filteredCats = getFilteredPets(petsData.Cat);
  const filteredRabbits = getFilteredPets(petsData.Rabbit);
  const filteredBirds = getFilteredPets(petsData.Bird);

  const getPlaceholders = (pets, type) => {
    const placeholders = [...pets];
    while (placeholders.length < 4) {
      placeholders.push({ breed: `${type} Placeholder`, count: 0 });
    }
    return placeholders;
  };

  const dogs = getPlaceholders(filteredDogs, "Dog");
  const cats = getPlaceholders(filteredCats, "Cat");
  const rabbits = getPlaceholders(filteredRabbits, "Rabbit");
  const birds = getPlaceholders(filteredBirds, "Bird");

  const displayPets = (petArray) => {
    return petArray.map((pet, index) => (
      <div key={index} className="image">
        <div className="image-link">
          <div className="icon-name">
            {pet.breed} x {pet.count}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="pet-matching-container">
      <div className="filter-controls">
        <select value={selectedPet} onChange={handlePetChange}>
          <option value="Select">Select</option>
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
          <option value="Rabbit">Rabbits</option>
          <option value="Bird">Birds</option>
        </select>
        <input
          type="text"
          placeholder="Search for a breed..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {selectedPet === "Dog" || selectedPet === "Select" ? (
        <div className="singleLineImageContainer">{displayPets(dogs)}</div>
      ) : null}

      {selectedPet === "Cat" || selectedPet === "Select" ? (
        <div className="singleLineImageContainer">{displayPets(cats)}</div>
      ) : null}

      {selectedPet === "Rabbit" || selectedPet === "Select" ? (
        <div className="singleLineImageContainer">{displayPets(rabbits)}</div>
      ) : null}

      {selectedPet === "Bird" || selectedPet === "Select" ? (
        <div className="singleLineImageContainer">{displayPets(birds)}</div>
      ) : null}
    </div>
  );
};

export default PetMatching;
