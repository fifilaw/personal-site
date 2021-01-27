<?php 

function makeAuth(){

	return[
		"localhost", //Database host location
		"aauwnm_fifi", //Database user name
		"aauwnm_fifi", //Database User password
		"aauwnm_fifi" //Database database name
	];
}

function makePDOAuth(){

	return [
		"mysql:host=localhost;dbname=aauwnm_fifi",
		"aauwnm_fifi",
		"aauwnm_fifi",
		[PDO::MYSQL_ATTR_INIT_COMMAND=>"SET NAMES utf8"]
	];
}

 ?>