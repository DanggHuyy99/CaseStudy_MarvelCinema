let left_btn = document.getElementById('leftScroll');
let right_btn = document.getElementById('rightScroll')
let featureds = document.getElementsByClassName('featureds')[0];
let search = document.getElementsByClassName('empty_box_search')[0];
let search_input = document.getElementById('search_input');
let content = document.querySelector('.content')[0];
let h3 = document.getElementById('h3');
let download_a = document.getElementById('download');
let title = document.getElementById('tiltle');
let description = document.getElementById('description');
let logo_ul = document.getElementsByClassName('logo_ul')[0];
let container = document.getElementsByClassName('container')[0];
let cards = document.getElementById('cards');
let sec = document.getElementById('sec');
let home = document.getElementById('home');


left_btn.addEventListener('click', function () {
    featureds.scrollLeft -= 150;
})
right_btn.addEventListener('click', function () {
    featureds.scrollLeft += 150;
})


// class Posters {
//     constructor(picture, url) {
//         this.picture = picture;
//         this.url = url;
//     }
// }

// let poster = [
//     new Posters("./assest/img/spider_man__no_way_home.png",
//     "spiderman.html"),
//     new Posters("./assest/img/ant_man.png",
//     "antman.html"),
//     new Posters("./assest/img/guardians_of_the_galaxy.png",
//     "guardianofthegalaxy.html"),
//     new Posters("./assest/img/ironman.png",
//     "ironman.html"),
//     new Posters("./assest/img/infinitiwar.png",
//     "infinitiwar.html"),
//     new Posters("./assest/img/endgame.png",
//     "endgame.html"),
//     new Posters("./assest/img/blackpanther.png",
//     "blackpanther.html"),
//     new Posters("./assest/img/hulk.png",
//     "hulk.html"),
//     new Posters("./assest/img/captainmarvel.png",
//     "captainmarvel.html"),
//     new Posters("./assest/img/thor.png",
//     "thor.html"),
//     new Posters("./assest/img/blackwidow.png",
//     "blackwidow.html"),
//     new Posters("./assest/img/civilwar.png",
//     "civilwar.html"),
//     new Posters("./assest/img/vs.png",
//     "vs.html"),
//     new Posters("./assest/img/doctor.png",
//     "doctor.html"),
//     new Posters("./assest/img/spiderver.png",
//     "spiderver.html"),
//     new Posters("./assest/img/scarletwitch.png",
//     "scarletwitch.html")
// ]

// for (let i = 0; i < poster.length; i++) {
//     featureds.innerHTML += `
//         <a  href="" class="featured">
//             <img onclick="on()" src="${poster[i].picture}" class="film" alt="">
//         </a>
//     `
// }


// let posters = [
//     {
//     piture : "./assest/img/ant_man.png".
//     htp : "antman.html";
//     }
//     {
//     picture : "./assest/img/guardians_of_the_galaxy.png"
//     url : "guardianofthegalaxy.html"
//     }
// ]





let json_url = "movie.json";

function demo() {
    localStorage.setItem("title", "test");
    window.location = 'detail.html';
}

fetch(json_url).then(Response => Response.json())
    .then((data) => {
        data.forEach(element => {
            let { name, imdb, date, picture, genre, url, description, video } = element;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = '#';

            card.onclick = function () {
                localStorage.setItem("description", element.description);
                localStorage.setItem("title", element.name);
                localStorage.setItem("date", element.date);
                localStorage.setItem("category", element.genre);
                localStorage.setItem("video", element.video);
                window.location = 'detail.html';
            }
            card.innerHTML = `
        <img src="${picture}" alt="">
                        <div class="cont">
                            <h3>${name}</h3>
                            <p>${genre}, ${date} , <span>IMDB </span><i class="bi bi-star-fill"></i> ${imdb}</p>
                        </div>
        `
            search.appendChild(card);

            let imgages = document.createElement('a');
            imgages.classList.add('featured');

            imgages.onclick = function () {
                console.log("image click");
                localStorage.setItem("description", element.description);
                localStorage.setItem("title", element.name);
                localStorage.setItem("date", element.date);
                localStorage.setItem("category", element.genre);
                localStorage.setItem("video", element.video);
                window.location = 'detail.html';
            }
            imgages.innerHTML = `
            <a class="featured">
                    <img src="${picture}" class="film" alt="">
                </a>
        `
            featureds.appendChild(imgages);
        })

        // search = document.getElementsByClassName('Search')[0];
        // let search2 = search.value.toUpperCase();
        // let search3 = search.getElementsByTagName('a');

        search_input.addEventListener('keyup', () => {
            let find = search_input.value.toUpperCase();
            let key_find = search.getElementsByTagName('a');

            for (let i = 0; i < key_find.length; i++) {
                let found = key_find[i].getElementsByClassName('cont')[0];
                // console.log(key_find[i].textContent);

                let textValue = found.textContent || found.innerHTML;
                // console.log(textValue.toUpperCase().indexOf(find));

                if (textValue.toUpperCase().indexOf(find) > -1) {
                    key_find[i].style.display = "flex";
                    search.style.visibility = "visible";
                    search.style.opacity = 1;
                } else {
                    key_find[i].style.display = "none";
                }
                if (textValue.toUpperCase().indexOf(find) == 0) {
                    key_find[i].style.display = "flex";
                    search.style.visibility = "hidden";
                    search.style.opacity = 0;
                }
            }
        });

        let hot = document.getElementById('hot');
        hot.addEventListener('click', () => {
            featureds.innerHTML = '';
            let video_background = document.getElementsByClassName('video')[0];
            video_background.style.display = "none";
        });
    })


function on() {
    localStorage.setItem("description", element.description);
    localStorage.setItem("title", element.name);
    window.location = 'detail.html';
}

function on(url) {
    window.open(url, '_self')
}

let video = document.getElementsByTagName('video')[0];
let play = document.getElementById('play');

play.addEventListener('click', () => {
    console.log({pause: video.paused})
    if (video.paused) {
        video.play();
        play.innerHTML = `Pause <i class="bi bi-pause-circle"></i>`;
        featureds.style.display = 'none';
        h3.style.display = 'none';
        download_a.style.display = 'none';
        logo_ul.style.display = 'none';
        search.style.display = 'none';
        container.style.display = 'none';
        cards.style.display = 'none';
        play.style.animation = 'none';
        sec.document.display = 'none';
    } else {
        video.pause();
        play.innerHTML = `Play <i class="bi bi-play-circle">`;
        // sec.document.display = 'none';
        h3.style.display = 'none';
        download_a.style.marginRight = 75 + 'px';
        download_a.style.display = 'inline-flex';
        logo_ul.style.display = 'inline-flex';
        container.style.display = 'inline-flex';
        play.style.animation = 'play_and_download 1.5s infinite ease-in';
    }
})




