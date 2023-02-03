jQuery(document).ready(function ($) {
  let players = [];

  $("body").on("click", ".clickMe", function () {
    console.log(`will load video:`);
    console.log($(this).attr("data-src"));
    let dataId = $(this).attr("data-src");
    let dataNumber = $(this).attr("data-number");

    onYouTubeIframeAPIReady(dataId, dataNumber);
  });

  // 3. This function creates an <iframe> (and YouTube player)
  function onYouTubeIframeAPIReady(dataId, dataNumber) {
    console.log("onYouTubeIframeAPIReady: " + dataNumber);
    players[dataNumber] = new YT.Player("player" + dataNumber, {
      height: "360",
      width: "640",
      videoId: dataId,
      playerVars: {
        autoplay: 1,
        controls: 1,
        rel: 0,
        fs: 0,
        theme: "light",
        color: "white",
        mute: 0,
        allow: "autoplay",
      },
      events: {
        onReady: function (event) {
          onPlayerReady(event);
        },
        onStateChange: function (event) {
          onPlayerStateChange(event, dataNumber);
        },
      },
    });
  }
  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    console.log("... ++++++++++ onPlayerReady +++++++++++...");
    console.log("event.data, " + event.data);
    // if video is playing stop it and not paused
    //let index = done.indexOf(true);

    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.

  function onPlayerStateChange(event, dataNumber) {
    console.log("...onPlayerStateChange...");

    if (event.data == 0) {
      stopVideo(dataNumber, "greg");
      console.log("The  video " + dataNumber + " is finished");
    } else if (event.data == 1) {
      console.log("The  video " + dataNumber + " is playing");

      // ! video not finished not on pause and not the one we want to start
      players.forEach(function (player, index) {
        console.log(index + " player");
        console.log(player.getPlayerState());
        if (player.getPlayerState() == 1 && index != dataNumber) {
          console.log("must pause");
          pauseVideo(index, "onPlayerReady");
        } else {
          console.log("no problem");
        }
      });
    } else if (event.data == 2) {
      console.log("The  video " + dataNumber + " is paused");
    } else if (event.data == 3) {
      console.log("The  video " + dataNumber + " is bufering");
    } else {
      console.log("The  video " + dataNumber + " is Fucked!!!");
    }
  }
  function stopVideo(dataNumber, from) {
    console.log("stopVideo " + dataNumber + " " + from);
    // player[dataNumber].stopVideo();
  }

  function pauseVideo(dataNumber, from) {
    console.log("pauseVideo   dataNumber: " + dataNumber + "from: " + from);
    players[dataNumber].pauseVideo();
  }
}); // JavaScript Document
