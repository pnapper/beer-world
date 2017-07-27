//Business logic
function Beer (color, bitterness, level, price) {
  this.color = color;
  this.bitterness = bitterness;
  this.level = level;
  this.price = price;
  this.hop = [];
  this.origin = [];
}

Beer.prototype.choice = function() {
  if
  ((this.color === "light") && (this.bitterness === "none") && (this.level === "Less than 4%") && (this.price === "$4 or less")) {
  $("#lager").show();
}
  else if
  ((this.color === "light" || this.color === "golden") && (this.bitterness === "medium" || this.bitterness ==="heavy") && (this.level === "5-7%" || this.level === "8-10%") && (this.price === "$5-8")) {
  $("#ipa").show();
}
  else if
  ((this.color === "amber") && (this.bitterness === "slight" || this.bitterness === "medium") && (this.level === "5-7%") && (this.price === "$5-8")) {
  $("#amber").show();
}
  else if
  ((this.color === "red") && (this.bitterness === "medium") && (this.level === "5-7%") && (this.price === "$5-8")) {
  $("#red").show();
}
  else if
  ((this.color === "brown") && (this.bitterness === "slight" || this.bitterness === "medium") && (this.level === "5-7%" || this.level === "8-10%") && (this.price === "$5-8")) {
  $("#porter").show();
}
  else if
  ((this.color === "dark") && (this.bitterness === "slight" || this.bitterness === "medium") && (this.level === "8-10%" || this.level === "Above 10%") && (this.price === "$5-8" || this.price === "More than $8")) {
  $("#stout").show();
}

  else {
    $("#cider").show();
  }
}


//Interface logic
$(document).ready(function(){
  $("#submit").click(function() {

    var color = $("input:radio[name=color]:checked").val();
    var bitterness = $("input:radio[name=bitter]:checked").val();
    var level = $("input:radio[name=drunk]:checked").val();
    var price = $("input:radio[name=price]:checked").val();
    var beer = new Beer(color, bitterness, level, price);

    $("input:checkbox[id=hop]:checked").each(function() {
      var hop = $(this).val();
      beer.hop.push(hop);


      $("input:checkbox[id=origin]:checked").each(function() {
        var origin = $(this).val();
        beer.origin.push(origin);
      });

      beer.choice();
      $("#survey").hide();
      $(".return").show();
    });
  });
});
