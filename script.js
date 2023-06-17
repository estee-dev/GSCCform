$(document).ready(function(){

    $('#submit1').click(function(){

        $('form').hide();
        $('.popup').show();
        $('h1').hide();
        $('p').hide();
        $('#submit1').hide();

    });

    $('#submit').click(function(){

        $('form').show();
        $('.popup').hide();
        $('h1').show();
        $('p').show();
        $('#submit1').show();

    });
})