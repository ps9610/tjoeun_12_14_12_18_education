;(function(window,document,$,undefined){
    //SVG Animatione
    var circleSvg = $('.front circle');  //원형(circle) 객체
    var totLength = null;
        
        circleSvgFn();
        setInterval(circleSvgFn, 6000);

        function circleSvgFn(){
            $.each(circleSvg, function(idx, obj){              
                totLength = obj.getTotalLength(); //객체의 전체 총(Total) 길이(Length)를 가져오라
                
                //객체 스타일 전체 길이로 지정
                obj.style.strokeDasharray  = totLength;
                obj.style.strokeDashoffset = totLength;

                $(obj).animate({strokeDashoffset: totLength*(1-1) },3000, function(){ //채우고 다채우면
                    $(obj).animate({strokeDashoffset:totLength},1000); //지운다
                });

            });
        }

})(window,document,jQuery);
