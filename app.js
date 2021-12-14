var searchclick = document.querySelector('.searchclick')
var search = document.querySelector('.search')
var temp = document.querySelector('.temp')
var prep = document.querySelector('.prep')
var icon = document.querySelector('.icon')
var desc1 = document.querySelector('.desc1')
var desc2 = document.querySelector('.desc2')



searchclick.addEventListener('click',function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+search.value+'&appid=36bb7c2312b860aa3a0b8adcd45e8215&units=metric')
      .then(response => response.json())
    //   .then(data => console.log(data))
      .then(data => {
          var tempvalue=data['main']['temp'];
          var humidity=data['main']['humidity'];
          var iconvalue=data['weather'][0]['icon'];
          var desc1value=data['weather'][0]['main'];
          var desc2value=data['weather'][0]['description'];
          temp.innerHTML = tempvalue;
          prep.innerHTML = humidity;
        //   icon.innerHTML = iconvalue;
          desc1.innerHTML = desc1value;
          desc2.innerHTML = desc2value;
          document.getElementById('iconimage').src='http://openweathermap.org/img/wn/'+iconvalue+'@2x.png'
      })

    .catch(err => alert("wrong city entered"))
})
