3
4 // Listen for messages
5 chrome.runtime.onMessage.addListener((msg,sender,response) => {
    if ( msg.name =="playTrack" ) {
    }
    var trackName = msg.track ;
    var audioEle = document.querySelector ( '.audio-element' ) ;
    audioEle.src =  trackName + '.mp3';
    audioEle.play();
}) ;