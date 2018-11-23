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


    $('#rangeSum').ionRangeSlider({
        grid: true,
        min: 20,
        max: 70000,
        from: 15670,
        step: 1,
        grid_num: 5,
        grid_margin: false,
        postfix: "$",
        onStart: function (data) {
            $('#sumInv').val(data.from);
        },
        onChange: function (data) {
            $('#sumInv').val(data.from);
        }

    });

    var sumRange = $('#rangeSum').data('ionRangeSlider'),
        min = 20,
        max = 70000;

    $('#sumInv').on('change keyup', function () {
        var val = $(this).prop('value');
        if (val < min){
            val = min;
        } else if (val > max){
            val = max;
        }
        sumRange.update({
            from: val
        });
    });

});