let inpBox=document.getElementById('inp');
let subbtn=document.getElementById('btn');

let movImg=document.getElementById('movies');

subbtn.addEventListener('click', (e) => {
    let inpVal = inpBox.value;
    // console.log(inpVal);

    fetch(`https://imdb.iamidiotareyoutoo.com/justwatch?q=${inpVal}`)
        .then((res) => {
            
            return res.json();
        })
        .then((data) => {
            console.log(data);
            let movies = data.description;
            console.log(movies);
            movies.map((movie) => {
                let imgUrl = movie.photo_url[0];
                let title = document.createElement('h2');
                title.innerText = movie.title;
                let img = document.createElement('img');
                img.src = imgUrl;

                img.classList.add('img');
                movImg.appendChild(img);
                movImg.appendChild(title);
            });
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});