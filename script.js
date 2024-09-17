$('#burger-checkbox').click(function(){
    if ($("#burger-checkbox").prop("checked")){
        $('.nav').removeClass('close');
    } else {
        $('.nav').addClass('close');
        
    } 
});

scrollTo('home', 'header')
scrollTo('about', 'about')
scrollTo('stack', 'tech-stack')
scrollTo('projects', 'projects')
scrollTo('contact', 'contacts')

scrollTo('footer-home', 'header')
scrollTo('footer-about', 'about')
scrollTo('footer-stack', 'tech-stack')
scrollTo('footer-projects', 'projects')
scrollTo('footer-contact', 'contacts')


function scrollTo(from, to){
    $("#" + from).click(function() {
        $('html, body').animate({
            scrollTop: $("." + to).offset().top - 20
        }, 1000);

        if ($("#burger-checkbox").prop("checked")){
            $('#burger-checkbox').prop('checked', false);
            $('.nav').addClass('close');
        }
    });

    
}
