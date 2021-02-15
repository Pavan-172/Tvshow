let searchQ = document.getElementById('search-input');
let searchB = document.getElementById('search-btn');
let outerdiv = document.createElement('div')
outerdiv.classList.add("outer-div");
searchB.addEventListener('click',(e)=>{
    e.preventDefault();
    outerdiv.innerHTML=''
    let query = searchQ.value;
    let uri = `https://api.tvmaze.com/search/shows?q=${query}`;
    async function tvshow(){
        try{
            let tv = await fetch(uri)
        return await tv.json();
        } catch(error){
            console.log(error)
        }
        
    }
    tvshow().then((data) => {
        console.log(data)
        data.forEach((item)=>{
            console.log(item)
            let innerdiv = document.createElement('div')
            innerdiv.classList.add('inner-div')
            let obj = item.show;
            let img = document.createElement('img')
            img.src = obj.image.medium;
            let genre = document.createElement('p')
            genre.innerText=`Genre: ${obj.genres}`;
            let title = document.createElement('h3')
            title.innerText=obj.name;
            let premiered = document.createElement('p')
            premiered.innerText=`premiered: ${obj.premiered}`;
            let country = document.createElement('p')
            country.innerText=`country: ${obj.network.country.name}`;
            let daily = document.createElement('p')
            daily.innerText=`schedule: ${obj.schedule.time}`;

            outerdiv.appendChild(innerdiv)
            innerdiv.appendChild(img)
            innerdiv.appendChild(title)           
            innerdiv.appendChild(genre)
            innerdiv.appendChild(premiered)
            innerdiv.appendChild(country)
            innerdiv.appendChild(daily)
            document.body.appendChild(outerdiv)
        })
    })
})