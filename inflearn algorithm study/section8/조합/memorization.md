# 메모이제이션

## 메모이제이션이란?

> 이미 구했던 것은 메모를 해놓고 필요할 때 값을 가져오는 것

메모이제이션은 주로 복잡한 계산이 있을 경우 시간 복잡도를 줄이기 위해 사용되는 기법

<div align="center">
<img width="500" alt="메모이제이션 1" src="https://user-images.githubusercontent.com/87177577/213729616-ca9ec0f9-5d7c-4a1b-a23c-4437fd12631c.png"/>
</div>

nCr = n-1Cr-1 + n-1Cr인 것을 확인할 수 있으므로 다음과 같은 트리 구조가 나오는 것을 알 수 있다. (n = r, r = 0가 아닌 트리들과 오른쪽 트리가 아닌 왼쪽 트리에 집중하면 좋을거 같다.)

<div align="center">
<img width="135" alt="image" src="https://user-images.githubusercontent.com/87177577/213730845-3850342d-80b7-4832-8a4e-0bceaeef7897.png"/>
</div>

D(3,1)밑에 있는 이 트리를 주목해 볼 필요가 있다.

<div align="center">
<img width="145" alt="image" src="https://user-images.githubusercontent.com/87177577/213731173-22979898-cf90-4524-8689-cf13ae941c1c.png"/>
</div>

D(3,2) 에서도 위와 같은 구조가 반복되고 있기 때문에 D(2,1) 부터는 연산할 이유가 없다. 즉, D(2,1)값을 다른 공간에 저장 후 그 값을 받아와 사용만 한다면 D(3, 2)에서 더 내려갈 필요가 없기 때문에 연산 시간이 단축 되는 것이다.

<div align="center">
<img width="145" alt="image" src="https://user-images.githubusercontent.com/87177577/213731827-73754172-c792-4bde-90bc-cd5a243dd2dd.png"/>
</div>

그렇다면 D(4,3)도 마찬가지다. D(3,2)를 메모이제이션 한다면 D(3,2)의 값이 저장되어 있기 때문에 더 내려갈 필요가 없어진다.

## 메모이제이션 방법

<div>
<img width="400" alt="image" src="https://user-images.githubusercontent.com/87177577/213734279-2014b900-addb-4ce4-80cd-81e4e7099a54.jpg"/>
</div>

아까 상황을 예시로 들면 만약 조합 수에 대한 값이 나왔다면 메모이제이션 테이블을 따로 생성하여 해당 테이블에 값을 저장하는 형태이다.

열은 n만큼, 행은 r만큼의 2차원 배열을 생성 후 조합수를 메모이제이션 하여 값을 저장하고, 저장된 값이 있다면 그 값을 그대로 가져오면 된다.
