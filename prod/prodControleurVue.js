//vue films
function listerF(listProds){
	var taille;
	var rep="<h1 class='text-center'>Toutes les produits</h1>";
	rep+="<table class='table'>";
	rep+="<tr><th>CodeProd</th><th>nomProd</th><th>categProd</th><th>prixProd</th><th>qteInvent</th><th>qteCom</th></tr>";
	taille=listProds.length;
	for(var i=0; i<taille; i++){
		rep+="<tr><td>"+listProds[i].codeProd+"</td><td>"+listProds[i].nomProd+"</td><td>"+listProds[i].categProd+"</td><td>"+listProds[i].prixProd+"</td><td>"+listProds[i].qteInvent+"</td><td>"+listProds[i].qteCom+"</td></tr>";		 
	}
	rep+="</table>";
	$('#divLister').html(rep);
}

function afficherFiche(reponse){
  var uneFiche;
  uneFiche=reponse.fiche;
  if(reponse.OK){
	var taille;
	var rep="<h1 class='text-center'>Resultat</h1>";
	rep+="<table class='table'>";
	rep+="<tr><th>CodeProd</th><th>nomProd</th><th>categProd</th><th>prixProd</th><th>qteInvent</th><th>qteCom</th></tr>";
	rep+="<tr><td>"+uneFiche.codeProd+"</td><td>"+uneFiche.nomProd+"</td><td>"+uneFiche.categProd+"</td><td>"+uneFiche.prixProd+"</td><td>"+uneFiche.qteInvent+"</td><td>"+uneFiche.qteCom+"</td></tr>";
	rep+="</table>";
	$('#divLister').html(rep);
  }else{
	$('#divLister').html("");
	hideAllExcept('');
	$('#messages').html("Film "+$('#inputIdProd').val()+" introuvable");
	setTimeout(function(){ $('#messages').html(""); }, 5000);
  }

}

function resultCompter(reponse){
	$('#compterResultat').html(reponse.nombre.summa);
	
}

function sorterP(listProds){
	var taille;
	var rep="<h1 class='text-center'>Resultat</h1>";
	rep+="<table class='table'>";
	rep+="<tr><th>CodeProd</th><th>nomProd</th><th>categProd</th><th>prixProd</th><th>qteInvent</th><th>qteCom</th></tr>";
	taille=listProds.listeProduit.length;
	for(var i=0; i<taille; i++){
		rep+="<tr><td>"+listProds.listeProduit[i].codeProd+"</td><td>"+listProds.listeProduit[i].nomProd+"</td><td>"+listProds.listeProduit[i].categProd+"</td><td>"+listProds.listeProduit[i].prixProd+"</td><td>"+listProds.listeProduit[i].qteInvent+"</td><td>"+listProds.listeProduit[i].qteCom+"</td></tr>";		 
	}
	rep+="</table>";
	$('#divLister').html(rep);
}


var prodVue=function(reponse){
	var action=reponse.action; 
	switch(action){
		case "enregistrer" :
		case "enlever" :
		case "modifier" :
			$('#messages').html(reponse.msg);
			setTimeout(function(){ $('#messages').html(""); }, 5000);
		break;
		case "lister" :
			listerF(reponse.listeProduit);
		break;
		case "fiche" :
			afficherFiche(reponse);
		break;
		case "compter" :
			resultCompter(reponse);
		break;
		case "sorter" :
			sorterP(reponse);
		break;
		
	}
}

