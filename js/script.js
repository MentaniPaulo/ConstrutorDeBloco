//criar o elemento para manipular o bloco
var obj = document.getElementById('BlocoConstrutor');
var py = 100;
var px = 0;
obj.style.top = py+"px";
var cor = "#CD5C5C";
obj.style.backgroundColor = cor;

document.addEventListener("keydown",move);
console.log(window.screen.width);
function move() {

		//37 tecla seta esquerda
		//38 tecla para cima
		//39 tecla para direita
		//40 tecla para baixo
		var tecla=event.keyCode;

		switch(tecla){
			case 37:
				px-=10;
				break;
			case 38:
				py-=10;
				break;
			case 39:
				px+=10;
				break;
			case 40:
				py+=10;
				break;
		}

		if(tecla == 96)cor = "#DCDCDC";
		if(tecla == 97)cor =  "#FFDAB9";
		if(tecla == 98)cor = "#2F4F4F";
 		if(tecla == 99)cor = "#0000CD";
		if(tecla == 100)cor = "#006400";
		if(tecla == 101)cor = "#7CFC00";
		if(tecla == 102)cor = "#FFFF00";
		if(tecla == 103)cor = "#B8860B";
		if(tecla == 104)cor = "#FF00FF";
		if(tecla == 105)cor = "#CD5C5C";

		if(py<100)py=100;
		if(py>480)py=480;
		if(px<0)px=0;
		if(px>1260)px =1260;
		
		if(tecla == 13){
				//document.removeEventListener("keydown",move);
				//obj.style.backgroundColor="#F52";
				var dic = document.createElement("div");
				dic.style.left = px+"px";
				dic.style.top = py+"px";
				dic.style.backgroundColor = cor;
				dic.style.position = "absolute";
				//dic.style.zIndex = "4";
				dic.style.width = "100px";
				dic.style.height = "100px";
				document.getElementsByTagName("div")[1].appendChild(dic);
				//document.querySelector("#mapa").appendChild(dic);

			}

		obj.style.left = px+"px";
		obj.style.top = py+"px";
		obj.style.backgroundColor = cor;
}


