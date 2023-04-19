# 자바스크립트를 활용한 투두리스트

> 프론트 개발의 기본이 되는 HTML, CSS, 자바스크립트를 활용한 투두리스트 프로젝트입니다.

## 목차

- [들어가며](#들어가며)

  - [프로젝트 소개](#1-프로젝트-소개)

  - [프로젝트 기능](#2-프로젝트-기능)

  - [사용기술](#3-사용기술)
  - [실행화면](#4-실행화면)

- [추후 업데이트](#추후-업데이트)

- [후기](#후기)

## 들어가며

### 1. 프로젝트 소개

이 프로젝트는 프론트 개발의 기본이 되는 HTML, CSS, 자바스크립트를 활용한 투두리스트 프로젝트로

자바스크립트를 활용한 DOM 조작법을 익히기 위해 시작했습니다.

### 2. 프로젝트 기능

프로젝트의 기능은 다음과 같습니다.

##### 1. Title과 Content 입력을 통한 할 일과 세부사항 저장

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

![image](https://user-images.githubusercontent.com/26796099/218563257-1d6ff896-91f9-4115-94e4-16117a0ae82a.png)

</details>

<details>
<summary>로그인 페이지</summary>

![image](https://user-images.githubusercontent.com/26796099/219971792-c9815cf5-5a97-41d4-81be-3179bbd32f3d.png)

</details>

<details>
<summary>회원가입 페이지</summary>

![image](https://user-images.githubusercontent.com/26796099/219971836-0fa58e71-8065-40e2-ac5b-7b3882345ee4.png)

</details>

<details>
<summary>게시글 등록 페이지</summary>

![image](https://user-images.githubusercontent.com/26796099/218556143-dd77a280-36f4-452d-a388-8d8a2fbaf7da.png)

</details>

<details>
<summary>게시글 상세 페이지</summary>

![image](https://user-images.githubusercontent.com/26796099/218556368-8f320485-5c26-4822-a900-99da21493ba3.png)

</details>

## 추후 업데이트

### 1. Service 수정 필요

UserService, QuestionService 및 AnswerService 의 getUser와 getQuestion, getAnswer 메서드를 통해

user와 question, answer 을 가져올때 Optional 을 통해서 값을 찾지 못했을 경우 예외처리 필요

<details>
<summary>코드예시</summary>

```
package com.crud.service;
...
@Service
public class UserService {

	...

	public User getUser(String username) {
		Optional<User> user = userRepository.findByusername(username);
		// user를 못찾을 경우 예외처리 필요
		return user.get();
	}
}
```

</details>

### 2. 메인 페이지의 게시글 제목 옆 답변 개수 표시 기능

대부분 게시판의 게시글 제목의 옆에는 해당 게시물에 달린 답변의 개수가 표시되어 있으며

위 프로젝트에서도 답변의 개수를 표시하는 기능이 필요

### 3. 게시글 검색 기능 구현

메인 페이지에서 게시글 리스트를 보여주는것 외에 게시글을 검색할 수 있는 기능 필요

### 4. 회원정보 수정 및 탈퇴 기능

로그인이 되어있을 경우 각 회원들이 접속할 수 있는 회원정보를 수정 및 탈퇴 페이지를 만들고

해당 페이지에서 회원정보 수정 및 탈퇴 기능 구현이 필요

## 후기

앞의 소개에서도 이야기한것처럼 이 프로젝트는 SpringBoot를 공부하면서 웹 페이지와 서버의 기본적인 기능인

CRUD와 로그인, 회원가입 기능을 구현해보기 위해 시작한 프로젝트입니다.

이전에 React.js와 node.js를 사용해 MERN STACT으로 개발해서 간단한 블로그를 만든적이 있는데

이번에는 Spring으로 객체지향 프로그래밍 방식의 프로젝트의 전반적인 구성과 사용법을 알아보고

Spring에서 제공하는 다양한 라이브러리를 사용해보는것이 목표였습니다.

Spring Data JPA와 Spring Security는 MERN STACK과는 다르게 라이브러리에서 제공하는 기능이 다양하기 때문에

여러 서적과 인터넷 검색을 통해 기능들을 찾아보았으며,

이번 프로젝트가 끝난후에 따로 다시 공부를 해야할 필요성을 느꼈습니다.

특히 Spring Data JPA는 각각의 객체를 테이블로 매핑시킨다는점이 인상적이었으며,

개발자 입장에서는 JPA라는 기술을 한번 더 배워야한다는 번거로움은 있지만

기존에 프로그램 안에서 개발자가 수행하던 데이터베이스 설정이나 SQL 구문을 보내는 기능 등을

JPA가 대신 해주기 때문에 초기에 프로젝트의 설계만 잘한다면 오히려 편하다는 생각이 들었습니다.

또한 Spring Security의 경우 Security가 보안 설정을 해주기 때문에 편리하지만

Thymeleaf와 연동해서 많은 기능을 갖고 있는 만큼 알아야할것이 많다는것을 느꼈으며

Thymeleaf를 먼저 공부한뒤에 Spring Security를 공부하면 좋겠다는 생각이 들었습니다.

때문에 앞으로의 공부방향은

1. JPA와 Spring Data JPA

2. Thymeleaf 기본 기능

3. Spring Security

위와 같은 순서로 공부를 하고 다시 한번 SpringBoot를 활용한 게시판 프로젝트를 만들어보려고 합니다.

감사합니다.
