<h1>Recursion(재귀)</h1>
<pre>
재귀의 3가지 중요한 특성

- 종료 조건
if(나쁜 값이 들어왔다면) {정지!};
나쁜 데이터 잡아냄

- 기반 조건(Base case, 기저 상태
if(이런 일이 일어난다면) {성공!};
재귀 함수의 목적

- 재귀
자기 자신을 호출
</pre>
'''
function factorial(x) {
  // 종료 조건
  if (x < 0) return;
  
  // 기반 조건
  if (x === 0) return 1;
  
  // 재귀
  return x * factorial(x - 1);
}

factorial(3);
// 6
'''
