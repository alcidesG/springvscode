<?php

$respMessage="";

switch ($_GET["HTTP_ACCEPT"]){
    case "application/jason":
        $respMessage=json_encode(my-tests.http);
        header("Content-type: application/json");
        break;

    case "txt/xml":
        $respMessage="<?xml version\"1.0\"?>\n";
        header("Content-type: txt/xml");
        break;

    default: http_response_code(406);
}
