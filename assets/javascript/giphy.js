let APIKEY = 'tbz114zIETMv2GysLCNE0JPkNkinaaND';
document.addEventListener("DOMContentLoaded", init);
function init(){

  document.getElementById("btn-search").addEventListener("click" ,  ev => {
    ev.preventDefault();
    let URL='https://api.giphy.com/v1/gifs/search?api_key:${APIKEY}&limit=10&q=';
    // my api won't work. i dk why.
    let str = document.getElementById("search").value.trim();
    URL= URL.concat(str);
    console.log(URL);

  fetch (URL)
    .then( Response => Response.json() )
    .then( content => {
console.log (content.data);
console.log('META' , content.data);
    })
.catch(err=>{
  console.error(err);
})
    
  });





}