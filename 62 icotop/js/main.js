$(document).ready(function(){
    $(".project-list").isotope();
    
    $(".filter-project li").on('click', function(){
        $(".filter-project li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $(".project-list").isotope({
            filter: selector,
            
        });
    });
    
    
});