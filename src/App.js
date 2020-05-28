import React, { useEffect, useState } from "react";
import Recipie from "./Recipie";
import "./styles.css";

export default function App() {
  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const App_Id = "7f42cdd3";
  const App_Key = "7f8040fa0410c15058dafce3e749500b";
  const request = `https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_Key}`;

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(request);
    const data = await response.json();
    setRecipies(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={e => updateSearch(e)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipies.map(recipe => (
        <Recipie
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}
