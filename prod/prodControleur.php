<?php
	require_once("../includes/modele.inc.php");
	$tabRes=array();
	function enregistrer(){
		global $tabRes;	
		$nomProd=$_POST['nomProduit'];
		$categProd=$_POST['categor'];
		$prixProd=$_POST['prix'];
		$qteInvent=$_POST['invent'];
		$qteCom=$_POST['qteCom'];
		try{
			$requete="INSERT INTO produits VALUES(0,?,?,?,?,?)";
			$unModele=new produitModele($requete,array($nomProd,$categProd,$prixProd,$qteInvent,$qteCom));
			$stmt=$unModele->executer();
			$tabRes['action']="enregistrer";
			$tabRes['msg']="Produit bien enregistre";
		}catch(Exception $e){
			$tabRes['msg']="Produit n'est pas enregistre";
		}finally{
			unset($unModele);
		}
	}
	
	function lister(){
		global $tabRes;
		$tabRes['action']="lister";
		$requete="SELECT * FROM produits";
		try{
			 $unModele=new produitModele($requete,array());
			 $stmt=$unModele->executer();
			 $tabRes['listeProduit']=array();
			 while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
			    $tabRes['listeProduit'][]=$ligne;
			}
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}
	
	function sorter(){
		global $tabRes;
		$categProd=$_POST['categProd'];
		$tabRes['action']="sorter";
		$requete="SELECT * FROM produits WHERE categProd = ?";
		try{
			 $unModele=new produitModele($requete,array($categProd));
			 $stmt=$unModele->executer();
			 $tabRes['listeProduit']=array();
			 while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
			    $tabRes['listeProduit'][]=$ligne;
			}
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}
	
	function compter(){
		global $tabRes;
		$tabRes['action']="compter";
		$requete="SELECT COUNT(*) as summa FROM produits WHERE prixProd > ?";
		try{
			 $unModele=new produitModele($requete,array(100));
			 $stmt=$unModele->executer();
			 $ligne=$stmt->fetch(PDO::FETCH_OBJ);
			 $tabRes['nombre']=$ligne;
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}
	
	function enlever(){
		global $tabRes;	
		$id=$_POST['id'];
		try{
			$requete="SELECT * FROM produits WHERE codeProd=?";
			$unModele=new produitModele($requete,array($id));
			$stmt=$unModele->executer();
			if($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
				$requete="DELETE FROM produits WHERE codeProd=?";
				$unModele=new produitModele($requete,array($id));
				$stmt=$unModele->executer();
				$tabRes['action']="enlever";
				$tabRes['msg']="Produit ".$id." bien enleve";
			}
			else{
				$tabRes['action']="enlever";
				$tabRes['msg']="Film ".$id." introuvable";
			}
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}
	
	function fiche(){
		global $tabRes;
		$id=$_POST['id'];
		$tabRes['action']="fiche";
		$requete="SELECT * FROM produits WHERE codeProd=?";
		try{
			 $unModele=new produitModele($requete,array($id));
			 $stmt=$unModele->executer();
			 $tabRes['fiche']=array();
			 if($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
			    $tabRes['fiche']=$ligne;
				$tabRes['OK']=true;
			}
			else{
				$tabRes['OK']=false;
			}
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}
	
	function modifier(){
		global $tabRes;	
		$titre=$_POST['titreF'];
		$duree=$_POST['dureeF'];
		$res=$_POST['resF'];
		$idf=$_POST['idf']; 
		try{
			//Recuperer ancienne pochette
			$requette="SELECT pochette FROM films WHERE idf=?";
			$unModele=new filmsModele($requette,array($idf));
			$stmt=$unModele->executer();
			$ligne=$stmt->fetch(PDO::FETCH_OBJ);
			$anciennePochette=$ligne->pochette;
			$pochette=$unModele->verserFichier("pochettes", "pochette",$anciennePochette,$titre);	
			
			$requete="UPDATE films SET titre=?,duree=?, res=?, pochette=? WHERE idf=?";
			$unModele=new filmsModele($requete,array($titre,$duree,$res,$pochette,$idf));
			$stmt=$unModele->executer();
			$tabRes['action']="modifier";
			$tabRes['msg']="Film $idf bien modifie";
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}
	//******************************************************
	//Contrôleur
	$action=$_POST['action'];
	switch($action){
		case "enregistrer" :
			enregistrer();
		break;
		case "lister" :
			lister();
		break;
		case "enlever" :
			enlever();
		break;
		case "fiche" :
			fiche();
		break;
		case "modifier" :
			modifier();
		break;
		case "compter" :
			compter();
		break;
		case "sorter" :
			sorter();
		break;
	}
    echo json_encode($tabRes);
?>