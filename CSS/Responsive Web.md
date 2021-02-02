<pre>
Fluid Layout
- flex grid
- flex box
- %
- vw
- vh
</pre>
<br>
<pre>      @media    미디어 타입    (너비 및 높이) {
                  screen / and
                  all    / not
                  print  / only
                  speech /,(comma)
    (CSS 입력)
}



      @media(min-width: 800px){
                      div{
                          display:none;       >>화면 가로 길이 800px 이상이면 div 사라짐
                          }
      }
</pre>
<br>
<pre>
Desktop - 1024+
tablet - 768-1024
mobile - 320-480
</pre>
<br>
<pre>
Responsive CSS Units(반응형 유닛)
Absolute - px
Relative - em (현재 폰트 사이즈, 선택된 폰트와 상관없이 항상 고정,relative to parent element, HTML 기본 지정 fontsize: 16px
               1em = 16px, 부모 폰트 사이즈의 상대적으로 크기 계산, parent 8em = 16px * 8 = 128px, child 0.5em = 128 * 0.5 = 64px
         - ex
         - ch
         - rem (relative to root element, 8rem = 16px * 8=128px, 0,5rem = 16px * 0.5 = 8px)
         - lh
         - vw (viewport's width)
         - vh (viewport;s height)
         - vmin
         - vmax
         - %
</pre>
<br>
<pre>
폰트사이즈 rem 선호
width % 선호
padding: 0.5rem 0.5rem; // 수직적 정렬
          상하    
</pre>
