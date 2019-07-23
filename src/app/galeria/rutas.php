<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$outp = "";
$ruta = "../../assets/img";
if (is_dir($ruta)){
	$gestor = opendir($ruta);
while (($archivo = readdir($gestor)) !== false)  {
		if (is_file($ruta."/".$archivo)) {
			$outp .='{"ruta":"' .$ruta."/".$archivo. '"}';
		}
		$outp ='{"records":['.$outp.']}';
}
}
closedir($gestor);
echo($outp);
?>
