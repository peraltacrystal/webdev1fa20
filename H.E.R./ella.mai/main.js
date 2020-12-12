$('.play-button').click(function() {
    console.log("click")
    if ($('.her')[0].paused == false) {
        $('.her')[0].pause();
    } else {
        $('.her')[0].play();
    }
  });