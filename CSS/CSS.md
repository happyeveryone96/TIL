<h1>CSS</h1>
<li>효율적(중복 제거)</li>
<li>유지보수 편리</li>
<li>가독성 상승</li>
<li>HTML이 정보 전달에 집중하도록 해줌</li>
<ol>
  <li>인라인 스타일(Inline style)</li>
  <div>>>HTML 요소 내부에 style 속성 사용</div>
  <li>내부 스타일 시트(Internal style sheet)</li>
  <div>>> HTML 문서 내의 head태그에 style태그를 사용하여 CSS 스타일을 적용</div>
  <li>외부 스타일 시트(External style sheet)</li>
  <div>외부에 작성된 스타일 시트 파일은 .css 확장자를 사용하여 저장</div>
  <div>스타일을 적용할 웹 페이지의 head태그에 link태그를 사용하여</div>
  <div>외부 스타일 시트를 포함해야만 스타일이 적용</div>
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
universal *
type Tag
ID #id
Class .class
State :
Attribute []
</pre>
<pre>
{
text-decoration:none ;  >>> 줄 삭제
margin-top:45px;    >> 여백
font-size: 100px;   >> 텍스트 크기
font-weight: ;      >> 폰트 굵기, 가중치
text-align: center; >> 텍스트 정렬
border-width:10px;  >> 테두리 두께
border-color:red;   >> 테두리 색         border: 5px solid red; (이런 식으로 작성해도 됨, 순서 상관 없음)
border-style:solid; >> 테두리 스타일
display inline;     >> 자기 크기만큼, 물건
display block;      >> 화면 전체, 한 줄 하나 상자
display inline-block >> 한 줄 여러 개 상자
display none;       >> 사라짐
display grid;     
grid-template-columns : 150px 1fr; >> 명시적 열(Track)의 크기를 정의 / fr(fraction, 공간 비율) 단위

position: static; (기본 값)
          relative; 원래 있어야 되는 아이템에서 이동
          absolute; 아이템이 담겨 이는 가까이 있는 상자 안에서 이동
          fixed; 상자 안에서 벗어나 페이지에서 이동
          sticky; 스크롤해도 원래 자리 
}
</pre>
