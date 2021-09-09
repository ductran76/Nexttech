var numberNotification = 2;
var startNotification = 1;
function changeNotification() {
    var i;
    startNotification++;
    if (startNotification > numberNotification) {
        startNotification = 1;
    }
    for (i = 1; i <= numberNotification; i++) {
        $("#notification-" + i).fadeOut(1000);
    }

    setTimeout(function () {
        $("#notification-" + startNotification).fadeIn(4000);
    }, 3000);



}
setInterval(changeNotification, 5000);
$(document).ready(function () {
//    var i = 0;
//    $('li#item2M').click(function () {
//        i++; 
//        if (i % 2 !== 0) {
//            $('#menuMobile').addClass('showBtnMenu').removeClass('showSub');
//            $('#sub2, #sub2>.subHidden').toggleClass('showSub');
//            $('.subHidden>.menuItemSubM').click(function () {
//                $('#menuMobile').removeClass('showBtnMenu').css({'visibility': 'hidden', 'transform': 'matrix(1, 0, 0, 1, 0, -1000)', 'opacity': '0'});
//            });
//            $('#instytutItem1M,#instytutItem2M,#instytutItem3M,#instytutItem4M,#instytutItem5M,#instytutItem6M,#instytutItem7M,#instytutItem8M').click(function () {
//                $(this).parent().parent().removeClass('showSub');
//                $(this).parent().removeClass('showSub');
//            });
//            i++;
//        } else {
//            $('#sub2, #sub2>.subHidden').removeClass('showSub');
//        }
//    });
//    $('li#item1M, li#item3M, li#item4M, li#item5M, li#item6M, li#item7M, li#item8M').click(function () {
//        $('#sub2, #sub2>.subHidden').removeClass('showSub');
//    });
    $('ul.menuResponsive li a').click(function () {
        $(this).parent().find('ul.b_show').slideToggle();  
        var idBShow;
        
        
        $(this).parent().find('ul.b_show').each(function() { 
            idBShow= $(this).attr('id');
        });
        
        $('ul.b_show').each(function() { 
            if($(this).attr('id')!=idBShow){
                $(this).slideUp();
            }
        });
        
        
           
    });
});