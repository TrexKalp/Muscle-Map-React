import React, { useEffect, useState } from "react";
import axios from "axios";

interface Muscle {
  id: number;
  name: string;
  description: string;
  exercises: string[];
}

const ExerciseComponent: React.FC = () => {
  const [muscles, setMuscles] = useState<Muscle[]>([]);

  useEffect(() => {
    const apiKey = "c21c76fa2fmshca97611323aace0p1c3a66jsn9faa413d8ab5"; // Replace with your actual API key from RapidAPI
    const apiUrl = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList"; // Replace with the API endpoint URL

    axios
      .get<Muscle[]>(apiUrl, {
        headers: {
          "X-RapidAPI-Key": apiKey,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Process the data received from the API
        setMuscles(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {muscles.map((muscle) => (
        <div key={muscle.id}>
          <h3>{muscle.name}</h3>
          <p>Description: {muscle.description}</p>
          <p>Exercises: {muscle.exercises.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default ExerciseComponent;
