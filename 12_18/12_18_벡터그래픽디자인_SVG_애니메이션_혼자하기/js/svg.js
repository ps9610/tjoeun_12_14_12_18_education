;(function(window,document,$,undefined){

    //테두리가 채워지고 지워지는 SVG 애니메이션 구현

    // front라는 원형 객체를 가져옴(원의 전체 길이를 가져올거라서)
    var circleLength = $(".front circle"); 
    var totLength = null;

    //최초에 한 번 실행했다가 6초 뒤마다 다시 실행
    circleSvgFn();
    setInterval(circleSvgFn,6000);

    function circleSvgFn(){
        $.each(circleLength,function(idx, obj){ 
            // circleLength라는 원형 객체에서 obj라는 매개변수를 통해 
            // getTotalLength() = 경로의 총 길이를 알아낸다. 
            // 경로의 총 길이는 totLength라는 변수로 사용
            totLength = obj.getTotalLength();

            obj.style.strokeDasharray = totLength; 
            // strokeDasharray = 특성 형상의 윤곽을 그리기 위해 사용되는 대시(-) 갭(gap) 패턴을 형성
                //즉 하이픈(-)과 틈새(gap)를 어떤 패턴으로 할지 결정해준다
                // = 하이픈과 틈새가 있으면 - - - 이런식으로 점선이 만들어지기 때문에 
                    // 결국엔 점선을 만드는 간격이라고 보면 되는데
                    // 대시와 갭의 값이 같다면 실선으로 이어짐
            // 매개변수 obj의 스타일 중 대시와 갭의 패턴을 totLength로 동일하게 하겠다.
            obj.style.strokeDashoffset = totLength;
            // strokeDashoffset = 대쉬 어레이의 렌더링에 오프셋을 정의3
                //즉, 시작점을 정해준다는 말임
                // 여기서는 totLength에서 시작하겠다는 의미

        $(obj).animate({strokeDashoffset:totLength*(1-1)},3000,function(){
            $(obj).animate({strokeDashoffset:totLength},1000)
        })
        })
    }

})(window,document,jQuery);
    