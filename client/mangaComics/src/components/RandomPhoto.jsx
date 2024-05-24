import React, { useState, useEffect } from "react";

const RandomPhoto = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    const photos = importAll(
      require.context("../assets/fondos", false, /\.(png|jpe?g|svg)$/)
    );

    const randomIndex = Math.floor(Math.random() * photos.length);
    setSelectedPhoto(photos[randomIndex]);
  }, []);

  return <>{selectedPhoto && <img src={selectedPhoto} alt="Random Photo" />}</>;
};

export default RandomPhoto;
