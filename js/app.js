(function modalImages(){
 	var proyImagenes = Array.from(document.getElementsByClassName("img-proyecto"));
 	var modal = document.getElementById("img-work-modal");

 	var cuerpoModal, equis, icono;

 	proyImagenes.forEach(function(img){
 		img.addEventListener("click",function(){
 			modal.innerHTML="";
 			cuerpoModal = document.createElement("div");
 			cuerpoModal.classList.add("full-modal");

 			cuerpoModal.innerHTML = img.innerHTML;

 			modal.appendChild(cuerpoModal);
 			modal.classList.remove("hide");

 			texto = Array.from(document.getElementsByClassName("name-producto"));
 			texto.forEach(function(b){
 				b.classList.add("hide");
 			}); 			
			
 			equis = document.createElement("div"); 
 			equis.classList.add("close-img");
 			icono = document.createElement("i");
 			icono.setAttribute("class","fa fa-times");
 			icono.setAttribute("aria-hidden","true");

 			equis.appendChild(icono);
 			modal.appendChild(equis);

 			equis.addEventListener("click", function(){
 				modal.classList.add("hide");
 			});

 		});
		
 	});
 })();