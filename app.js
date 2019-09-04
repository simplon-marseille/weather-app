$('form').hide();
$('form').fadeIn();
document.querySelector('#userInput').focus();
const header = document.querySelector('.header');
const send = document.querySelector('#send');
const response = document.querySelector('#result h1');

const convertToCelcius = (temperatureInKelvin) => {
  return temperatureInKelvin - 273.15;
};

const getWeather = (ville) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&APPID=d578d6888b57e79f878b7d5bf8517065`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const temperature = data.main.temp
      const tempInCelcius = convertToCelcius(temperature);
      response.innerHTML = '';
      response.classList.add('form-background')
      response.insertAdjacentHTML('beforeend', `${data.name} - ${tempInCelcius.toFixed(2)}° - ${data.weather[0].description.toUpperCase()}`);
      //document.write(tempInCelcius);
      //switch()
      if (tempInCelcius < 20){
        // const body = document.querySelector('body');
        console.log(header);
        $('.header').addClass('header-automne').hide();
        $('.header').addClass('header-automne').fadeIn();
        //header.classList.add('header-automne');
        header.classList.remove('header-start', 'header-été', 'header-hivers', 'header-pringtemps');
      }else{
        // const body = document.querySelector('body');
        $('.header').addClass('header-automne').hide();
        $('.header').addClass('header-été').fadeIn();
        //header.classList.add('header-été');
        header.classList.remove('header-start', 'header-hivers', 'header-pringtemps', 'header-automne');
      };
    });
};

send.addEventListener('click', (event) => {
    event.preventDefault();
    const form = document.querySelector('form');
    form.classList.add('form-background');
    const userInput = document.querySelector('#userInput').value;
    getWeather(userInput);
});

