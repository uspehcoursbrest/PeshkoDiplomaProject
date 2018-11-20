$(document).ready(function (){
    function clock() {
        var date = new Date(),
            day = date.getDate(),
            month = date.getMonth(),
            monthArr = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            year = date.getFullYear(),
            hour = date.getHours(),
            min = date.getMinutes();

        if (day < 10) day = "0" + day;
        if (hour < 10) hour = "0" + hour;
        if (min < 10) min = "0" + min;

        document.getElementById("date").innerHTML = day + " " + monthArr[month] + " " + year;
        document.getElementById("time").innerHTML = hour + ":" + min;
    }

    var timer;

    function clockStart() {
        timer = setInterval(clock, 60000);
        clock();
    }

    clockStart();

    var btnUp = $('.up');

    btnUp.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500){
            btnUp.fadeIn();
        } else{
            btnUp.fadeOut ();
        }
    });

    btnUp.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


    $('.listInvestment').owlCarousel({
        margin: 40,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<",">"],
        loop: true

    });

});