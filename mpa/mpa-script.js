var search = window.location.search.substr(1),
	keys = {},
  sum = lastButton = null,
  lastRightView = ".donate-right";
      
search.split('&').forEach(function(item) {
	item = item.split('=');
	keys[item[0]] = item[1];
});
 
var dataConfig;

loadDataConfig();

function loadConfig(){

     getOutputFromRequest('/mpa/ajax-config.php', setConfigHTML)

}
function loadDataConfig(){

   getOutputFromRequest('/mpa/ajax-config.php', setConfigData);

}

function setConfigData(data){

    dataConfig =  data;
}
  

function setConfigHTML(data){

  document.getElementsByClassName("donate-title")[0].innerText = data.titleDonate;     
  document.querySelector(".donate-desc div").innerText = data.shortTextDonate;
  document.getElementsByClassName("donate-sum")[0].innerText = data.sumDonate;
      
}
          
function getBePaidJS(data) {
  changeRightView(".donate-form");

                       var options = {
                       type: 'inline',
                       id: 'donate-form',
                       url: data.checkout.redirect_url,
                       style: dataConfig.css,
                       size: { width: 370, height: 280 }
                       };
                       var pf = new BeGateway(options);
                       pf.buildForm();
            
          } 

function getOutputFromRequest(url, callback) {
      var request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onreadystatechange = function() {
        if (request.readyState === 4) {
          if (request.status >= 200 && request.status < 300){
          var data = JSON.parse(request.responseText);
          
          return callback(data);
         }
        }
      }; 
      request.send();
 }

function backbutton() {
  if ( lastRightView === ".donate-form" ) {
    var childrenForm = document.querySelector(".donate-form");
     while ( childrenForm.lastChild ) {
      childrenForm.removeChild(childrenForm.lastChild);
     }
  }
  changeRightView(".donate-right");
}

function back() {
        document.location.reload(false);
}

function takeSum(e) {
  if ( e.target.tagName === "BUTTON" && e.target.hasAttribute("data-sum") ) {
    sum = +e.target.getAttribute("data-sum");
    if ( lastButton ) lastButton.style.backgroundColor = "#f9f9f9";
    e.target.style.backgroundColor = "#ccff00";
    lastButton = e.target;
  } else if ( e.target.tagName === "INPUT" ) {
    if ( lastButton ) lastButton.style.backgroundColor = "#f9f9f9";
    if ( e.target.value > 0 ) sum = +e.target.value;
  }
}

function submitbutton() {

  if( !sum ) {

    document.getElementById("mpa-rules").innerHTML = "Сума не абрана альбо не ўведзена!";
                
  } else if ( sum > dataConfig.maxDonate) {
             
    document.getElementById("mpa-rules").innerHTML = 'Ахвяраванне не можа быць большым за '+ dataConfig.maxDonate +' руб!';
             
  } else if ( sum < dataConfig.minDonate ) {
             
    document.getElementById("mpa-rules").innerHTML = 'Ахвяраванне не можа быць меньшым за '+ dataConfig.minDonate +' руб!';
             
  } else {

    var url = 'mpa/donate.php?donate=' + sum;
    getOutputFromRequest(url, getBePaidJS);

}

}

function changeRightView(newView) {
  document.querySelector(lastRightView).style.display = "none";
  document.querySelector(newView).style.display = "flex";

  if ( newView === ".donate-form" ) {
    $('#request').ready(function() {
      document.querySelector(".backButton").style.display = "flex";
    });
    document.querySelector(".backButton").style.display = "flex";
  } else {
    document.querySelector(".backButton").style.display = "none";
  }

  lastRightView = newView;
}

window.onload = function() {
        if(keys.message){
            switch (keys.message) {
              case '1':
              changeRightView(".donate-success");
              break;
              case '2':
              changeRightView(".donate-error-bank");
              break;
              case '3':
              changeRightView(".donate-error-tech");
              break;
           }   
        }
  document.querySelector(".donate-right").addEventListener("click", takeSum);
  document.querySelector(".donate-call input").addEventListener("focusout", takeSum);
};
/*
why? we can just use display: none
$(document).ready(function() {
  //Скрыть PopUp при загрузке страницы    
  PopUpHide();
  });
*/
//Функция отображения PopUp
function PopUpShow() {
  $("#popup1").show();
}

//Функция скрытия PopUp
function PopUpHide() {
  $("#popup1").hide();
}

loadConfig();