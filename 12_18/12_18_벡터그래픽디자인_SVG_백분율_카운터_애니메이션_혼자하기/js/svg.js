;(function(window,document,$,undefined){
    //백분율 카운터 구현
    var circleLength = $(".front circle"); 
    var totLength = 0; //전체 원의 길이
    var percent = .76;
    var piece = 0;
    var _second = 3;
    var setId = 0;
    var tot = 0;
    var x = 0;

    circleSvgFn();
    function circleSvgFn(){
        $.each(circleLength,function(idx, obj){ 
            totLength = obj.getTotalLength();

            obj.style.strokeDasharray = totLength; 
            obj.style.strokeDashoffset = totLength;
            //타이머를 5초로 설정 => 전체 원의 길이(totLength)를 설정한 초(_second)로 나누어서 
            //1초당 진행되는 길이를 구해야함(piece)
            //10밀리초로 진행되게 나누기 100 해줌
            // = 전체원의길이를 5(초)로 나누고 그걸 또 100으로 나눴음(아주작은조각의상태)
            piece = totLength/_second/100

            //위 설정해준 타이머 함수 가지고 와서 콜백함수 설정해줌
            //콜백함수 시간 설정할때 10밀로세컨즈 설정해줬으니까 /100해줌
            //타이머 변수(setId) 설정해주고 
            //조각들의 합(tot)을 설정함
            //만약에 조각들의 합이 전체 원의 길이 X %보다 많다면 타이머는 중지시킨다.
            //객체변수 obj의 시작점은 전체 원의 길이에서 조각들의 합을 뺀 곳 = 0에서 시작한다.
            //실시간으로 숫자 나타나게 해주기 위해서 현재 숫자=누적합=누적은실시간으로되니까/전체숫자*100

            setId = setInterval(function(){
                tot += piece;

                if( tot > Math.round(totLength*percent) ){ //여기도 %니까 math.ceil
                    clearInterval(setId);
                }

                $(obj).css({strokeDashoffset : totLength-tot });
                x = Math.round(tot/totLength*100);
                $(".percentage h2").text( x + "%" );
            },1000/100);
        });
    }

})(window,document,jQuery);
    