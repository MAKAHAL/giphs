


function makah(){
// my api number plus the link giphy provided
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=tbz114zIETMv2GysLCNE0JPkNkinaaND&limit=10");
xhr.done(function(result) 
{ console.log("success got data", result); });
// a loop for my images but it's not working
let makahs= result.data
for(i in makahs){

$('.loop').append('')


}


}