jQuery(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(blank) {
      var input = $("input#" + blank).val();
      $("." + blank).text(input);
    });

    $("#story").show();

    event.preventDefault();
  });
});
