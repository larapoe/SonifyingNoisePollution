var citySoundFolder="final-sounds/";
var citySounds={
    london:"1-1.wav",
    slough:"5-1.wav",
    reading:"3-1.wav",
    oxford:"2-1.wav"
};

var audioElem = document.createElement('audio');

function PlayCitySound(e){
    var cityName=e.id;
    var soundFile=citySoundFolder+citySounds[cityName];
    
    audioElem.src = soundFile;
    audioElem.currentTime = 0;
    
    if (typeof audioElem.loop == "boolean")
        audioElem.loop=true;
        else {
            audioElem.addEventListener("ended", function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    
    audioElem.play(); 
}

function StopCitySound(){
    audioElem.pause();
}