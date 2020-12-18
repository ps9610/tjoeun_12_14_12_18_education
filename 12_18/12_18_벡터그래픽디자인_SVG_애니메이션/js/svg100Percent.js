;(function(window,document,$,undefined){
    //SVG Animation 백분율 카운터
    var svgCircle = $(".front").find("circle");
    var percent  = 1 //%
    var totLen = 0;
    var tot = 0;
    var piece = 0;
    var secondTime = 3;
    var setId = 0;
    var x = 0; 
        
    svgCounterFn();
    function svgCounterFn(){
        $.each(svgCircle, function(idx,obj){
            totLen = obj.getTotalLength();

                //객체 스타일 배열(Dasharray)과 offset(Dashoffset)
                obj.style.strokeDasharray  = totLen;
                obj.style.strokeDashoffset = totLen;
            //응용 타이머
            //5초동안 96%를 채우는 원그래프를 프로그래밍하는 알고리즘 구현
            console.log(totLen); //총길이 1545.0391845703125를5로나눔/=309.0078369/👈1초동안이동하는길이
            //piece = totLen/secondTime/1; //5초로 나눈//=30.90078369/1초 당 조각 나오게 계산//단위 : 1000밀리초
            //piece = totLen/secondTime/10; //5초로 나눈//=3.090078369/1초 당 조각 나오게 계산//단위 : 100밀리초
            piece = totLen/secondTime/100; //5초로 나눈//=0.3090078369/1초 당 조각 나오게 계산//단위 : 10밀리초
            //piece = totLen/secondTime/1000; //5초로 나눈//=0.03090078369/1초 당 조각 나오게 계산//단위 : 1밀리초
                // 1초동안이동하는길이 309.0078369
                // 5초 동안에 이동하는 길이를 모두 더해서
                // 총길이를 초과하면 끝나는 반복 알고리즘
            
            setId = setInterval(function(){
                tot += piece;

                if( tot > Math.round(totLen*percent) ){ //누적 piece 합계가 전체길이 totLen 초과하면 끝
                    clearInterval(setId);}
                    
                    //원 그래프
                        $(obj).css({strokeDashoffset: totLen-tot });
                        /* 총길이-누적합/전체길이에서줄어들면서 */ 
                        //주어진 숫자대로 진행되게끔 만들어주었으니까 animate할 필요 없음
                    
                        //숫자 카운트하면됨
                    x = Math.round((tot/totLen)*100) + "%"; //현재 숫자를 전체 숫자로 나눈다음 곱하기 백
                    $(".num h2").html( x /* 백분율 = tot(총합계)/totLen */ );
            },1000/100) //여기서 숫자를 쪼개기 때문에 math.round가 필요함

        });
    }

})(window,document,jQuery);