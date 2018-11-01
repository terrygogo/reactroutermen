
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


vs code 를 사용하는 경우엔 내려받은 디렉토리에서 
vs code를 아래와 같이 실행하고 

> code . 

code 내의 터미널 창에서 위 명령 실행 
 
 
## 새로 만들때의 작업 과정 입니다.  
 
모든 개발 환경이 포함된 react 

 > npx create-react-app my-app 
( npm, yarn으로 설치하고 실행하는 것을 하나로 해주는 것 같아요   ) 
> cd my-app
> npm start
https://github.com/facebook/create-react-app

> npm i --save react-router-dom
https://reacttraining.com/react-router/core/guides/philosophy


> npm install @material-ui/core
> npm install @material-ui/icons
https://material-ui.com/getting-started/installation/

> npm install axios  : 서버에 get/post req/res
https://github.com/axios/axios

이후 vs-code로 작성 

> code .

add main page ( app.js ) 

add router ( index.js + app.js ) 

add pages  ( Menu1 ....) 

add backend server proxy entry for develpoment to "package.json"

"proxy": "http://localhost:3030"
 
 
## crete-react-app는 react project를 생성해주는 간편도구로 아래는 원레의 가이드는 프로젝트내의 README.md 를 미리보기로 열어 참조 하세요 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
