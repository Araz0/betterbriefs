import React from "react";
import { FavoritesEntry } from "./FavoritesEntry";
import "./Favorites.css";

export const Favorites = ({ favorites, onFavoritesChange }) => {
  function removeFavorite(seed) {
    let data = favorites.filter((entry) => entry.seed !== seed);
    localStorage.setItem("brief", JSON.stringify(data));
    onFavoritesChange(data);
  }

  return (
    <div className="main-container">
      <h1 className="headline-text favorites-headline">
        <span>Favorites List</span>
      </h1>
      {favorites.length > 0 ? (
        favorites.map((brief) => (
          <FavoritesEntry entry={brief} onRemove={removeFavorite} />
        ))
      ) : (
        <p className="empty-list-text">No entries here yet.</p>
      )}
    </div>
  );
};
