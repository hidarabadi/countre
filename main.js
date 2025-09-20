const countri = document.getElementById("countri");

fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,cca3"
).then((res) => {
    return res.json()
}).then((data) => {
    data.forEach((value) => {
        countri.innerHTML += `<li>
        <div>
        <img src=${value.flags.png} alt="">        
        </div>
        <div>
        <span>${value.name.common}</span>
         <p>popolashan:${value.population} </p>
        <p>ragen:${value.ragen}</p>
        <p>capital: ${value.capital[0]}</p>
        </div>
        </li>`

    })
     
})