let data=[]
const getdata= async (link)=>{
    let response= await fetch(link)
    let responsedata= await response.json()
    return responsedata;
}
content.innerHTML=`<div class="alert alert-warning" role="alert">Search for country.... <\div>`
getdata("https://restcountries.eu/rest/v2/all")
.then((e)=>{
        data=e
        if(data===null || data===undefined || data.length===0){
            Content.innerHTML="No Data"
        }
        else{
            
        }
    })
    .catch((err)=>{
        console.log(err.message);
    })
    document.querySelector('#search').addEventListener('input',(event)=>{
        let content = document.querySelector('#content')
        let finalData=data.filter((country)=>country.name.toLowerCase().startsWith(event.target.value.toLowerCase()))
        if(finalData.length===0)
        {
            content.innerHTML=`<div class="alert alert-danger text-primary" role="alert">Wrong input   <\div>`
        }
        else{
            content.innerHTML=" "
    finalData.map((country)=>{content.innerHTML +=
        `
            <div class="card mx-4 my-4  border-3 border-dang" style="width: 18rem;">
            <div class="card-header text-center">
                        ${country.alpha2Code}
            </div>            
                <img src="${country.flag}" class="card-img-top" >
                <div class="card-body border-primary">
                  <h5 class="card-title ">Name  : ${country.name}</h5>
                  <h5 class="card-text">Capital : ${country.capital}</h5>
                  <h5 class="card-text">Reigion : ${country.region}</h5>
                  <h5 class="card-text">Sub-region : ${country.subregion}</h5>
                  <h5 class="card-text">Population : ${country.population}</h5>
                  <h5 class="card-text">Timezone  : ${country.timezones}</h5>
                  <h5 class="card-text">Currency  : ${country.currencies[0].name}</h5>
                  <a href="#" class="btn btn-primary">More details</a>
                </div>
              </div>  
    `
    })

        }
    
    
})