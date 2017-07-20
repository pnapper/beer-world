//Business logic
function Beer (color, bitterness, level, price) {
  this.color = color;
  this.bitterness = bitterness;
  this.level = level;
  this.price = price;
  this.hop = [];
  this.origin = [];
}

prototype.beer.choice function() {

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
    });

    $("input:checkbox[id=origin]:checked").each(function() {
      var origin = $(this).val();
      beer.origin.push(origin);
    });

    $("#survey").hide();
    $("#return").show();
  });
});
