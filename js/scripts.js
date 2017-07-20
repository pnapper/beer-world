//Business logic
function Beer (color, bitterness, level, price) {
  this.color = color;
  this.bitterness = bitterness;
  this.level = level;
  this.price = price;
  this.hop = [];
  this.origin = [];
}

//Interface logic
$(document).ready(function(){
  $("#submit").click(function() {

    var color = $("input:radio[name=color]:checked").val();
    console.log(color)
    var bitterness = $("input:radio[name=bitter]:checked").val();
    console.log(bitterness)
    var level = $("input:radio[name=drunk]:checked").val();
    console.log(level)
    var price = $("input:radio[name=price]:checked").val();
    console.log(price)
    var beer = new Beer(color, bitterness, level, price);
    $("input:checkbox[id=hop]:checked").each(function() {
      var hop = $(this).val();
      beer.hop.push(hop);
      console.log(hop)
    });

    $("input:checkbox[id=origin]:checked").each(function() {
      var origin = $(this).val();
      beer.origin.push(origin);
      console.log(origin)
    });
    console.log(beer)

    $("#survey").hide();
    $("#return").show();
  });
});
