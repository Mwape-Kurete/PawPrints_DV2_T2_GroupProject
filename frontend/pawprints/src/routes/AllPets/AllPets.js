import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllPets.css";
import NavBar from "../../components/Navbar/Navbar";

const AllPets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get("/api/petlisting");
        setPets(response.data);
      } catch (error) {
        console.error("Error fetching pets", error);
      }
    };
    fetchPets();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="all-pets">
        <h2>All Pets</h2>
        <div className="pet-cards">
          {pets.map((pet) => (
            <div key={pet._id} className="pet-card">
              <h3>{pet.name}</h3>
              <p>Type: {pet.animalType}</p>
              <p>Age: {pet.age}</p>
              <p>Breed: {pet.breed}</p>
              <p>Sex: {pet.sex}</p>
              <p>Colour: {pet.colour}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPets;
