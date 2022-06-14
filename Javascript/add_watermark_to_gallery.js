/*
* Adds a watermark to the gallery text. 
* https://app.asana.com/0/1201388388286192/1202430488759218
*/

window.addEventListener("load", (event) => {
$("#g4 div.text").append(
    "<div class='watermark-container'>" + 
    "<img class='watermark' src='https://5il.co/1c355' alt='Rocket Logo'></img>" +
    "</div>"
)
});


/*
* Styles the gallery watermark. 
* https://app.asana.com/0/1201388388286192/1202430488759218
*/
.watermark-container {
    display: block;
    width: 96px;
    margin: 32px auto 0 auto;
  }
  
  .watermark {
    width: 100%;
    height: auto;
  }