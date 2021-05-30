API_KEY = "cdbe45e5832df33e3ca6e6c98ae147ce";

$(function(){
  $('#btn').on('click', function(){
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + "cdbe45e5832df33e3ca6e6c98ae147ce",
      dataType : 'jsonp',
    }).done(function (data){
      $('#place').text(data.name);
      $('#temp_max').text(data.main.temp_max);
      $('#temp_min').text(data.main.temp_min);
      $('#humidity').text(data.main.humidity);
      $('#speed').text(data.wind.speed);
      $('#weather').text(data.wether[0].main);
      $('img').attr("src","http://openweathermap.org/img/w/" + data.wether[0].icon + ".png");
      $('img').attr("alt",data.wether[0].main);
    }).fail(function (data){
      alert('通信に失敗しました。');
    });
  });
});