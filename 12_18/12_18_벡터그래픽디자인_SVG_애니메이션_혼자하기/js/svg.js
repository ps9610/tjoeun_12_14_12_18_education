;(function(window,document,$,undefined){
    //SVG Animation
    var circleSvg = $(".front circle");//원형(circle) 객체를 변수로 놓음
    var totLength = null; 

    circleSvgFn();
    setInterval(circleSvgFn, 2000);
    
    function circleSvgFn(){ //조각 조각이 몇개가 만나야 애니메이션이 되는가
        $.each(circleSvg, function(idx, obj){ //circleSvg를 읽어들임
            totLength = obj.getTotalLength(); //객체의 전체 총(Total) 길이(Length)를 가져오라.는 변수를 만들어줌
            //totLength*(1-1) // 0%만 남겨놓고 다 채운다. = 전부 다 채운다.
            //totLength*(1-0.8) // 20%만 남겨놓고 다 채운다.
            //console.log(totLength);

            //객체 스타일 전체 길이로 지정
            obj.style.strokeDasharray = totLength; //getTotalLength로 Dash~의 공간을 채워라
            obj.style.strokeDashoffset = totLength; //getTotalLength로 Dash~의 공간을 채워라

            $(obj).animate({strokeDashoffset:totLength*(1-1)},5000,function(){ // 채우고 다 채우면
                $(obj).animate({strokeDashoffset:totLength},3000) // 지워라
            });


        });
    }

})(window,document,jQuery);
    