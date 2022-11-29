

$('.fashion-slider').slick({
    dots: true,
    arrows:false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint:768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

// top-news-slider
$('.top-news-slider').slick({
  dots: true,
  infinite: false,
  arrows:false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// tranding news slider
$('.tranding-news-slider').slick({
  dots: false,
  arrows:true,
  prevArrow:'<span class="priv_arrow"> <i class="fa fa-chevron-left" aria-hidden="true"></i> </span>',
  nextArrow:'<span class="next_arrow"> <i class="fa fa-chevron-right" aria-hidden="true"></i></spn>',
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// editor choice slider
$('.editor-choices-slider').slick({
  dots:false,
  arrows:true,
  infinite: false,
  prevArrow:'<span class="priv_arrow"> <i class="fa fa-chevron-left" aria-hidden="true"></i> </span>',
  nextArrow:'<span class="next_arrow"> <i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll:1
      }
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



// toggle navbar
const toggleBtn = document.querySelector('.toggle-button')
const navbarLink = document.querySelector('.navbar-links')

toggleBtn.addEventListener("click", () => {
  navbarLink.classList.toggle('navbar-show')
  toggleBtn.classList.toggle('toggle-close')

})


// thumbs up
const thumbUp = document.getElementById('thumbUp')
const thumbDown = document.getElementById('thumbDown')


// for time
const realTIme = document.getElementById("reaTime")
let today = new Date();

let month = today.getMonth();
    year = today.getFullYear();
   date = today.getDate();
   day = today.getDay();

var months = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
]
var days = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
]

let textMonth = months[month]
let textDay = days[day]


let currentDate = `${textDay} - ${textMonth} ${date} ${year}`
realTIme.innerText = currentDate
// console.log(currentDate)




// for weather
window.addEventListener("load", () => {
  let weatherImg = document.getElementById('weatherImg')
  
  
  const api = `http://api.weatherapi.com/v1/current.json?key=3393ab65188f4f18887123351222603&q=Kathmandu&aqi=no`;
  
  fetch(api)
  .then(response => {
    return response.json()
  })
  .then(data => {
      let name = data.location.name;
      let celsius = data.current.feelslike_c;
      let img = data.current.condition.icon;
      let weather = `${name} ${celsius}` ;
      weatherImg.src = img;
      // console.log(data);
      // console.log(weatherImg.src);
      
      
      realWeather.innerText = weather


    })
  
  

})
				