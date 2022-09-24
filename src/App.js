import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./components/data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div>
      <Navbar />
      <section className="container-div">
        <h1>Journal Of Places I Have Visited</h1>
        {cards}
      </section>
    </div>
  );
}
