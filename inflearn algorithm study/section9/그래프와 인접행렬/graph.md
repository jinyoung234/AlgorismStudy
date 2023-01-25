## 무방향 그래프

<div align="center">
<img width="300" src="https://user-images.githubusercontent.com/87177577/214633911-84f3aa7e-1aef-4285-a4ac-28d546b8e154.jpg"/>
</div>

간선과 노드로 이루어져 있으며, 방향이 없는 그래프를 의미한다. 무방향 그래프는 방향이 없기 때문에 양방향 그래프라고도 한다.

<div align="center">
<img width="300" src="https://user-images.githubusercontent.com/87177577/214637685-1c9bf17d-6f80-4822-a874-808dd383bf20.jpg"/>
</div>

그래프(G)는 노드(V)와 간선(E)의 집합이며 위 그래프를 다음과 같은 노드들과 간선으로 표현할 수 있다.
노드는 주로 number 타입으로 간선은 주로 1차원 array 형태로 구현된다.

<div align="center">
<img width="300" src="https://user-images.githubusercontent.com/87177577/214638078-2dec8efd-958b-4209-8017-b1f797e4450b.jpg"/>
</div>

그래프는 다음과 같이 이차원 배열을 통해 구현할 수 있으며 이렇게 구현된 배열을 `인접 행렬`이라고 한다.

노드 수에 따라 테이블 수가 달라질 수 있다.

<div align="center">
<img width="300" src="https://user-images.githubusercontent.com/87177577/214638310-0ac14485-2efa-47f1-ae2e-eae8eaf156af.jpg"/>
</div>

만약 간선 정보를 체크 할 경우 다음과 같이 [a][b]를 1로 변경하면 된다. 무방향 그래프는 양방향 그래프이기 때문에 [a][b], [b],[a] 양쪽 다 1로 변경하면 된다.

<div align="center">
<img width="300" src="https://user-images.githubusercontent.com/87177577/214638964-59de3acf-a399-4048-9934-c8b6dc81fdf1.jpg"/>
</div>

위 그래프의 간선 정보를 모두 반영할 경우 다음과 같은 2차원 배열로 나타낼 수 있다. 1이 아닌 부분은 0으로 생각하면 된다.

만약 각 노드 마다 연결된 노드들을 확인하려면 어떻게 해야할까?

<div align="center">
<img width="300" src="https://user-images.githubusercontent.com/87177577/214639613-2d508978-4367-4c69-9979-9c87f110d8c7.jpg"/>
</div>

1번 노드의 열 번호를 확인하면 된다. 1번 노드의 열에선 2, 3번이 1이기 때문에 1번 노드는 2, 3과 연결되었다고 확인할 수 있다.

2번 노드도 마찬가지로 1, 4, 5번이 1이기 때문에 2번 노드는 1, 4, 5번과 연결되었다고 볼 수 있다.

## 방향 그래프

<div align="center">
<img width="300" src="https://user-images.githubusercontent.com/87177577/214641575-af0aba05-3df1-4a70-a2e0-ebabb2a7d955.jpg"/>
</div>

무방향 그래프와 달리 노드와 노드 사이 간선이 방향이 있는 그래프를 의미한다.

<div align="center">
<img width="300" src="https://user-images.githubusercontent.com/87177577/214641801-7aa07326-938e-4018-b8f0-5178df59a4ac.jpg"/>
</div>

방향 그래프를 2차원 배열로 표현할 땐 다음과 같이 표기할 수 있으며 무방향 그래프와 달리 a,b에 대해 한 방향만 1로 표시하는 차이점이 있다.

<div align="center">
<img width="300" src="https://user-images.githubusercontent.com/87177577/214642016-a7938570-11d7-44a6-9556-d2d874fdbf70.jpg"/>
</div>

모든 간선에 대해 정보를 남기면 다음과 같이 표시할 수 있다.

1번 노드는 2, 3노드를 가리키고, 2번 노드는 5번 노드를 가리키고, 3번 노드는 4번 노드를 가리키고, 4번 노드는 2번 노드를 가리키는 구조의 그래프인 것을 확인할 수 있다.

## 가중치 방향 그래프

<div align="center">
<img width="300" src="https://user-images.githubusercontent.com/87177577/214642534-369923fd-176b-4628-b93f-a3122342509d.jpg"/>
</div>

가중치 방향 그래프는 방향 그래프 + 간선 마다 특정 비용의 가중치가 있는 것을 확인할 수 있다.

<div align="center">
<img width="300" src="https://user-images.githubusercontent.com/87177577/214643041-0a95d78e-7974-410a-b10d-1e570862d8cf.jpg"/>
</div>

가중치 방향 그래프를 2차원 배열로 표기하면 다음과 같다.

차이점은 방향 그래프는 간선이 존재하면 1, 아니면 0이었는데, 가중치 방향 그래프는 간선이 존재할 경우 그 간선에 대한 가중치를 2차원 배열에 표기하는 차이점이 존재한다.
