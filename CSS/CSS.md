<h1>CSS</h1>
<li>효율적(중복 제거)</li>
<li>유지보수 편리</li>
<li>가독성 상승</li>
<li>HTML이 정보 전달에 집중하도록 해줌</li>
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
