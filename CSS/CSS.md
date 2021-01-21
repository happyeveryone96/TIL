<h1>CSS</h1>
<li>효율적(중복 제거)</li>
<li>유지보수 편리</li>
<li>가독성 상승</li>
<li>HTML이 정보 전달에 집중하도록 해줌</li>
<ol>
  <li>인라인 스타일(Inline style)</li>
  <div>>>HTML 요소 내부에 style 속성 사용</div>
  <li>내부 스타일 시트(Internal style sheet)</li>
  <div>>> HTML 문서 내의 <head>태그에 <style>태그를 사용하여 CSS 스타일을 적용</div>
  <li>외부 스타일 시트(External style sheet)</li>
  <pre외부에 작성된 스타일 시트 파일은 .css 확장자를 사용하여 저장
      스타일을 적용할 웹 페이지의 <head>태그에 <link>태그를 사용하여 
        외부 스타일 시트를 포함해야만 스타일이 적용</pre>
</ol>
<br>
<pre>
selector   >>>   a(태그 선택자) {
                             color   :  red;    >> 효과(or 선언(declaration))
                              } property   value

                    .(클래스 선택자){
                                 }
                     #(id 선택자){
                                }
</pre>
<pre>
{
text-decoration:none ;  >>> 줄 삭제
}

{
font-size: 100px;   >> 테스트 크기
text-align: center; >> 텍스트 정렬
border-width:10px;  >> 테두리 두께
border-color:red;   >> 테두리 색         border: 5px solid red; (이런 식으로 작성해도 됨, 순서 상관 없음)
border-style:solid; >> 테두리 스타일
display inline;     >> 자기 크기만큼
display block;      >> 화면 전체
display none;       >> 사라짐
display grid;     
grid-template-columns : 150px 1fr; >> 명시적 열(Track)의 크기를 정의 / fr(fraction, 공간 비율) 단위
}
</pre>
