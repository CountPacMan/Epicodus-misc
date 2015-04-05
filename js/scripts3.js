jQuery(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li><span class='del'>x </span> Hello!</li>");
    $("ul#compy").prepend("<li><span class='del'>x </span> Hi!</li>");
    $("ul#user").find(".del").first().click(function() {
      $(this).parent().remove();
    });
    $("ul#compy").children("li").first().click(function() {
      $(this).parent().remove();
    })
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li><span class='del'>x </span> Goodbye!</li>");
    $("ul#compy").prepend("<li><span class='del'>x </span> Bye!bye!</li>");
    $("ul#user").find(".del").first().click(function() {
      $(this).parent().remove();
    });
    $("ul#compy").find(".del").first().click(function() {
      $(this).parent().remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li><span class='del'>x </span> Stop copying me!</li>");
    $("ul#compy").prepend("<li><span class='del'>x </span> What?</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).parent.remove();
    });
    $("ul#compy").children("li").first().click(function() {
      $(this).parent.remove();
    });
  });
});
