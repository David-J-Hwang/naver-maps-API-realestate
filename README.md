2024 팀네이버 신입 공채
=================================

# Map For-Closure by Naver Maps API
### 프로젝트를 만든 계기
평소 부동산 경매에 관심이 있어 조사를 하던 중, 현업에 계신 분들이 부동산 정보가 담긴 정보지를 종이문서로 출력해 보관하시는 것을 보고, '조사한 부동산의 정보를 전산망을 통해 체계적으로 보관하면 좋겠다'고 생각해 만들어 보았습니다.

### 들어간 기능
data.js 파일 안에는 부동산의 정보가 담긴 object를 담은 list가 있습니다.
index.js에서 data.js 파일을 import해서 Naver Maps API를 활용해 핑을 찍고, 핑을 클릭하면 상세정보를 확인할 수 있습니다.

### 향후 발전계획
현재는 단순히 javascript 파일에 담긴 데이터를 받아 출력하는 형태입니다.
회원인증을 받은 사용자로부터 조사한 부동산의 정보를 입력받아 데이터베이스에 저장하고, 20평 이상 && 아파트, 매매가 10억원 이하 && 오피스텔 등 원하는 조건에 맞게 검색할 수 있는 기능을 구현할 예정입니다.
