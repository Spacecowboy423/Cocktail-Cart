/** @format */

const cocktailIngredients = (index) => {
  // console.log("Cocktail: " + cocktails[index].name + " Ingredients: " + cocktails[index].ingredients);

  // Find the card element and set its HTML to the ingredients of the cocktail // use of eq to find the index of the element
  // Use of .html to use bold text
  $(".card").eq(index).html("<b>Ingredients:</b> " + cocktails[index].ingredients);
};

const showInformation = () => {
  // Call the setup function to create the cocktail boxes
  setup();
  // Display the ingredients of each cocktail
  jQuery.each($(".box"), cocktailIngredients);

  // Event handler for element getting clicked event // use of anonymous function
  $(".box").on("click", function () {
    // Find the box clicked using the index method
    let cocktailIndex = $(".box").index(this);
    // console.log("Cocktail: " + cocktails[cocktailIndex].name);

    // Find the paragraph of class p and tag .card to set the calories
    $(this).find("p.card").text("Only " + cocktails[cocktailIndex].calories + " calories");
  });

  // Event handler for the element getting moused over // use of anonymous function
  $(".box").on("mouseover", function () {
    let cocktailIndex = $(".box").index(this);
    // console.log("Cocktail: " + cocktails[cocktailIndex].name);

    // Find the paragraph of class p and tag .card to set the recipe // use of html to use bold text
    $(this).find("p.card").html(
      "<b>Recipe:</b> " + cocktails[cocktailIndex].recipe
    );
  });

  // Event handler for the element getting moused out // use of anonymous function
  $(".box").on("mouseout", function () {
    let cocktailIndex = $(".box").index(this);
    // console.log("Cocktail: " + cocktails[cocktailIndex].name);

    // Find the paragraph of class p and tag .card to set the ingredients
    $(this).find("p.card").text(cocktailIngredients(cocktailIndex));
  });
};

// Cocktail Cards Setup Function
const setup = () => {
  // Assing the wrapper element to wrapperRef
  let wrapperRef = $('.wrapper');

  // Run through cocktails and generate HTML for each cocktail
  cocktails.forEach((cocktail) => {
    let boxMarkup = `
          <div class="box">
          <h3 style="text-align: center;">${cocktail.name}</h3>
          <img src="${cocktail.image}"/>
          <p class="card"></p>
        </div>`;
    wrapperRef.append(boxMarkup);
  });
};

// Document ready function to call showInformation when the document is ready
$(document).ready(showInformation);