//application.js
$(function(){
    $('.badge').each(function(index){
        switch(index % 7) {
            case 0:
                $(this).addClass('badge-primary');
                break;
            case 1:
                $(this).addClass('badge-secondary');
                break;
            case 2:
                $(this).addClass('badge-success');
                break;
            case 3:
                $(this).addClass('badge-danger');
                break;
            case 4:
                $(this).addClass('badge-warning');
                break;
            case 5:
                $(this).addClass('badge-light');
                break;
            case 6:
                $(this).addClass('badge-dark');
                break;f
        }
    });
});