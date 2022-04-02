

clicker = false;

function clickButton (element)
{
  console.log("entered function");
  if (clicker == false)
  {
    element.innerHTML="Click For Less";
    var all = document.getElementsByClassName('more');
    for (var i = 0; i < all.length; i++) {
      all[i].style.display = 'inline'; }
    var all = document.getElementsByClassName('dots');
    for (var i = 0; i < all.length; i++) {
        all[i].style.display = 'none'; }
    clicker = true;
  }
  else {
    element.innerHTML="Click For More";
    var all = document.getElementsByClassName('more');
    for (var i = 0; i < all.length; i++) {
      all[i].style.display = 'none'; }
    var all = document.getElementsByClassName('dots');
    for (var i = 0; i < all.length; i++) {
        all[i].style.display = 'inline'; }
    clicker = false;
  }
}


//poppers

function popBox (id)
{
  document.getElementById(id).style.display="block";

}

function closePopBox (id)
{
  document.getElementById(id).style.display="none";
}

function hoveringClose (element)
{
  element.style.backgroundColor = "rgba(100%,100%,100%,0.5)";
  element.style.color = "black";
  element.style.borderColor = "rgba(100%,100%,100%,0.5)";
}

function awayFromClose (element)
{
  element.style.backgroundColor = "rgb(234, 209, 5)";
  element.style.color = "white";
  element.style.borderColor = "black";
}

//fill table dynamically 

function resultsTable()
{
  const chars = document.getElementsByClassName("char");
  const resultsTable = document.getElementById("results");
  //results table
  for (let i = 0; i<chars.length; i++)
  {
    row = document.createElement("tr");
    cCol = document.createElement("td");
    actorCol = document.createElement("td");
    actorCol.innerText = " . . . . . . . . . .";
    let id = chars[i].innerText.slice(0,chars[i].innerText.indexOf(" "));
    id = id+ "table";
    id = id.toLowerCase();
    actorCol.id = id;
    cCol.innerText = chars[i].innerText;
    row.append(cCol);
    row.append(actorCol);
    resultsTable.append(row);
  }
}

function castSubmit (id,idtable)
{
  var proposal=document.getElementById(id).value;
  document.getElementById(id).value = null;
  document.getElementById(idtable).innerHTML = proposal;
}
