var pizza= ["pepperoni", "pineapple", "sausage", "cheese"];
// var queryURL= "https://api.giphy.com/v1/gifs/search";


$(document).ready(function() {
    // make buttons and add to page
    function renderButtons() {
      $("#buttons-view").empty();
  
      for (var i = 0; i < pizza.length; i++) {
        var a = $("<button>");
        a.addClass("btn btn-danger buttons");
        a.attr("data-name", pizza[i]);
        a.text(pizza[i]);
        $("#buttons-view").append(a);
      }
     
    };
    renderButtons();
    $("#add-pizza").on('click', function(event){
      event.preventDefault();
      console.log("pizza button clicked");
      
      var addPizza = $("#pizza-input").val().trim();
      pizza.push(addPizza);
      console.log(addPizza);
      console.log(pizza);
      renderButtons();
    });
    $(document).on("click", ".buttons", function() {
      $("#images").empty();
      // $(".buttons").removeClass("active");
      // $(this).addClass("active");
  
      var word = $(this).attr("data-name");
      
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + word + "&api_key=tQOzcKR23rsAFUi1ZeJDswsl3Z6gUReY";
      console.log(word);
      console.log(queryURL);
    }) 
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          var results = response.data;
          console.log(results);
          for (var i = 0; i < results.length; i++) {
            var pizzaDiv = $("<div>");
  
            var rating = results[i].rating;
  
            var p = $("<p>").text("Rating: " + rating);

            var pizzaImage = $("#pizza-image");
    //
    // var animated = results[i].images.fixed_height.url;
            var still = results[i].images.fixed_height_still.url;
  
    //         
            pizzaImage.attr("src", still);
            pizzaImage.attr("data-still", still);
    //         pizzaImage.attr("data-animate", animated);
            pizzaImage.attr("data-state", "still");
            pizzaImage.addClass("pizza-image");
  
  
            pizzaDiv.append(p);
            pizzaDiv.append(pizzaImage);
  
            $("#pizzas").append(pizzaDiv);
          }
        });
    });
  
    $(document).on("click", "#pizza-image", function() {
  
    //   var state = $(this).attr("data-state");
  
    //   if (state === "still") {
    //     $(this).attr("src", $(this).attr("data-animate"));
    //     $(this).attr("data-state", "animate");
    //   }
    //   else {
    //     $(this).attr("src", $(this).attr("data-still"));
    //     $(this).attr("data-state", "still");
    //   }
    });
  
    // $("#add-pizza").on("click", function(event) {
    //   event.preventDefault();
    //   var newpizza = $("input").eq(0).val();
  
    //   if (newpizza.length > 2) {
    //     pizza.push(newpizza);
    //   }
  
    //   // populateButtons(pizzas, "pizza-button", "#pizza-buttons");
  
//     });
// });
    
  
  