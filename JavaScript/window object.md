<h1>window object</h1>
<pre>
window 객체 = 전역 객체    
window 생략 가능 ex) window.alert()   >>> alert()

window는 브라우저 
document는 페이지(탭)

전역 변수는 전역 객체의 속성이 된다 (함수 바깥)
var a = 'b';
window.a; // 'b'

전역 변수(window객체에 저장)와 함수 안의 변수(window객체에 저장X)가 
다른 이유는 함수의 특수성(함수 스코프) 때문
</pre>
