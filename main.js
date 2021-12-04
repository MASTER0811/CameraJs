let video_element = document.createElement('video');
document.body.appendChild(video_element);

function camera_start(){
    navigator.mediaDevices.getUserMedia({
        video: true
    })
    .then(stream => {
        video_element.srcObject = stream
    })
}
camera_start()
video_element.autoplay = true;
video_element.addEventListener("pause",function(){
    video_element.play()
})
video_element.addEventListener("play",function(){
    video_element.play()
})


