let input = document.querySelector(".inputBx input"),
    btn = document.querySelector(".inputBx .icon");
    icon = document.querySelector(".inputBx .icon i");

let arabic_button = document.getElementById("Arabic_Buttons");
let english_button = document.getElementById("English_Buttons");
    // var response = xhr.response;


var language = "ar";

var isBrowserSuported = true;


function submitText(MyData){
    var url = 'WordsDB.php?MyData='+MyData;
    var xhr = new XMLHttpRequest();
    xhr.open('GET' , url , false);
    xhr.send();
    // var response = xhr.response;
    // responseField.innerHTML = response;
}


function Selected_Language(selected_language){
    if(!isBrowserSuported) return;
    if(selected_language === "arabic"){
        arabic_button.style.backgroundColor = "#3f9141";
        arabic_button.style.color="white";

        english_button.style.backgroundColor = "rgba(17, 45, 68, 0)";
        english_button.style.color="black";

        language = "ar";

        input.value = "";
        input.style.textAlign = "right";


        
    }

    else{
        english_button.style.backgroundColor = "#3f9141";
        english_button.style.color="white";

        arabic_button.style.backgroundColor = "rgba(17, 45, 68, 0)";
        arabic_button.style.color="black";
        language = "en";
        
        input.value = "";

        input.style.textAlign = "left";

    }
   
}
let SpeechRecognition  = window.SpeechRecognition || window.webkitSpeechRecognition ;
if(SpeechRecognition){
    const recognition = new SpeechRecognition();
    btn.addEventListener("click" , ()=>{
        if(icon.classList.contains('fa-microphone')){
            recognition.lang = 'ar';
            recognition.start();

            
            
        }
        else{
            recognition.stop();

        }
    })

    recognition.addEventListener("start", ()=>{
        icon.classList.replace("fa-microphone" , "fa-microphone-slash")
        btn.style.animation = "breathe 1s linear infinite";
        btn.style.color = "red";


    })

    recognition.addEventListener("end", ()=>{
            icon.classList.replace("fa-microphone-slash" , "fa-microphone")
            btn.style.animation = "none";
            btn.style.color = "black";


    })

    recognition.addEventListener("result", (event)=>{
        let transcript = event.results[0][0].transcript;
        input.value = transcript;
        submitText(input.value);

    })

}
else{
    input.value = "your browser not supported, please change it";
    isBrowserSuported =false;
}