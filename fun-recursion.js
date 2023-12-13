var count=0;
function hello()
{
    count++;
    console.log("Hello="+count+"<br>");
    hello()
}
hello()