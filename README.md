# 자바스크립트를 활용한 투두리스트

> 프론트 개발의 기본이 되는 HTML, CSS, 자바스크립트를 활용한 투두리스트 프로젝트입니다.

[자바스크립트 TodoList](https://jolly-tarsier-952125.netlify.app)

## 목차

- [들어가며](#들어가며)

  - [프로젝트 소개](#1-프로젝트-소개)

  - [프로젝트 기능](#2-프로젝트-기능)

  - [사용기술](#3-사용기술)
  - [실행화면](#4-실행화면)

- [후기](#후기)


## 들어가며

### 1. 프로젝트 소개

이 프로젝트는 프론트 개발의 기본이 되는 HTML, CSS, 자바스크립트를 활용한 투두리스트 프로젝트로

자바스크립트를 활용한 기본적인 CRUD 구현과 DOM 조작법을 익히기 위해 시작했습니다.

### 2. 프로젝트 기능

프로젝트의 기능은 다음과 같습니다.

- Title과 Content 입력을 통한 할 일과 세부사항 저장 (CREATE)

- 할 일과 세부사항은 브라우저의 LocalStorage 에 저장됩니다.

- 페이지에 접속했을때 LocalStorage 에 저장된 할 일이 있다면 저장된 내용을 불러와 보여줍니다.

- Title 또는 Content 를 입력하지 않고 Plus To DO를 클릭하면 저장할 수 없습니다. (Validation Check)

- 할 일을 등록하면 제목(Title), 세부사항(Content), 등록날짜(Date of register) 3가지 항목이 등록되고 표시됨 (READ) 

- 등록된 할 일을 더블클릭 할 경우, 해당 할 일을 수정할 수 있는 Modal 창이 뜨면서 수정 가능 (UPDATE)

- 수정을 할 경우 Date of register 또한 수정한 시점으로 변경되어 저장됩니다. (UPDATE) 

- 수정을 할 경우에도 Title 또는 Content 를 입력하지 않으면 수정할 수 없습니다. (Validation Check)

- 할 일은 총 10개까지 저장할 수 있으며, 각각의 할 일은 휴지통 아이콘을 클릭해서 삭제 가능 (DELETE)

- 할 일이 10개가 등록되어 있을 경우, 새로운 할 일을 등록하게 되면 추가할 수 없다는 메세지 출력 (Validation Check)

- 등록된 할 일은 휴지통 아이콘을 클릭하는 방법 외에 드래그를 통해 삭제할 수 있습니다. (DELETE)

- Clear 버튼을 통해 등록된 할 일을 모두 삭제할 수 있습니다. (DELETE)

### 3. 사용기술

- 프론트엔드

  - HTML

  - CSS

  - Javascript

- 개발도구

  - Visual Studio Code

### 4. 실행화면

<details>
<summary>메인 페이지</summary>

![image](https://user-images.githubusercontent.com/26796099/233160208-c19ca46b-7d03-42b5-bf8f-54442f05173b.png)

</details>

<details>
<summary>할 일 입력</summary>
	
> 다음과 같이 할 일을 입력하고 Plus To Do 버튼을 클릭하면 할 일이 등록됩니다.

![image](https://user-images.githubusercontent.com/26796099/233160354-52ffc4f4-b999-4279-b75f-f216c19445a3.png)
	
![image](https://user-images.githubusercontent.com/26796099/233160406-cbfacb2c-65f8-41a8-8200-5d2b603c1f38.png)

</details>

<details>
<summary>할 일 수정</summary>
		
> 등록된 할 일을 더블클릭하면 수정을 할 수 있는 모달창이 뜨면서 해당 모달창에서 내용을 수정할 수 있습니다.
	
![image](https://user-images.githubusercontent.com/26796099/233160669-264b9613-79f7-4c50-9154-690f514c133a.png)
	
![image](https://user-images.githubusercontent.com/26796099/233161357-8e0398c3-7c74-4b46-947e-1c9da404b5c9.png)

![image](https://user-images.githubusercontent.com/26796099/233161407-fe400aae-158b-4423-847f-4da4fe9ea2cd.png)

</details>

<details>
<summary>할 일 삭제</summary>
		
> 휴지통 아이콘을 클릭하면 해당하는 할 일을 삭제할 수 있습니다.
	
![image](https://user-images.githubusercontent.com/26796099/233162780-cd0ef65d-1af8-4cc1-9a75-100071a9dc75.png)

![image](https://user-images.githubusercontent.com/26796099/233162892-3b203f2e-ad15-476a-a964-759ba6a1848e.png)

</details>

<details>
<summary>일괄삭제</summary>
	
> Clear 버튼을 통해 현재 등록된 모든 할 일을 삭제할 수 있습니다.

![image](https://user-images.githubusercontent.com/26796099/233163296-a048b077-7041-4049-97a5-9dbf5ac786f8.png)
	
![image](https://user-images.githubusercontent.com/26796099/233163332-ec319e73-bcbe-423e-be99-ed7e889c1674.png)

</details>

<details>
<summary>유효성 검증</summary>
	
> 할 일을 등록할 경우 Title 혹은 Content가 비어있을 경우 경고 메세지를 출력합니다.

![image](https://user-images.githubusercontent.com/26796099/233163479-876b9212-5679-4236-9ad0-b090cd2ba3e1.png)
	
> 모달창에서 수정을 할 경우, 경고 메세지를 한번 더 띄우기보다 모달창 내에서 비어있는 항목을 표시해줍니다.
	
![image](https://user-images.githubusercontent.com/26796099/233160918-89de0539-000a-4567-b12d-30b32e3632f6.png)
	
> 등록된 할 일이 10개일 경우, 더 이상 추가할 수 없다는 경고 메세지를 출력합니다.
	
![image](https://user-images.githubusercontent.com/26796099/233166234-ee064546-1726-46b3-a142-f4b8fa0705be.png)


</details>

## 후기

이전에도 자바스크립트를 통해 간단한 투두리스트를 만드는 프로젝트는 진행한적이 있습니다.

하지만 이처럼 복잡한 요구사항을 분석하고 프로그램을 설계한 경험은 처음이었습니다.

리액트와 동일한 방식으로 데이터가 바뀔때마다 화면을 새로 그려주는 방법을 바탕으로 구현을 하다보니 

어렵지 않게 완성할 수 있었습니다.
