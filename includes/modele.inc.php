<?php
require_once("connexion.inc.php");
class produitModele{
	private $requete;
	private $params;
	private $connexion;
	
	function __construct($requete=null,$params=null){
			$this->requete=$requete;
			$this->params=$params;
	}
		
	function obtenirConnexion(){
		$maConnexion = new Connexion("localhost", "root", "", "bdproduits");
		$maConnexion->connecter();
		return $maConnexion->getConnexion();
	}

	function executer(){
			$this->connexion = $this->obtenirConnexion();
			$stmt = $this->connexion->prepare($this->requete);
			$stmt->execute($this->params);
			$this->deconnecter();
			return $stmt;		
		}
	function deconnecter(){
			unset($this->connexion);
	}

}//fin de la classe


?>