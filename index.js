 $(function(){
   $(".burger-nav").click(function(){
     $("nav ul").slideToggle();
   })
 })

three = [1, 2, 3];
doubled = three.map(function (item) {
  return item * 2;
});
console.log(doubled);
