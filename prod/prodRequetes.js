//requêtes films
function enregistrer(){
	var formProd = new FormData(document.getElementById('formEnreg'));
	formProd.append('action','enregistrer');
	$.ajax({
		type : 'POST',
		url : 'prod/prodControleur.php',
		data : formProd,
		dataType : 'json', //text pour le voir en format de string
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					prodVue(reponse);
		},
		fail : function (err){
		   
		}
	});
}

function lister(){
	$('#divLister').html("");
	hideAllExcept('divLister');
	var formProd = new FormData();
	formProd.append('action','lister');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'prod/prodControleur.php',
		data : formProd,
		contentType : false,
		processData : false,
		dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					prodVue(reponse);
		},
		fail : function (err){
		}
	});
}

function compter(){
	$('#compterResultat').html("");
	var formProd = new FormData();
	formProd.append('action','compter');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'prod/prodControleur.php',
		data : formProd,
		contentType : false,
		processData : false,
		dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					prodVue(reponse);
		},
		fail : function (err){
		}
	});
}

function enlever(){
	var leForm=document.getElementById('formEnlever');
	var formProd = new FormData(leForm);
	formProd.append('action','enlever');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'prod/prodControleur.php',
		data : formProd,//leForm.serialize(),
		contentType : false, //Enlever ces deux directives si vous utilisez serialize()
		processData : false,
		dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					prodVue(reponse);
		},
		fail : function (err){
		}
	});
}

function rechercher(){
	$('#divLister').html("");
	$('#divRecherche').hide();
	var leForm=document.getElementById('formRecherche');
	var formProd = new FormData(leForm);
	formProd.append('action','fiche');
	$.ajax({
		type : 'POST',
		url : 'prod/prodControleur.php',
		data : formProd,
		contentType : false, 
		processData : false,
		dataType : 'json', 
		success : function (reponse){//alert(reponse);
					prodVue(reponse);
		},
		fail : function (err){
		}
	});
}
function sorter(){
	$('#divSorter').hide();
	$('#divLister').html("");
	var leForm=document.getElementById('formSorter');
	var formProd = new FormData(leForm);
	formProd.append('action','sorter');
	$.ajax({
		type : 'POST',
		url : 'prod/prodControleur.php',
		data : formProd,
		contentType : false, 
		processData : false,
		dataType : 'json', 
		success : function (reponse){//alert(reponse);
					prodVue(reponse);
		},
		fail : function (err){
		}
	});
}