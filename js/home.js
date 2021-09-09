$(document).ready(function () {
    $('.plusButton').delay(1000).fadeIn(3000).css('z-index', '9');
    $('.wait-show').delay(1000).fadeIn(3000);    
    $('li.menuLeftDestop, li.menuItemMobile').click(function () {
        $('.plusButton').hide();
    });
});
function showHideDiv(id) {
    var idCheck;
    $('.plusButton').each(function () {
        idCheck = $(this).attr('id');

        if (idCheck !== id + '-button') {
            $(this).find('.plusContent').hide();
            $(this).find('.change-hover').css("background-image", "url('images/addbutton/" + idCheck + ".png')");
        }
    });


    var obj = document.getElementById(id);
    if (obj.style.display === "none") {
        $('#' + id).fadeToggle(600);
        $('#' + id + '-button').find('.change-hover').css("background-image", "url('images/addbutton/" + id + "-button-hover.png')");
    } else if (obj.style.display === "block" || obj.style.display === "") {
        $('#' + id).fadeToggle(800);
        $('#' + id + '-button').find('.change-hover').css("background-image", "url('images/addbutton/" + id + "-button.png')");
    }
}
function loadPlusButton()
{
    var widthForm;
    var x;
    var y;
    var menuRight = $('#menuRight').width();

    if ($(window).height() < $(window).width()) {
        widthForm = 0.9 * $(window).height();
        x = ($(window).width() - menuRight - 80) / 2 - 10;
        y = $(window).height() / 2;
    } else {
        widthForm = 0.9 * $(window).width();
        x = ($(window).width() - 80) / 2 - 10;
        y = ($(window).height() - menuRight) / 2;
    }

    var heightForm = widthForm;

    var r = heightForm / 2;

    var rightForm = x - widthForm / 2;
    var topForm = y - heightForm / 2;

    var topButton;
    var rightButton;

//    $('#addbotton').css('display', 'block');
    $('#addbotton').css('height', heightForm + 'px');
    $('#addbotton').css('position', 'fixed');
    $('#addbotton').css('right', rightForm + 'px');
    $('#addbotton').css('top', topForm + 'px');
    $('#addbotton').css('width', widthForm + 'px');
    $('#addbotton').css('border-radius', '100000px');

    var i, x1, y1, time;
    var topButton = [];
    var rightButton = [];

    with (Math) {
        for (i = 1; i <= 11; i++) {
            y1 = r * sin(i * 3 * PI / 22 + 71 * PI / 42);
            x1 = r * cos(i * 3 * PI / 22 + 71 * PI / 42);
            x1 = Math.abs(x1);
            y1 = Math.abs(y1);

            switch (i) {
                case 1:
                    rightButton[i] = r - x1;
                    topButton[i] = r + y1;
                    break;
                case 2:
                    rightButton[i] = r - x1;
                    topButton[i] = r + y1;
                    break;
                case 3:
                    rightButton[i] = r - x1;
                    topButton[i] = r - y1;
                    break;
                case 4:
                    rightButton[i] = r - x1;
                    topButton[i] = r - y1;
                    break;
                case 5:
                    rightButton[i] = r - x1;
                    topButton[i] = r - y1;
                    break;

                case 6:
                    rightButton[i] = x1 + r;
                    topButton[i] = r - y1;
                    break;
                case 7:
                    rightButton[i] = x1 + r;
                    topButton[i] = r - y1;
                    break;
                case 8:
                    rightButton[i] = x1 + r;
                    topButton[i] = r - y1;
                    break;
                case 9:
                    rightButton[i] = x1 + r;
                    topButton[i] = r - y1;
                    break;
                case 10:
                    rightButton[i] = x1 + r;
                    topButton[i] = r + y1;
                    break;
                case 11:
                    rightButton[i] = x1 + r;
                    topButton[i] = r + y1;
                    break;
            }


        }
    }



    $('#firstadd-button').css({'top': topButton[1] + 'px', 'right': rightButton[1] + 'px'});

    $('#secondadd-button').css({'top': topButton[2] + 'px', 'right': rightButton[2] + 'px'});
    $('#thirdadd-button').css({'top': topButton[3] + 'px', 'right': rightButton[3] + 'px'});
    $('#fourthadd-button').css({'top': topButton[4] + 'px', 'right': rightButton[4] + 'px'});
    $('#fifthadd-button').css({'top': topButton[5] + 'px', 'right': rightButton[5] + 'px'});
    $('#sixthadd-button').css({'top': topButton[6] + 'px', 'right': rightButton[6] + 'px'});
    $('#seventhadd-button').css({'top': topButton[7] + 'px', 'right': rightButton[7] + 'px'});
    $('#eighthadd-button').css({'top': topButton[8] + 'px', 'right': rightButton[8] + 'px'});
    $('#ninthadd-button').css({'top': topButton[9] + 'px', 'right': rightButton[9] + 'px'});
    $('#tenthadd-button').css({'top': topButton[10] + 'px', 'right': rightButton[10] + 'px'});
    $('#eleventhadd-button').css({'top': topButton[11] + 'px', 'right': rightButton[11] + 'px'});

    i = 0;
    $(".plusButton").each(function () {
        i++;
        time = i * 500;
        $(this).fadeIn(time);
    });

}
loadPlusButton();


history.pushState(null, document.title, location.href);
window.addEventListener('popstate', function (event)
{
    history.pushState(null, document.title, location.href);
});