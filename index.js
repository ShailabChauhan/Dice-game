var num1=Math.floor(Math.random()*6+1);
var image1="dice"+num1+".png";
var image=document.querySelectorAll("img")[0];
image.setAttribute("src", image1);
var num2 = Math.floor(Math.random()*6+1);
var image2 = "dice"+num2+".png";
document.querySelectorAll(".img2")[0].setAttribute("src", image2);

if(num1>num2)
{
    document.querySelector("h1").textContent="Player1 Win";
}
else if(num1<num2)
{
    document.querySelector("h1").innerHTML="Player2 Win";
}
else
{
    document.querySelector("h1").innerHTML="Tie";
}