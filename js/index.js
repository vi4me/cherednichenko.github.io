window.onload = function(){

    const img = [
        'autumn-219972_1280.jpg',
        'california-1751455_1280.webp',
        'fantasy-3077928_1280.webp',
        'feather-3010848_1280.webp',
        'pexels-photo-1402787.jpeg',
        'pexels-photo-853199.jpeg'
    ];

    let count = img.length;

    function init() {
        let cards = document.querySelectorAll('.card');
        shuffle(img);
        for (let i = 0; i < img.length; i++) {
            let card = document.createElement('div');
            card.classList.add('card');
            card.style.background = 'url("./images/' + img[i] + '")';
            card.style.backgroundSize = 'cover';
            card.style.transform = 'rotate(' + randomInteger(-15, 15) + 'deg) ' + 'translate(' + randomInteger(-40, 40) + 'px,' + randomInteger(-40, 40) + 'px)';
            // card.style.transform = ;
            document.querySelector('.cover').append(card);
        }
    }

    init();

    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    document.querySelector('.cover').addEventListener('click', event => {
        console.log(event.target);
        event.target.classList.add('go');
        count--;
        if (count == 0) {
            init();
            count = img.length;
        }
    });

    // *********************************

    // let getJSON = function(url, callback){
    //     let xhr = new XMLHttpRequest();
    //     xhr.open('GET', url, true);
    //     xhr.responseType = 'json';
    //     xhr.onload = function(){
    //         let status = xhr.status;
    //         if (status === 200) {
    //             callback(null, xhr.response)
    //         }
    //         else {
    //             callback(status, xhr.response);
    //         }
    //     };
    //     xhr.send();
    // }

    // getJSON('https://spreadsheets.google.com/feeds/list/13gQsTyLTTpis0IUKm6rfPyDHNd-aFUPHQcN89O6hYAY/od6/public/values?alt=json', function(err, data){
    //     if (err !== null) {
    //         alert ('Error: '+err);
    //     }
    //     else {
    //         data = data ['feed']['entry'];
                  
    //             // document.querySelector('.advantages-box').innerHTML = showAnoserProducts(data);

    //     }
    // });
    
    // function showAnoserProducts(data) {
    //     let out = '';
    //     for(var i=0; i<data.length; i++){
    //         if (data[i]['gsx$show2']['$t']!=0){
    //             out += `<div class="advantages-box__info">`;
    //             out += `<div class="advantages-box__title">`;
    //             out += `${data[i]['gsx$name2']['$t']}</div>`;
    //             out += `<div class="advantages-box__text">`
    //             out += `<p>${data[i]['gsx$description']['$t']}</p>`
    //             out += `</div>`
    //             out += `<div class="advantages-box__images">`
    //             out += `<img src="${data[i]['gsx$image2']['$t']}" alt="member-1">`
    //             out += `</div>`
    //             out += `</div>`
                 
    //         }
    //     }
    //     return out;
    // }

}
      

TweenMax.to(".title-1", 2, {
            x: 30,
            opacity: 1,
            ease: Expo.easeInOut
            });

            TweenMax.to(".title-2", 2, {
            delay: 0.2,
            x: -80,
            opacity: 1,
            ease: Expo.easeInOut
            });

            TweenMax.from(".runner", 2, {
            delay: 1.6,
            x: -80,
            opacity: 0,
            ease: Expo.easeInOut
            });

            TweenMax.from(".box-1", 4, {
            delay: 1,
            rotation: 200,
            transformOrigin: "50% 50%",
            opacity: 0,
            x: -180,
            ease: Expo.easeInOut
            });

            TweenMax.from(".box-2", 4, {
            delay: 1.2,
            rotation: 90,
            transformOrigin: "50% 50%",
            opacity: 0,
            x: -180,
            ease: Expo.easeInOut
            });

            TweenMax.from(".box-3", 4, {
            delay: 1,
            rotation: 180,
            transformOrigin: "50% 50%",
            opacity: 0,
            x: -180,
            ease: Expo.easeInOut
            });

            TweenMax.from(".pattern", 2, {
            delay: 0.8,
            width: 0,
            opacity: 0,
            ease: Expo.easeInOut
            });

            TweenMax.from(".logo", 2, {
            delay: 1.6,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
            });

            TweenMax.staggerFrom(".menu ul li", 2, {
            delay: 1.6,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      }, 0.1);

            TweenMax.from(".cart", 2, {
            delay: 1.7,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
            });

            TweenMax.staggerFrom(".media ul li", 2, {
            delay: 2,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      }, 0.1);

            TweenMax.from(".content p", 2, {
            delay: 2.4,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
            });

            TweenMax.from(".content button", 2, {
            delay: 2.6,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
            });
