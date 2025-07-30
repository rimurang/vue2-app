### 1. 개발환경 세팅
- Vue 2.6.14는 Vue 2 계열에서 가장 안정적인 버전이며, Vue 2는 실무에서 여전히 많이 사용되고 있고 Vue 3와 구조적으로 다름
- Vue CLI로 구조화된 Vue 2 프로젝트를 생성 가능
- 
### 2. Vue 인스턴스 & 템플릿 문법
- new Vue() 로 시작하는 Vue 인스턴스를 기반으로 작동
- Vue 2에서는 이 인스턴스를 통해 데이터를 선언하고, DOM과 연결(binding) 합니다.
- v-bind(단방향), v-model(양방향), v-for, v-if & v-else & v-show, v-on
- 
### 3. 컴포넌트 분리 – props와 $emit
- 부모 → 자식 간 데이터 전달은 props, 자식 → 부모 이벤트 전달은 $emit

### 4. Axios로 외부 api 활용
- Axios는 Vue에서 가장 많이 사용하는 HTTP 통신 라이브러리
- 외부 API로부터 데이터를 받아와 Vue 앱에 렌더링
