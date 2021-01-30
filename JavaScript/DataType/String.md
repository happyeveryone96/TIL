<h1>String(문자열)</h1>
<pre>
문자는 "(큰 따옴표) 혹은 '(작은 따옴표) 중 하나로 감싸야 한다.
큰 따옴표로 시작하면 큰 따옴표로 끝나야하고,
작은 따옴표로 시작하면 작은 따옴표로 끝나야 한다.
</pre>
<br>
<pre>
문자열 안에 작은 따옴표나 큰 따옴표를 넣고 싶다면 
'나 " 앞에 \(역슬래쉬)를 넣어 줘야함 >>> 이스케이프(escape)
\n >> 줄바꿈
alert(typeof "1");  //string
   데이터 형 알려줌 
</pre>
<br>
<pre>
문자와 문자를 더할 때
alert("coding"+"everybody");
문자의 길이를 구할 때 문자 뒤에 .length를 붙인다.
alert("coding everybody".length);
문자열 내에서 특정한 문자열의 index 값을 리턴 할 때
alert("code".indexOf('c')); // 0
alert("code".indexOf('k')); // -1 (존재X)
</pre>
