const slides = document.getElementsByClassName("slide");
const nextButton = document.getElementById("next");
const backButton = document.getElementById("prev");
let currentPage = 0;


function showPage(pageIndex) {      
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[pageIndex].style.display="block"

}

showPage(currentPage);

nextButton.addEventListener("click",() => {
  currentPage++;
  if(currentPage > slides.length-1){
    currentPage=0;
  }
  showPage(currentPage);
});

backButton.addEventListener("click", () => {
  currentPage--;
  if(currentPage <0){
    currentPage=slides.length-1;
  }
  showPage(currentPage);
});






