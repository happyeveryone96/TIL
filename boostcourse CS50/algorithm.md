<h1>알고리즘</h1>
<li>알고리즘은 입력(input)에서 받은 자료를 출력(output)형태로 처리 하는 과정</li>
<li>input > algorithms > output</li>
<li>입력값을 출력값의 형태로 바꾸기 위해 어떤 명령들이 수행되어야 하는지에 대한 규칙적인 순서적 나열</li>
<li>정확성 효율성 중요</li>

<h1>의사코드(슈도코드, pseudocode)</h1>
<li>프로그램을 작성할 때 모듈이 작동하는 논리를 표현하기 위한 언어</li>
<li>특정 프로그래밍 언어의 문법에 따라 쓰인 것이 아니라, </li>
<li>일반적인 언어로 코드를 흉내내어 알고리즘을 써놓은 코드</li>
<br>
<pre>
배열은 한 자료형의 여러 값들이 메모리상에 모여 있는 구조
컴퓨터는 이 값들에 접근할 때 배열의 인덱스 하나하나를 접근
만약 어떤 값이 배열 안에 속해 있는지를 찾아 보기 위해서는 
배열이 정렬되어 있는지 여부에 따라 아래와 같은 방법을 사용할 수 있음
</pre>

<br>
<pre>
Big O 표기법
O는 “on the order of”의 약자
알고리즘 실행 시간의 상한
“~만큼의 정도로 커지는” 
O(n) 은 n만큼 커지는 것이므로 n이 늘어날수록 선형적으로 증가
O(n/2)도 결국 n이 매우 커지면 1/2은 큰 의미가 없어지므로 O(n)이라고 볼 수 있음

O(n^2): 선택 정렬, 버블 정렬
O(n log n)
O(n): 선형 검색
O(log n): 이진 검색
O(1)

Big Ω
알고리즘 실행 시간의 하한
선형 검색에서는 n개의 항목이 있을때 최대 n번의 검색을 해야 하므로 상한이 O(n)이 되지만 
운이 좋다면 한 번만에 검색을 끝낼수도 있으므로 하한은 Ω(1)이 됨

Ω(n^2): 선택 정렬, 버블 정렬
Ω(n log n)
Ω(n) - 배열 안에 존재하는 값의 개수 세기
Ω(log n)
Ω(1) - 선형 검색, 이진 검색
</pre>
<br>
<h1>선형 검색</h1>
<pre>
원하는 원소가 발견될 때까지 처음부터 마지막 자료까지 차례대로 검색
배열의 인덱스를 처음부터 끝까지 하나씩 증가시키면서 방문하여 그 값이 속하는지를 검사
찾고자 하는 자료를 찾을 때까지 모든 자료를 확인해야 함
선형 검색 알고리즘은 정확하지만 아주 효율적이지 못한 방법
리스트의 길이가 n이라고 했을 때, 최악의 경우 리스트의 모든 원소를 확인해야 하므로 n번만큼 실행
</pre>
<br>
<h1>이진 검색</h1>
<pre>
만약 배열이 정렬되어 있다면, 배열 중간 인덱스부터 시작하여 찾고자 하는 값과 비교하며 
그보다 작은(작은 값이 저장되어 있는) 인덱스 또는 큰 (큰 값이 저장되어 있는) 인덱스로 이동을 반복
</pre>
<br>
<h1>버블 정렬</h1>
<pre>
정렬되지 않은 리스트를 탐색하는 것 보다 정렬한 뒤 탐색하는 것이 더 효율적
정렬 알고리즘 중 하나
버블 정렬은 두 개의 인접한 자료 값을 비교하면서 위치를 교환하는 방식으로 정렬하는 방법
버블 정렬은 단 두 개의 요소만 정렬해주는 좁은 범위의 정렬에 집중
간단하지만 단 하나의 요소를 정렬하기 위해 너무 많이 교환하는 낭비가 발생할 수도 있음
</pre>
<br>
<h1>선택 정렬</h1>
<pre>
정렬을 위한 알고리즘 중 선택정렬은 배열 안의 자료 중 가장 작은 수(혹은 가장 큰 수)를 찾아 
첫 번째 위치(혹은 가장 마지막 위치)의 수와 교환해주는 방식의 정렬
선택 정렬은 교환 횟수를 최소화하는 반면 각 자료를 비교하는 횟수는 증가
</pre>
<br>
<h1>재귀(Recursion)</h1>
<pre>
함수가 본인 스스로를 호출해서 사용
 </pre>
 <br>
 <h1>병합 정렬</h1>
 <pre>
병합 정렬은 원소가 한 개가 될 때까지 계속해서 반으로 나누다가 다시 합쳐나가며 정렬을 하는 방식
이 과정은 재귀적으로 구현
</pre>
