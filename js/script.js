jQuery(document).ready(function ($) {
  console.log("hello");

  //!                   _____         _
  //!                  |____ |       | |
  //! _  __ ___  _ __      / /  _ __ | | __ _ _   _  ___ _ __
  //! | '_ ` _ \| '_ \     \ \ | '_ \| |/ _` | | | |/ _ \ '__|
  //! | | | | | | |_) |.___/ / | |_) | | (_| | |_| |  __/ |
  //! |_| |_| |_| .__/ \____/  | .__/|_|\__,_|\__, |\___|_|
  //!           | |            | |             __/ |
  //!           |_|            |_|            |___/

  let autoPlay = false;
  let playMe = false;
  let turning; //for set interval

  let PLAYER;

  //play/stop song when title is clicked
  $("body").on("click", ".playMe", function (e) {
    let src = $(this).find("span").attr("data-mp3");
    let id = $(this).find("span").attr("id");
    playSoundCloud(src, id);
  });

  if ($("#soundCloud").length > 0) {
    testAutoplay();

    //get values for tape writing
    let tapeWidth = $("#tape img").width();
    let tapeFontSize = (48 * tapeWidth) / 449 + "px";
    let tapeFontMarginTop = (-255 * tapeWidth) / 449 + "px";
    let tapeFontMarginLeft = (76 * tapeWidth) / 449 + "px";
    console.log(`tape widt: ${tapeWidth}`);
    //output values for tape writing
    $("#tape figcaption")
      .css("font-size", tapeFontSize)
      .css("margin-top", tapeFontMarginTop)
      .css("margin-left", tapeFontMarginLeft);
  }

  $(window).resize(function () {
    if ($("#soundCloud").length > 0) {
      //get values for tape writing
      let tapeWidth = $("#tape img").width();
      let tapeFontSize = (48 * tapeWidth) / 449 + "px";
      let tapeFontMarginTop = (-258 * tapeWidth) / 449 + "px";
      let tapeFontMarginLeft = (76 * tapeWidth) / 449 + "px";
      console.log(`tape widt: ${tapeWidth}`);
      //output values for tape writing
      $("#tape figcaption")
        .css("font-size", tapeFontSize)
        .css("margin-top", tapeFontMarginTop)
        .css("margin-left", tapeFontMarginLeft);
    }

    // $("#bannertext").text($(window).width());
  });

  //
  function testAutoplay() {
    // done playing

    console.log("test autoplay");

    let player = $("#soundCloud").get(0);

    player.volume = 0;
    player.muted = true;

    player.play();

    $("#autoplay").text("DISABLED");

    player.onplaying = function () {
      autoPlay = true; //will play
      $("#autoplay").text("ENABLED");
      player.pause();
    };

    console.log("testAutoplay finished");
  }

  function playSoundCloud(src, id) {
    console.log(`let me play music for you`);
    console.log("playSoundCloud: " + src + "," + id);

    //unsetTrack();

    if (playMe == true) {
      console.log("_____________>playMe == true");
      //same track?
      //check if same track play
      //stop track
      //start newTrack?
      //       alert(' playSoundCloud playMe01==true');
      console.log("#audio source:" + $("#audio source").attr("src"));
      console.log("sound1 src: " + src);
      if ($("#audio source").attr("src") == src) {
        console.log("...........same track i stop.........");
        //if is on pause(play)

        //if is not on pause(stop)
        if (PLAYER.paused) {
          console.log("am on pause...");
          PLAYER.play();
        } else {
          console.log("am playing...");
          unsetTrack();
        }
      } else {
        console.log("...........not same track i stop.........");

        //  player1.currentTime=player1.duration;
        unsetTrack();
        setTrack(src, id);

        console.log("PLAYER.pause();");
      }
    } else {
      console.log("_____________>playMe == false");
      setTrack(src, id);
    }
  }

  function unsetTrack(kara) {
    console.log(
      "unsetTrack...........unset tracks...................kara: " + kara
    );
    console.log("clearInterval unset track");
    // updatePlayer("unset");
    let newAudio =
      '<p class="oneLine"><i>if it doesn\'t start please wait till track is loaded &amp; click arrow to start track</i></p>';
    newAudio += '<audio id="soundCloud" controls="">';
    newAudio += '<source   src="">';
    newAudio += '</audio><div class="space"></div>';
    $("#audio").html(newAudio);
    //alert($('#myTitleOnTape1').height());
    $(".playMe span").removeClass("blink").attr("title", "Play me!");
    console.log("done: unsetTrack audio");
    playMe = false;
    clearInterval(turning); //stop the tape
    turning = null;

    updateTape("unset");
  }

  function updateTape(to) {
    if ((to = "unset")) {
      $("#tape figcaption")
        .css("cursor", "default")
        .attr("title", "")
        .attr("data-src", "")
        .attr("data-type", "")
        .text("♪ ♫ Play me again!"); //removenameOnTape

      $(".tape img")
        .css("cursor", "default")
        .attr("title", "")
        .attr("data-src", "");
    }
  }

  function setTrack(src, id) {
    console.log("setTrack" + src + ", " + id);

    let newAudio =
      '<p class="oneLine"><i>if it doesn\'t start please wait till track is loaded &amp; click arrow to start track</i></p>';
    newAudio += '<audio id="soundCloud" controls="">';
    newAudio += '<source   src="' + src + '">';
    newAudio += '</audio><div class="space"></div>';
    $("#audio").html(newAudio);

    console.log("1st set track'");
    $("#tape")
      .find("figcaption")
      .text($("#" + id).text());

    iAmPlaying(id);
  }

  function iAmPlaying(ID) {
    //soundCloud widget
    console.log("iAmPlaying  " + ID);
    console.log("...............iAmPlaying................ ");
    //alert('ID' +ID);

    $("#" + ID).addClass("blink"); //audio

    //let iframeElement   = document.querySelector('iframe');
    //console.log(iframeElement.id);
    //let iframeElementID=iframeElement.id;
    //console.log(iframeElementID);
    //if(nb=='1'){

    PLAYER = $("#soundCloud").get(0);
    if (autoPlay == true) {
      PLAYER.volume = 0.5;
      PLAYER.play();
      PLAYER.onplaying = function () {
        console.log("am playing");
        playMe = true;
      };
    } else if (autoPlay == false) {
      console.log("autoplay false fix later");
      PLAYER.volume = 0.5;
      PLAYER.play();
      PLAYER.onplaying = function () {
        console.log("am playing");
        playMe = true;
      };
    }
    console.log("setting events for real player");

    PLAYER.onplaying = function () {
      if (!turning) {
        tapeTurn();
      }
      playMe = true;
    };

    PLAYER.addEventListener("play", function () {
      // console.log("...................AM ON play.............");

      $(".myTape img")
        .css("cursor", "pointer")
        .attr("title", "Click to stop the music");
      $("#" + ID).attr("title", "click to stop the music");
    });

    PLAYER.addEventListener("pause", function (src, id) {
      //    if( (playMe01==false)||(playMe02==false)){
      //    clearIntervalTurning();
      //    clearInterval(turningInterval2);
      //

      console.log("done: unsetTrack audio");

      clearInterval(turning); //stop the tape
      turning = null;
    });

    PLAYER.addEventListener("ended", function () {
      //alert('track'+nb+'ended');
      console.log("...................AM ON ENDED.............");
      clearInterval(turning); //stop the tape
      turning = null;

      unsetTrack("ended");
      //alert('track 1 is over');
    });
  }
  // tapeTurn();
  //get element by id from your iframe
  function tapeTurn() {
    console.log("テープが回る。");
    let actualPixSrc = $("#tape img").attr("src"); //the src
    let actualPixSrcset = $("#tape img").attr("srcset"); //the src
    let actualNbROW = actualPixSrc.substring(
      //thenumb
      actualPixSrc.length - 5,
      actualPixSrc.length - 4
    );
    let actualNb = Number(actualNbROW);
    let newPixSrc; //the src
    let newPixSrcset; //the Srcset
    let newNb; //thenumb

    let actualTape = "tape0" + actualNb;
    let newTape;
    // console.log("actualNb " + actualNb);

    turning = setInterval(function () {
      actualNb--;
      newNb = actualNb;
      if (newNb < 0) {
        newNb = 9;
      }
      newTape = "tape0" + newNb;
      newPixSrc = actualPixSrc.replace(actualTape, newTape);
      newPixSrcset = actualPixSrcset.replace(actualTape, newTape);
      actualNb = newNb;
      actualTape = "tape0" + newNb;
      actualPixSrc = newPixSrc;
      actualPixSrcset = newPixSrcset;

      changePix(newPixSrc, newPixSrcset);
    }, 130);
  }

  function changePix(newPixSrc, newPixSrcset) {
    // console.log(newNb);
    $("#tape img").attr("src", newPixSrc);
    $("#tape img").attr("srcset", newPixSrcset);
  }

  //!                                ____
  //!   ____  ____  ____  ____ ___  / / /
  //!  /_  / / __ \/ __ \/ __ `__ \/ / /
  //!   / /_/ /_/ / /_/ / / / / / /_/_/
  //!  /___/\____/\____/_/ /_/ /_(_|_)

  let imgPosLeft;
  let imgPosTop;
  let imgWidth;
  let imgHeight;
  let prozent;

  let quotientWidth;
  let quotientHeight;
  let $bodyOffSetTop;
  let $newBodyOffSetTop;
  let $diffscroll;

  let topLarge;
  let leftLarge;

  let xUp;
  let yUp;
  let $name; //the name of pix hovered
  let hasTouch = false; //is it on tpouchscreen or monitor? SET TO NOT

  //to know if screen or laptop computer

  $("body").one("touchstart", function (e) {
    hasTouch = true;
    console.log("AM ON A SCRREN");
    $(this).off(".noTouch");
  });

  // ZOOM START
  //////////////////////////
  $("body").on("mouseenter.noTouch", ".zoom img", function (e) {
    console.log("ready for zoom");

    if (hasTouch === true) {
      return;
    }

    let parentOffset = $(this).parent().offset();
    // //or $(this).offset(); if you really just want the current element's offset
    let relX = e.pageX - parentOffset.left;
    let relY = e.pageY - parentOffset.top;
    // alert(` X ${relX} y ${relY}`);
    console.log(` X ${relX} y ${relY}`);

    xUp = e.pageX;
    yUp = e.pageY;
    $bodyOffSetTop = $(document).scrollTop();
    console.log("zoom Works");
    console.log("$bodyOffSetTop: " + $bodyOffSetTop);
    let src = $(this).attr("src");
    let lastIndex = src.lastIndexOf("-");
    $name = src.substring(0, lastIndex) + ".jpg";
    //alert(name);
    imgPosLeft = $(this).offset().left;
    imgPosTop = $(this).offset().top;
    //imgMarginTop= $('#content').height();
    //imgMarginTop=78;
    // console.log(imgMarginTop);
    console.log("imgPosLeft: " + imgPosLeft);
    console.log("imgPosTop: " + imgPosTop);
    imgWidth = $(this).width();
    imgHeight = $(this).height();
    //console.log('imgWidth: '+imgWidth);
    //console.log('imgHeight: '+imgHeight);
    createNewDiv($name); //put bigPix in div
    //show div
  });

  ////////////////////////////////

  $("body").on(
    "mousewheel.noTouch DOMMouseScroll.noTouch",
    ".zoom img",
    function (e) {
      // console.log('ready for zoom 2');
      if (hasTouch === true) {
        return;
      }

      //console.log('mousewheel DOMMouseScroll zoom 1')
      //   console.log('scroll');
      //   console.log('b4 scroll: '+ $bodyOffSetTop);
      //
      $newBodyOffSetTop = $(document).scrollTop();
      //console.log('after scroll: '+ $newBodyOffSetTop);
      // console.log('diff scroll: '+ ($bodyOffSetTop-$newBodyOffSetTop));
      $diffscroll = $bodyOffSetTop - $newBodyOffSetTop;
      $bodyOffSetTop = $newBodyOffSetTop;

      whereAmIFunction(true, $diffscroll, "mousewheel");
    }
  );
  ///////////////////////////

  $("body").on("mousemove.noTouch", ".zoom img", function (e) {
    console.log("mouse move");
    if (hasTouch === true) {
      console.log("i stop!!");
      return;
    }

    let parentOffset = $(this).parent().offset();
    // //or $(this).offset(); if you really just want the current element's offset
    let relX = e.pageX - parentOffset.left;
    let relY = e.pageY - parentOffset.top;
    // alert(` X ${relX} y ${relY}`);
    // console.log(` X ${relX} y ${relY}`);
    let imgWidth = $(this).attr("width");
    let imgHeight = $(this).attr("height");
    imageQuotient = imgWidth / imgHeight;

    console.log("!!!!figureQuotient>imageQuotient");
    xUp = e.pageX;
    yUp = e.pageY;
    whereAmIFunction(false, "", e);

    // let ImgScrollWidth=
    // let ImgScrollHeight=

    xUp = e.pageX;
    yUp = e.pageY;
    console.log("imgWidth: " + imgWidth);
    console.log("imgHeight: " + imgHeight);
    console.log("imgPosLeft: " + imgPosLeft);
    console.log("imgPosTop: " + imgPosTop);
    console.log("xUp: " + xUp);
    console.log("yUp: " + yUp);

    whereAmIFunction(false, "", e);
  });

  ///////////////////////////
  $("body").on("mouseleave.noTouch", ".zoom img", function () {
    if (hasTouch === true) {
      return;
    }
    hideZoom("mouseleave");
  });
  ///////////////////////////

  //create new Div large

  function createNewDiv(name) {
    console.log("createNewDiv: " + name);
    //console.log('createNewDiv(name)')

    $("#large").css("background-image", "url(" + name + ")");
    //$('#large').css('background-image','url('+urlupload+'centerMe.png)');
    let img = new Image();
    img.src = name;
    //console.log(img.src);
    $(img).on("load", function () {
      let bgImgWidth = img.width;

      console.log("......createNewDiv w:" + bgImgWidth);
      prozent = bgImgWidth / imgWidth;
    });
  }

  function whereAmIFunction(scroll, pixels, e) {
    console.log(
      "...........................whereAmIFunction(scroll: " +
        scroll +
        ",pixels: " +
        pixels +
        ")"
    );
    //$('#bannerText').text('whereAmIFunction: '+scroll+", "+pixels+", "+from);
    if ($("#large").css("display") !== "block") {
      //alert('show');
      $("#large").show();
    }

    if (!scroll) {
      //console.log('not scroll');
      //y = e.pageY;
      //x =  e.pageX;
      //xUp = e.originalEvent.pageX;
      //yUp = e.originalEvent.pageY;
    } else {
      //console.log('scrolliiing: '+xUp+" "+yUp);
      yUp -= $diffscroll;
    }
    //$('#large').text(touchingMe+' x: '+x)//y-100
    //console.log('x:'+x);
    //        console.log('y:'+y);
    //
    //console.log($('#large').width());
    //    console.log ('imgPosLeft'+imgPosLeft);
    //     console.log ('imgWidth'+imgWidth);
    //     console.log ('imgPosTop'+imgPosTop);
    //     console.log ('imgHeight'+imgHeight);
    //     console.log ('x'+x);
    //     console.log ('y'+y);
    quotientWidth = 1 - (xUp - imgPosLeft) / (imgWidth / 2);
    quotientHeight = 1 - (yUp - imgPosTop) / (imgHeight / 2);

    // console.log('quotientWidth: '+quotientWidth +' quotientHeight: '+quotientHeight);
    //quotientWidth=1;
    //quotientHeight=1;
    let quotientWidth100 = 100 - 100 * quotientWidth;
    let quotientHeight100 = 100 - 100 * quotientHeight;
    let bgLeft = (imgPosLeft - xUp) * prozent + quotientWidth100;
    let bgTop = (imgPosTop - yUp) * prozent + quotientHeight100;

    topLarge = yUp - 100 + 80 * quotientHeight; //imgPosTop-100;//-(100*quotientHeight);
    // console.log('2 imgMarginTop: '+imgMarginTop);
    leftLarge = xUp - 100 + 80 * quotientWidth;
    //console.log('topLarge: '+topLarge);
    //console.log('leftLarge: '+leftLarge);
    $("#large")
      .css("top", topLarge) //y-100   .css('top',topLarge)
      .css("left", leftLarge) //-100
      .css("background-position", bgLeft + "px " + bgTop + "px ");

    console.log("top: " + topLarge + " left: " + leftLarge);
    console.log(
      "imgPosLeft: " +
        imgPosLeft +
        " imgPosTop: " +
        imgPosTop +
        " imgWidth: " +
        imgWidth +
        " imgHeight: " +
        imgHeight
    );

    if (
      xUp < imgPosLeft ||
      yUp < imgPosTop ||
      xUp > imgPosLeft + imgWidth ||
      yUp > imgPosTop + imgHeight
    ) {
      hideZoom("whereAmIFunction");
    }
  }

  function hideZoom(from) {
    console.log("hideZoom");
    $("#large").hide();
  }

  // !    ______       __________  ______
  // !   / ___/ |     / /  _/ __ \/ ____/
  // !   \__ \| | /| / // // /_/ / __/
  // !  ___/ /| |/ |/ // // ____/ /___
  // ! /____/ |__/|__/___/_/   /_____/

  let xDown = null;
  let yDown = null;
  let theClickTime;
  let theClickTimeEnd;
  let minTime = 150;

  let classname = document.getElementsByClassName("swipeMich");

  for (let i = 0; i < classname.length; i++) {
    classname[i].addEventListener(
      "touchstart",
      function (someVar) {
        handleTouchstartTimo(someVar);
      },
      false
    );
    classname[i].addEventListener(
      "touchend",
      function (someVar) {
        handleTouchEndTimo(someVar);
      },
      false
    );
  }

  function handleTouchstartTimo(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
    let d = new Date();
    theClickTime = d.getTime();
    $("#swipeStart").html(theClickTime);

    console.log("xDown:" + xDown);
    console.log("yDown:" + yDown);
    $("#xTouchstartPos").html(xDown);
    $("#yTouchstartPos").html(yDown);
  }

  function handleTouchEndTimo(evt) {
    let timeDiffEnd;
    let d = new Date();
    theClickTimeEnd = d.getTime();
    $("#swipeEnd").html(theClickTimeEnd);
    console.log("----theClickTimeEnd-------" + theClickTimeEnd);
    timeDiffEnd = theClickTimeEnd - theClickTime;
    $("#swipeTime").html(timeDiffEnd);
    if (!xDown || !yDown) {
      return;
    }
    //   let xUp = evt.touches[0].clientX;
    //  let yUp = evt.touches[0].clientY;
    let xUp = evt.changedTouches[evt.changedTouches.length - 1].clientX;
    let yUp = evt.changedTouches[evt.changedTouches.length - 1].clientY;
    console.log("xUp:" + xUp);
    console.log("yUp:" + yUp);
    $("#xTouchendPos").html(xUp);
    $("#yTouchendPos").html(yUp);
    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    $("#xDiff").html(Math.abs(xDiff));
    $("#yDiff").html(Math.abs(yDiff));
    console.log("-----------?????----");
    console.log("xDiff:" + Math.abs(xDiff));
    console.log("yDiff:" + Math.abs(yDiff));
    console.log("timeDiff:" + timeDiffEnd);
    console.log("---------???????????/------");

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        $("#swipeRichtung").html("left swipe");
        if (timeDiffEnd < minTime && Math.abs(xDiff) > 30) {
          console.log("CHANGE +");
          goOnePixMore();
        } else {
          $("#swipeRichtung").html("too slow for swipe");
          return;
        }
      } else {
        /* right swipe */
        console.log("* +++right swipe +++*");
        if (timeDiffEnd < minTime && Math.abs(xDiff) > 30) {
          console.log("CHANGE -");
          $("#swipeRichtung").html("right swipe");
          goOnePixless();
        } else {
          //zoom
          $("#swipeRichtung").html("too slow for swipe");
          return;
        }
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
        if (timeDiffEnd < minTime) {
          $("#swipeRichtung").html("too slow for swipe");
          return;
        } else {
          $("#swipeRichtung").html("down swipe");
          /* down swipe */
          return;
        }
      } else {
        if (timeDiffEnd < minTime) {
          $("#swipeRichtung").html("too slow for swipe");
          return;
        } else {
          //zoom
          $("#swipeRichtung").html("up swipe");
          return;
        }
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }

  function goOnePixMore() {
    let mysrc = $(".wp-image-341").attr("src");
    let newSrc;
    let srcset = $(".wp-image-341").attr("srcset");
    let newSrcset;
    if (mysrc.match("yellow")) {
      newSrc = mysrc.replace("yellow", "red");
      newSrcset = srcset.replace(/yellow/g, "red");
    } else {
      newSrc = mysrc.replace("red", "yellow");
      newSrcset = srcset.replace(/red/g, "yellow");
    }
    $(".wp-image-341").attr("src", newSrc);
    $(".wp-image-341").attr("srcset", newSrcset);
  }

  function goOnePixless() {
    let mysrc = $(".wp-image-341").attr("src");
    let newSrc;
    let srcset = $(".wp-image-341").attr("srcset");
    let newSrcset;
    if (mysrc.match("yellow")) {
      newSrc = mysrc.replace("yellow", "red");
      newSrcset = srcset.replace(/yellow/g, "red");
    } else {
      newSrc = mysrc.replace("red", "yellow");
      newSrcset = srcset.replace(/red/g, "yellow");
    }
    $(".wp-image-341").attr("src", newSrc);
    $(".wp-image-341").attr("srcset", newSrcset);
  }

  //swipe END
}); // JavaScript Document
