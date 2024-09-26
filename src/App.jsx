// App.jsx

import { useState, useRef } from "react";
import logo from "./assets/logo.png";
import Places from "./components/Places";
import Modal from "./components/Modal.jsx";
import { AVAILABLE_PLACES } from "./data.js";

function App() {
  const modal = useRef();
  const [pickedPlaces, setPickedPlaces] = useState([]);
  const [placeToDelete, setPlaceToDelete] = useState(null); // State to store the place to be deleted

  // Function to handle the addition of a place to the picked list
  function handlePickedPlace(id) {
    setPickedPlaces((prevPlaces) => {
      if (prevPlaces.some((place) => place.id === id)) {
        return prevPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPlaces];
    });
  }

  // Function to trigger the modal and set the place to delete
  function handleOpenModal(id) {
    setPlaceToDelete(id); // Set the id of the place the user wants to delete
    modal.current.open(); // Open the modal
  }

  // Function to delete the place
  function handleDeletePlace() {
    setPickedPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== placeToDelete)
    );
    modal.current.close(); // Close the modal after deletion
  }

  return (
    <>
      <header className="h-screen max-h-fit flex flex-col justify-center items-center text-center ">
        <img src={logo} alt="Logo" className="max-w-28 m-6" />
        <h1 className="text-4xl font-bold mb-2 text-stone-50 uppercase tracking-wide">
          D e s t i n a t i o n s
        </h1>
        <p className="text-lg max-w-md text-stone-400 leading-relaxed font-light opacity-90 ">
          Create a personal collection of places that you would like to visit or
          have visited already.
        </p>
      </header>
      <main>
        <div className="h-screen flex flex-col items-center mt-10 text-white">
          {/* First Places Component */}
          <div className="m-10 w-full max-w-6xl mx-auto px-4 border border-stone-500 rounded-lg">
            <Places
              places={pickedPlaces}
              title="I'd like to visit ..."
              fallbackText="Select the places you would like to visit"
              onSelectedPlace={handleOpenModal} // Pass the deletion handler
            />
          </div>

          {/* Second Places Component */}
          <div className="m-10 w-full max-w-6xl mx-auto px-4 border border-stone-500 rounded-lg">
            <Places
              title="Available places"
              places={AVAILABLE_PLACES}
              onSelectedPlace={handlePickedPlace}
            />
          </div>
        </div>
      </main>

      {/* Modal for delete confirmation */}
      <Modal ref={modal} onDeletePlace={handleDeletePlace} />
    </>
  );
}

export default App;
