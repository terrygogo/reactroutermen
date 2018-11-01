
# Terry's React + React Router + material-ui + axios sample 

## 먼저 설치 할 것 

install node & npm
https://nodejs.org/en/download/

visual studio code
https://code.visualstudio.com/download

chrome browser

## 설치및 테스트 

git가 설치 되어 있다면 

> git clone https://github.com/terrygogo/reactroutermen.git

> 아니면 https://github.com/terrygogo/reactroutermen 에서 zip 파일을 받아 압축을 풀고 

해당 디랙토리로 이동 후 

패키지 설치
> npm install

실행 
> npm start

빌드를 수행하면 build 폴더 안에 생성

>npm build 

**서버와 연동이 정확하게 하려면 backend를 먼저 실행하세요**
https://github.com/terrygogo/expresszero 

vs code 를 사용하는 경우엔 내려받은 디렉토리에서 
vs code를 아래와 같이 실행하고 

> code . 

code 내의 터미널 창에서 위 명령 실행 
 
chrome extention for react 

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko 
 
## 처음 부터 새로 만들때의 작업 과정 입니다.  
 
react app 설치 및 boilerplate 생성 

> npx create-react-app my-app  
> cd my-app
> npm start
https://github.com/facebook/create-react-app

ract router 설치 

> npm i --save react-router-dom
https://reacttraining.com/react-router/core/guides/philosophy

ui framwwork 설치 

> npm install @material-ui/core
> npm install @material-ui/icons
https://material-ui.com/getting-started/installation

http request/response 설치 

> npm install axios   
https://github.com/axios/axios



> code .

이후 vs-code로 작성 

### 메인 페이지를 생성하고  ( app.js ) 

### 메뉴시스템이 따라 각 page를 분기하는 router 적용  ( index.js + app.js ) 

### 각 페이지를 추가   ( Menu1 ....) 

add backend server proxy entry for develpoment to "package.json"

"proxy": "http://localhost:3030"
 
### code 사용시 자동 포맷 및 문법 검사 설정 
 https://medium.com/technical-credit/using-prettier-with-vs-code-and-create-react-app-67c2449b9d08
 
###  참고로 crete-react-app는 react project를 생성해주는 간편도구로 아래는 원레의 가이드는 프로젝트내의 README.md 를 미리보기로 열어 참조 하세요 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## redux + saga 

https://redux.js.org/
https://github.com/redux-saga/redux-saga

## react native 

https://facebook.github.io/react-native/

## electron 

https://electronjs.org/

## redis / server side data structure , cache server

https://redis.io/

## trello 

https://trello.com/?&aceid=&adposition=1t2&adgroup=54875417985&campaign=1018285860&creative=270057463399&device=c&keyword=trello&matchtype=e&network=g&placement=&ds_kids=p33209080176&ds_e=GOOGLE&ds_eid=700000001557344&ds_e1=GOOGLE&gclid=EAIaIQobChMInfbSruWy3gIVgblkCh20Ag39EAAYAiAAEgKcnvD_BwE&gclsrc=aw.ds
