let MYAPIKEY = "tbz114zIETMv2GysLCNE0JPkNkinaaND";
document.addEventListener("DOMContentLoaded", init);
function init(){

  document.getElementById("btn-search").addEventListener("click" ,  ev => {
    ev.preventDefault();
    let url='https://api.giphy.com/v1/gifs/search?api_key=${MYAPIKEY}&limit=10&q=&rating=';
    let str = document.getElementById("search").value.trim();
    url= url.concat(str);
    console.log(url);

  fetch(url)
    .then( Response => Response.json())
    .then( content => {
console.log ( content.data);
console.log('META' , content.meta);
    })
.catch(err =>{
  console.error(err);
})
    
  });





}