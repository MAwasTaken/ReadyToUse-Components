const videoPlayer = document.querySelector('#videoPlayer')
const myVideo = document.querySelector('#myVideo')

function playVideo(file){
    myVideo.src = file
    videoPlayer.getElementsByClassName.display = 'block'
}

function stopPlayer(){
    videoPlayer.getElementsByClassName.display = 'none'
}