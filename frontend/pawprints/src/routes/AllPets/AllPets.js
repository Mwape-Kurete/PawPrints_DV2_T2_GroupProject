import React, { useState, useEffect } from "react";
 import axios from "axios";
 import "./AllPets.css";
 import NavBar from "../../components/Navbar/Navbar";
 import PetCard from "../../components/PetCard/PetCard"; // Import the PetCard component

 const AllPets = () => {
   const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get("/api/petlisting");
        setPets(response.data
            .filter((pet) => pet.approved)
            .filter((pet) => pet.adoptedStatus === false));
        setFilteredPets(response.data
            .filter((pet) => pet.approved)
            .filter((pet) => pet.adoptedStatus === false)); // Initially set filtered pets to all pets
      } catch (error) {
        console.error("Error fetching pets", error);
      }
    };
    fetchPets();
  }, []);
  // Function to filter pets based on animal type
  const handleFilter = (animalType) => {
    if (animalType === "All") {
      setFilteredPets(pets); // Show all pets
    } else {
      const filtered = pets.filter(
        (pet) => pet.animalType.toLowerCase() === animalType.toLowerCase()
      );
      setFilteredPets(filtered);
    }
  };

   return (
     <div>
       <NavBar /> {/* Include the Navbar component */}
       <div className="all-pets">
         <h2>Pawfect Matches</h2>
         <div className="filter-buttons">
           {/* Filter buttons */}
           <button onClick={() => handleFilter("All")}>All</button>
          <button onClick={() => handleFilter("Dog")}>Dogs</button>
          <button onClick={() => handleFilter("Cat")}>Cats</button>
          <button onClick={() => handleFilter("Rabbit")}>Rabbits</button>
          <button onClick={() => handleFilter("Bird")}>Birds</button>
          <button onClick={() => handleFilter("Reptile")}>Reptiles</button>
          <button onClick={() => handleFilter("Other")}>Other</button>
        </div>
         <div className="pet-cards">
           {/* Display filtered pets */}
           {filteredPets.map((pet) => (
             <PetCard
               key={pet._id}
               pet={pet}
             /> /* Render PetCard component for each pet */
           ))}
         </div>
       </div>
    </div>
  );
};
export default AllPets;