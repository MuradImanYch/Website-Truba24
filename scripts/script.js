let barToggle = false;

$(document).ready(() => {
    $('.barsWrap').click(() => { // menu bar anim func
        barToggle = !barToggle;
        if(barToggle) {
            $('header .barsWrap .bar3').css({display: 'none'});
            $('header .barsWrap .bar1').css({transform: 'translate(0, 8px) rotate(45deg)'}).css({width: '30px'}).css({background: '#1D5DB5'});
            $('header .barsWrap .bar2').css({transform: 'rotate(-45deg)'}).css({width: '30px'}).css({background: '#1D5DB5'});
            $('nav').slideDown();
        }
        else {
            $('header .barsWrap .bar1').css({transform: 'translate(0, 0) rotate(0deg)'}).css({width: '35px'}).css({background: '#000'});
            $('header .barsWrap .bar2').css({transform: 'rotate(0deg)'}).css({width: '35px'}).css({background: '#000'});
            $('header .barsWrap .bar3').fadeIn(700).css({display: 'block'}).css({transform: 'rotate(-180deg)'}).css({width: '35px'}).css({background: '#000'});
            $('nav').slideUp();
        }
    });

    if($(window).width() <= 1024) { // brakepont | for <p> text
        $('#map p').text('Двигайте карту пальцем и нажмите на нужныйрегион');
    }
    else {
        $('#map p').text('Наведите на регион и кликните по нему');
    }

    $('path').hover(function(e){ // interactive map
      $('.indicator p').css({lineHeight: '20px'}).css({textAlign: 'center'}).css({margin: '-50px 0 0 10px'});
        if($(this).attr('name')) {
          var name = $(this).attr('name');
          $('#map .indicator p').text(name);
        }
        $(this).css('fill','#4f90ff');
        $('path').not(this).css('fill','rgba(145, 182, 255, 0.5)');

        if(e.pageX > $(window).width() / 2) { // right / left handle
          $('.indicator').css({borderRight: '1px solid #000'}).css({borderLeft: '0px solid #000'}).css({transform: 'skew(45deg)'}).css({'top':e.pageY,'left':e.pageX-150}).show();
          $('.indicator p').css({transform: 'skew(-45deg)'});
        }
        else {
          $('.indicator').css({borderLeft: '1px solid #000'}).css({borderRight: '0px solid #000'}).css({transform: 'skew(-45deg)'}).css({'top':e.pageY,'left':e.pageX+70}).show();
          $('.indicator p').css({transform: 'skew(45deg)'});
        }
        if($(window).width() >= 1024) {
          if(e.pageX > $(window).width() / 2) { // left / right handle
            $('.indicator').css({'top':e.pageY,'left':e.pageX-250}).show();
          }
          else {
            $('.indicator').css({'top':e.pageY,'left':e.pageX+70}).show();
          }
        }
      
      
      },function(){
        $('.indicator p').html('');
        $('.indicator').hide();
        $('path').css('fill','rgba(0,0,0,0.2)');
      });
  
      var idAarr2 = new Array(
        ["RU-MOW",  "Москва", "moscow.gif"],
        ["RU-CHE", "Челябинская область", "chelyabinskaya_flag.png" ],
        ["RU-ORL",  "Орловская область"],
        ["RU-OMS",  "Омская область", "flag_omskoj_oblasti.png"],
        ["RU-LIP",  "Липецкая область", "lipeckya.jpg"],
        ["RU-KRS",  "Курская область", "flag_of_kursk_oblast.png"],
        ["RU-RYA",  "Рязанская область", "ryazan.png"],
        ["RU-BRY",  "Брянская область", "bryanskaya_flag.png"],
        ["RU-KIR",  "Кировская область", "flag_kirovskoy_oblasti.png"],
        ["RU-ARK",  "Архангельская область", ""],
        ["RU-MUR",  "Мурманская область", ""],
        ["RU-SPE",  "Санкт-Петербург", ""],
        ["RU-YAR",  "Ярославская область", ""],
        ["RU-ULY",  "Ульяновская область", ""],
        ["RU-NVS",  "Новосибирская область", ""],
        ["RU-TYU",  "Тюменская область", ""],
        ["RU-SVE",  "Свердловская область", ""],
        ["RU-NGR",  "Новгородская область", ""],
        ["RU-KGN",  "Курганская область", ""],
        ["RU-KGD",  "Калининградская область", ""],
        ["RU-IVA",  "Ивановская область", ""],
        ["RU-AST",  "Астраханская область", ""],
        ["RU-KHA",  "Хабаровский край", ""],
        ["RU-CE",  "Чеченская республика", ""],
        ["RU-UD",  "Удмуртская республика", ""],
        ["RU-SE",  "Республика Северная Осетия", ""],
        ["RU-MO",  "Республика Мордовия", ""],
        ["RU-KR",  "Республика  Карелия", ""],
        ["RU-KL",  "Республика  Калмыкия", ""],
        ["RU-IN",  "Республика  Ингушетия", ""],
        ["RU-AL",  "Республика Алтай", ""],
        ["RU-BA",  "Республика Башкортостан", ""],
        ["RU-AD",  "Республика Адыгея", ""],
        ["RU-CR",  "Республика Крым", ""],
        ["RU-SEV",  "Севастополь", ""],
        ["RU-KO",  "Республика Коми", ""],
        ["RU-PNZ",  "Пензенская область", ""],
        ["RU-TAM",  "Тамбовская область", ""],
        ["RU-LEN",  "Ленинградская область", ""],
        ["RU-VLG",  "Вологодская область", ""],
        ["RU-KOS",  "Костромская область", ""],
        ["RU-PSK",  "Псковская область", ""],
        ["RU-YAN",  "Ямало-Ненецкий АО", ""],
        ["RU-CHU",  "Чукотский АО", ""],
        ["RU-YEV",  "Еврейская автономская область", ""],
        ["RU-TY",  "Республика Тыва", ""],
        ["RU-SAK",  "Сахалинская область", ""],
        ["RU-AMU",  "Амурская область", ""],
        ["RU-BU",  "Республика Бурятия", ""],
        ["RU-KK",  "Республика Хакасия", ""],
        ["RU-KEM",  "Кемеровская область", ""],
        ["RU-ALT",  "Алтайский край", ""],
        ["RU-DA",  "Республика Дагестан", ""],
        ["RU-KB",  "Кабардино-Балкарская республика", ""],
        ["RU-KC",  "Карачаевая-Черкесская республика", ""],
        ["RU-KDA",  "Краснодарский край", ""],
        ["RU-ROS",  "Ростовская область", ""],
        ["RU-SAM",  "Самарская область", ""],
        ["RU-TA",  "Республика Татарстан", ""],
        ["RU-ME",  "Республика Марий Эл", ""],
        ["RU-CU",  "Чувашская республика", ""],
        ["RU-NIZ",  "Нижегородская край", ""],
        ["RU-VLA",  "Владимировская область", ""],
        ["RU-MOS",  "Московская область", ""],
        ["RU-KLU",  "Калужская область", ""],
        ["RU-BEL",  "Белгородская область", ""],
        ["RU-ZAB",  "Забайкальский край", ""],
        ["RU-PRI",  "Приморский край", ""],
        ["RU-KAM",  "Камачатский край", ""],
        ["RU-MAG",  "Магаданская область", ""],
        ["RU-SA",  "Республика Саха", ""],
        ["RU-KYA",  "Красноярский край", ""],
        ["RU-ORE",  "Оренбургская область", ""],
        ["RU-SAR",  "Саратовская область", ""],
        ["RU-VGG",  "Волгоградская область", ""],
        ["RU-VOR",  "Ставропольский край", ""],
        ["RU-SMO",  "Смоленская область", ""],
        ["RU-TVE",  "Тверская область", ""],
        ["RU-PER",  "Пермская область", ""],
        ["RU-KHM",  "Ханты-Мансийский АО", ""],
        ["RU-KHM",  "Ханты-Мансийский АО", ""],
        ["RU-TOM",  "Томская область", ""],
        ["RU-IRK",  "Иркутская область", ""],
        ["RU-NEN",  "Ненецскй АО", ""],
        ["RU-STA",  "Ставропольский край", ""],
        ["RU-TUL",  "Тульская область", "tulskaya_flag.png"]
      
        );
        
      
      $('path').each(function() {
        var regId = $(this).attr('id');
        for (var j = 0; j < idAarr2.length; j++) {
          if (regId == idAarr2[j][0]) {
            name = idAarr2[j][1];
            $(this).attr('name', name);
          }
        }
      });
      

      let subMn1Toggle = false; // mob catalog subMenu func
      $('nav .container ul li:nth-child(1) div div').click(() => {
        subMn1Toggle = !subMn1Toggle;
        if(subMn1Toggle) {
          $('nav .container ul li:nth-child(1) .catalogSubMenu').slideDown();
          $('nav .container ul li:nth-child(1) div div').text('▲');
        }
        else {
          $('nav .container ul li:nth-child(1) .catalogSubMenu').slideUp();
          $('nav .container ul li:nth-child(1) div div').text('▼');
        }
      });

      let subMn2Toggle = false; // mob analitics subMenu func
      $('nav .container ul li:nth-child(5) div div').click(() => {
        subMn2Toggle = !subMn2Toggle;
        if(subMn2Toggle) {
          $('nav .container ul li:nth-child(5) .analiticsSubMenu').slideDown();
          $('nav .container ul li:nth-child(5) div div').text('▲');
        }
        else {
          $('nav .container ul li:nth-child(5) .analiticsSubMenu').slideUp();
          $('nav .container ul li:nth-child(5) div div').text('▼');
        }
      });

      document.querySelector('header .btnWrap button:nth-child(1)').addEventListener('click', () => { // login pop-up show func
        $('#auth').fadeIn();
        $('body').css({overflow: 'hidden'});
      });
      document.querySelector('#auth').addEventListener('click', (e) => { // login pop-up hide func
        if(e.target.id == 'authWrap' || e.target.id == 'auth') {
          $('#auth').fadeOut();
          $('body').css({overflow: 'auto'});
        }
      });

      document.querySelector('#comment .btnWrap button:nth-child(1)').addEventListener('click', () => { // login pop-up show func | articles.html
        $('#auth').fadeIn();
        $('body').css({overflow: 'hidden'});
      });

document.querySelector('#emailBtn').addEventListener('click', () => { // email pop-up show func
  $('#email').fadeIn();
  $('body').css({overflow: 'hidden'});
});
document.querySelector('#email').addEventListener('click', (e) => { // email pop-up hide func
  if(e.target.id == 'emailWrap' || e.target.id == 'email') {
    $('#email').fadeOut();
    $('body').css({overflow: 'auto'});
  }
});
    


  $('.popup-close').click(function() {
      $(this).parents('.popup-fade').fadeOut();
      return false;
  });     

  $(document).keydown(function(e) {
      if (e.keyCode === 27) {
          e.stopPropagation();
          $('.popup-fade').fadeOut();
      }
  });
  
  $('.popup-fade').click(function(e) {
      if ($(e.target).closest('.popup').length == 0) {
          $(this).fadeOut();                  
      }
  });
});