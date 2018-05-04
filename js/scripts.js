var nextNumber=[];
var i;
var aNumber=0;
var bNumber=1;
var input=prompt("Enter a number:");

for (i=1; i<=input; i++)
{
  if (i<=1)
  {
    nextNumber+=i;

  }
  else
  {
    nextNumber= (aNumber+bNumber);
    aNumber=bNumber;
    bNumber=nextNumber;
  }

    alert (nextNumber);
}
