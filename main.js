function myIn(){
  var conto=0;
  var cubo1= $("#cubo1");
  var cubo3= $("#cubo3");
  var cubo2=$("#cubo2");

  cubo1.click(function(){
    conto-=1;
    cubo2.text(conto);
    colorSwapper(conto,cubo2);
  });
  cubo3.click(function(){
    conto+=1;
    cubo2.text(conto);
    colorSwapper(conto,cubo2);
  });
}

myIn();
