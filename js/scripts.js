var input;
var nextNumber='';
$(document).ready(function()
{
  //user Interface
  $("form#fibo").submit(function(event)
  {
    input=parseInt($('#input').val());
    Fibonacci();
    $('#input').val('');
    event.preventDefault();
  });

  //business logic
  function Fibonacci()
  {
    var aNumber=0;
    var bNumber=1;
    for (var i=1; i<=input;i++)
    {
      if (i<=1)
      {
        nextNumber+=i;
      }
      else
      {
        nextNumber= aNumber+bNumber;
        aNumber=bNumber;
        bNumber=nextNumber;
      }
      else
      {
       if(i!=input)
       {
         nextNumber+=',';
       }
      }
    }
    $('.output').text(nextNumber);
    $('#result').show();
  }
});
