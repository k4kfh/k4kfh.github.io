//I added a thing to trigger this on page load
pageLoaded = function() {
  Prism.highlightAll();
  $("div.cms_nav").children().children().children("a").addClass("btn-large z-depth-0 blue waves-effect waves-light white-text") //turns nav into buttons
  $("div.cms_nav").children().children("li").css("display", "inline") //make navbar display horizontally like it should
  $(".post-title").children().addClass("black-text")
  $(".post-title.btn-flat").html("Read More<i class='material-icons right'>arrow_forward</i>")

  //wrapping iframes in responsive containers
  $("iframe").not(".dont-touch").wrap("<div class='video-container'></div>")
  console.log("Done")
}
