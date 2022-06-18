const api="https://date.nager.at/api/v3/publicholidays/2017/AT";

async function viewActors() {
    const response = await fetch(api)
    const data = await response.json();
    console.log(data);

    print(data);   
}


function print(data) {
    const header= document.querySelector("#header");
    const content= document.querySelector("#content");
  
    header.innerHTML += `
    <select class = "form-control" onchange = "getActor(this.value)">
    <option> Select Actor </option> ${data.map( day=> `<option>${day.localName}</option>`)}
     </select>`
}

async function getActor(params) {
  console.log(params);

    const response = await fetch(`https://date.nager.at/api/v3/CountryInfo/AT`)
    const data = await response.json();
    console.log(data);
    content.innerHTML+=`<h2> Country: ${data.commonName} </h2>
    <h2 style=" color: rgb(255, 141, 2);
    font-size: 30px; padding-top: 20px;" >
    This day is popular in : ${data.region}</h2>`    
   
}

viewActors();
