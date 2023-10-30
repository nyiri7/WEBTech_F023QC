    const logoDPD = document.getElementById("logos");
    const formPages = document.getElementsByClassName("form_page");
    const nextButton = document.getElementById("next-button");
    const backButton = document.getElementById("back-button");
    const rendelesButton = document.getElementById("rendeles-button");
    const logo = document.getElementById("kep");
    const logo2 = document.getElementById("kep2");
    let currentPage = 0;

    var rangeInputs = document.querySelectorAll("input[type='range']");
    rangeInputs.forEach(function(input) {
        input.addEventListener("change", changeBackground);
    });

    function changeBackground(){
      var red = document.getElementById("red").value;
      var green = document.getElementById("green").value;
      var blue = document.getElementById("blue").value;
      
      var logoshows=  document.getElementsByClassName("logoshow");

      for (var i = 0; i < logoshows.length; i++) {
        logoshows[i].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      }
    }

    
    logoDPD.addEventListener("change",()=>{
      switch (logoDPD.value) {
        case "HardLine":
          logo.src="sticker/Stickers/red-bull-hardline-logo.png";
          logo2.src="sticker/Stickers/red-bull-hardline-logo.png";
          break;
        case "Giant":
          logo.src="sticker/Stickers/giant.png";
          logo2.src="sticker/Stickers/giant.png";
          break;
        case "KTM":
          logo.src="sticker/Stickers/ktm-racing-1-logo-png-transparent.png";
          logo2.src="sticker/Stickers/ktm-racing-1-logo-png-transparent.png";
          break;
        case "RideIt":
          logo.src="sticker/Stickers/logo.png";
          logo2.src="sticker/Stickers/logo.png";
          break;
      }
    });

    function showPage(pageIndex) {      
        progress(pageIndex);
        for (let i = 0; i < formPages.length; i++) {
          formPages[i].style.display = "none";
        }

        formPages[pageIndex].style.display="block"

        if(pageIndex == 0 ){
          backButton.style.display="none"
        }else{
          backButton.style.display="inline-block"
        }

        if(pageIndex == 2 ){
          nextButton.style.display="none"
          rendelesButton.style.display="inline-block"
          document.getElementById("nev_d").textContent= document.getElementById("nev").value;
          document.getElementById("email_d").textContent= document.getElementById("email").value;
          document.getElementById("cim_d").textContent= document.getElementById("cim").value;
          document.getElementById("tel_d").textContent= document.getElementById("tel").value;
        }else{
          nextButton.style.display="inline-block"
          rendelesButton.style.display="none"
        }

    }

    showPage(currentPage);

    nextButton.addEventListener("click",() => {
      if(document.getElementById("nev").value != '' && document.getElementById("email").value != '' && document.getElementById("email").value.includes("@") && document.getElementById("cim").value != '' && document.getElementById("tel").value != ''){
        currentPage++;
        showPage(currentPage);
      }else{
        alert('Hibás adat!');
      }

    });

    backButton.addEventListener("click", () => {
      currentPage--;
      showPage(currentPage);
    });


    rendelesButton.addEventListener("click", () => {
      alert('Sikeres rendelés!');
      window.location.href = 'home.html';
    });


    function progress(pageindex) {
      switch (pageindex) {
          case 0:
              document.getElementById("elso").className="current";
              document.getElementById("masodik").className="circle";
              document.getElementById("harmadik").className="circle";
              
              document.getElementById("line1").className="line";
              document.getElementById("line2").className="line";
              break;
          case 1:
              document.getElementById("elso").className="done";
              document.getElementById("masodik").className="current";
              document.getElementById("harmadik").className="circle";

              document.getElementById("line1").className="progress_line";
              document.getElementById("line2").className="line";
              break;
          case 2:
            document.getElementById("elso").className="done";
            document.getElementById("masodik").className="done";
            document.getElementById("harmadik").className="current";

            document.getElementById("line1").className="progress_line";
            document.getElementById("line2").className="progress_line";
              break;
      }
  }


  

  