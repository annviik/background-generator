var css= document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

function setGradient() {
if(color1.value===color2.value){
	alert("Please use different colors");
}else {
	 body.style.background= "linear-gradient(to right, " 
	 +color1.value
	 +", " 
	 +color2.value
	 + ")";
	css.textContent = body.style.background + ";";}
};

};
// function noSameColors() {
// if (color1.value === color2.value){
// 	alert("Please choose different colors");
// }else 
// alert("Thank you for using background-generator");
};
// color1.addEventListener("input",function function_name(argument) {
// 	body.style.background= "linear-gradient(to right, " 
// 	 +color1.value
// 	 +", " 
// 	 +color2.value
// 	 + ")";
// })

// color2.addEventListener("input",function function_name(argument) {
// body.style.background= "linear-gradient(to right, " 
// 	 +color1.value
// 	 +", " 
// 	 +color2.value
// 	 + ")";
// })
