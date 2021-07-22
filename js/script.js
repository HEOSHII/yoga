$(document).ready(function(){
    let container = $('.container-carusel');
    let position = 0;
    let slidesToShow = 4;
    const carusel = $('.carusel');
    const line = $('.carusel-line');
    const item = $('.carusefl-item');
    const btnNext = $('.carusel-next');
    const btnPrev = $('.carusel-prev');
    const itemWidth = 200;

    
console.log(carusel.width());
function res(){
        if (carusel.width()<800 && carusel.width()>600){
        slidesToShow = 3;
        console.log(carusel.width());
        console.log(slidesToShow);
    }else if (carusel.width()<600 && carusel.width()>400){
        slidesToShow = 2;
    }else if (carusel.width()<400){
        slidesToShow = 1;
    }
        
};
res();  
        carusel.each(function(index, carusel){
        $(carusel).css({
            width: itemWidth*slidesToShow+'px',
        });
    });

    btnNext.click(function(){
        if (position<=-800){
            position = 0;
            setPosition()
        }else{
            position -= itemWidth;
        setPosition()
        }
        console.log('Next-CLICK')
        
    });
    btnPrev.click(function(){
        if (position>=0){
            position = -800;
            setPosition()
        }else{
            position += itemWidth;
        setPosition()
        }
    });
    
    const setPosition = () => {
        line.css({
            transform: `translateX(${position}px)`
        });
    }
})