function montrer(elem){
	document.getElementById(elem).style.display="block";
}
function cacher(elem){
	document.getElementById(elem).style.display="none";
}
function valider(){
	var nom=document.getElementById('inputNom').value;
	var categ=document.getElementById('inputCategor').value;
	var prixProd=document.getElementById('inputPrix').value;
	var qteInvent=document.getElementById('inputInvent').value;
	var qteCom=document.getElementById('inputCom').value;
	if(nom!="" && categ!="" && prixProd!="" && qteInvent!="" && qteCom!=""){
		if(isNumeric(prixProd) && isNumeric(qteInvent) && isNumeric(qteCom)){
			return true;
		}else{
			return false;			
		}
	}
}

function hideAllExcept(blockId){
	var arrayOfBlocks=document.getElementsByClassName("blockAjax");
	for (var i=0; i<arrayOfBlocks.length; i++){
		if (arrayOfBlocks[i].id==blockId){
			arrayOfBlocks[i].style.display="block";
		}else{
			arrayOfBlocks[i].style.display="none";
		}
	}
}


function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function validerNum(idElem){
	var num,valide=true;
	num=document.getElementById(idElem).value;
	if(num==""){
		alert("Entrer le numero");
		valide=false;
	}
	return valide;
}
function envoyer(elem){
	document.getElementById(elem).submit();
}