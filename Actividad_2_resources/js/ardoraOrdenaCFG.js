var timeAct=30; timeIni=30; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=2;
var score=0; scoreMax=40; scoreInc=10; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=1; scoOkDo=0; scoWrongDo=1; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitaciones"; messageTime="15s"; messageError="Que falla, Intenta de Nuevo"; messageErrorG="Que falla, Intenta de Nuevo"; messageAttempts="2"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWN0aXZpZGFkXzI"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Q29udHJvbCBkZSB2ZXJzaW9uZXM","U2lzdGVtYXMgZGUgQ29udHJvbCBkZSBWZXJzaW9uZXMgTG9jYWxlcw","UmVwb3NpdG9yaW8","RGlzZfFvIFdlYg",""];imaW=["","","","",""];queW=["","","","",""]; c=[20,40,11,10,0];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="400";indexG=0;profG=0;dirMedia="Actividad_2_resources/media/"; textBNext="siguiente";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];
