// import React, { useState, useEffect } from "react";
//
function RecipeCard({ recipe }) {
  // const [bgColor, setBgColor] = useState("white");

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = require(`../assets/images_recettes/${recipe.name}.jpg`);
  //   img.onload = () => {
  //     const canvas = document.createElement("canvas");
  //     canvas.width = img.width;
  //     canvas.height = img.height;
  //     const ctx = canvas.getContext("2d");
  //     ctx.drawImage(img, 0, 0);
  //     const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  //     const colorSum = data.reduce((acc, cur) => acc + cur, 0);
  //     const avgColor = Math.floor(colorSum / (data.length / 4));
  //     setBgColor(`rgba(${avgColor}, ${avgColor}, ${avgColor}, 0.5)`);/
  //   };
  // }, [recipe.name]);
  // console.log(`Calculating color for recipe: ${recipe.name}`);
  // console.log(`Calculated color: ${bgColor}`);
  // key={bgColor} style={{ backgroundColor: bgColor }}
  return (
    <div className="Recipe">
      <div className="divRecip divRecipe1">
        <img
          className="imgRecipe"
          src={require(`../assets/images_recettes/${recipe.name}.jpg`)}
          alt="imgRecipe"
        />
        <p>{recipe.name}</p>
      </div>

      <div className="divRecipe divRecipe2">
        <p>{recipe.editor}</p>
        <p>{recipe.date_edited}</p>
      </div>

      <div className="divRecipe divRecipe3"></div>

      <div className="divRecipe divRecipe4">
        <p>ok</p>
        <p>ok</p>
      </div>
    </div>
  );
}

export default RecipeCard;
