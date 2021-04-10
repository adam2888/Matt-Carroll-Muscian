
//70's Playlist Button

$("#button70").on("click", function () {
  $("#playlist70").toggleClass("open");
  $("#playlist80").removeClass("open");
  $("#playlist90").removeClass("open");
  $("#playlist00").removeClass("open");
});

// 80's Playlist Button
$("#button80").on("click", function () {
  $("#playlist70").removeClass("open");
  $("#playlist90").removeClass("open");
  $("#playlist00").removeClass("open");
  $("#playlist10").removeClass("open");
  $("#playlist80").toggleClass("open");
});

//90's Playlist Button
$("#button90").on("click", function () {
  $("#playlist70").removeClass("open");
  $("#playlist80").removeClass("open");
  $("#playlist00").removeClass("open");
  $("#playlist10").removeClass("open");
  $("#playlist90").toggleClass("open");
})

//00's Playlist Button
$("#button00").on("click", function () {
  $("#playlist70").removeClass("open");
  $("#playlist80").removeClass("open");
  $("#playlist90").removeClass("open");
  $("#playlist10").removeClass("open");
  $("#playlist00").toggleClass("open");
})

//10's Playlist Button
$("#button10").on("click", function () {
  $("#playlist70").removeClass("open");
  $("#playlist80").removeClass("open");
  $("#playlist90").removeClass("open");
  $("#playlist00").removeClass("open");
  $("#playlist10").toggleClass("open");
})

//Video player
$("#video1button").on("click", function () {
  $("video").attr("src", "videos/video1.mp4");
})
$("#video2button").on("click", function () {
  $("video").attr("src", "videos/video2.mp4");
})
$("#video3button").on("click", function () {
  $("video").attr("src", "videos/video3.mp4");
})
$("#video4button").on("click", function () {
  $("video").attr("src", "videos/video4.mp4");
})
