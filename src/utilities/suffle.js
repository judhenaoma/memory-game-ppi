// Autor: Juan David Henao Marín 
// Fecha: 2023-05-21
// Funcionalidad: Función que se encarga de mezclar las cartas
// Descripción: Recibe un arreglo de objetos con las imágenes y las duplica, 
// luego las mezcla y les asigna un id y un estado de selección
// Path: src\utilities\suffle.js

export const shuffleCards = () => {
  const images = [
    { image: "/assets/pandas.png" },
    { image: "/assets/django.png" },
    { image: "/assets/geopandas.png" },
    { image: "/assets/matplotlib.png" },
    { image: "/assets/numpy.png" },
    { image: "/assets/scipy.png" },
    { image: "/assets/tensorflow.png" },
    { image: "/assets/polars.png" },
  ];

  const comparingFunc = () => Math.random() - 0.5;

  return [...images, ...images]
    .sort(comparingFunc)
    .map((img) => ({ ...img, id: Math.random(), selected: false }));
};
