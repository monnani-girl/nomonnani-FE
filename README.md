# 🍊 [똑닮안] 나와 닮은 농산물 닮은꼴 찾기  🍊
<img src="https://user-images.githubusercontent.com/66112716/228446892-b9c709f9-970a-4572-8528-870af6b2bcb9.png" width />
<br/>

## 🥕 똑닮안 서비스 바로가기   
👉🏻 **서비스 URL** : **https://ddokdarman.site/**   

서비스의 자세한 설명은 ['똑닮안' Overview](https://github.com/monnani-girl)와 ['똑닮안' 구름톤 전시관](https://9oormthon.goorm.io/cb37a9b5-6a16-4d88-afe9-f4ea9ac9b7bd)에서 확인하실 수 있어요!
## ⚒️ Front-End 사용 기술 스택

**Stack**|**Version**|**Why**
:-------:|:---------:|:------
React|`18.2.0`|마지막 결과 페이지를 제외한 나머지 상태는 모두 프론트 단에서 관리하기 때문에 <br/> CSR로 충분하다고 판단해 채택
Typescript|`4.9.5`|컴파일 단계에서 빠른 오류 파악을 위해 도입
Recoil|`0.7.7`|사용자의 각 선택지를 전역으로 관리할 필요성이 있어 도입했으며, <br/> 다른 전역 상태 관리 툴보다 recoil의 진입 장벽이 낮아 <br/> 빠르게 적용할 수 있기 때문에 해커톤에 적합하다고 판단
React-Query|`3.39.3`|로딩 및 에러 처리의 간결화와 결과값 캐시를 위해 도입
Styled-Components|`5.3.9`|스타일 작성 생산성 향상을 위해 CSS-in-JS 도입
Kakao 메시지 API| - |카카오톡 메시지로 결과 공유하기 기능을 위해 도입


## 💻 시스템 아키텍쳐
<div align='center'>
<img src="https://user-images.githubusercontent.com/66112716/235391423-14a30cdb-0f77-4294-86fd-4cc817c6672a.png" width="70%" />
</div>

## 🔐 Front-End Team Commit Convention
**Tag Name**|**Description**
:---|:---
feat|새로운 기능을 추가
fix|버그 수정
design|CSS 등 사용자 UI 디자인 변경
!bREAKING CHANGE|커다란 API 변경의 경우
!hOTFIX|급하게 치명적인 버그를 고쳐야하는 경우
style|코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
refactor|프로덕션 코드 리팩토링
comment|필요한 주석 추가 및 변경
docs|문서 수정
test|테스트 코드, 리펙토링 테스트 코드 추가, Production Code(실제로 사용하는 코드) 변경 없음
chore|빌드 업무 수정, 패키지 매니저 수정, 패키지 관리자 구성 등 업데이트, Production Code 변경 없음
rename|파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
remove|파일을 삭제하는 작업만 수행한 경우

<br/>