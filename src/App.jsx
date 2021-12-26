import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  function removeTour(tourID) {
    setTours((oldState) => {
      return oldState.filter((item) => {
        return item.id !== tourID;
      });
    });
    // add logic to update state for tour removal
  }

  async function fetchTours() {
    // set loading to true here
    setLoading(true);

    const data = await fetch(url);
    const jsonData = await data.json();
    setTours(jsonData);

    setLoading(false);
    // set loading to false here
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </div>
  );
}

export default App;
