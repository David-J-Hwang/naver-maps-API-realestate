import data from "./data.js";

// ======================== OLD DATA ========================
// const locations = [
  //   { lat: 35.551032, lng: 129.263437 }, // my home
  //   { lat: 37.3595704, lng: 127.105399 }, // naver green factory
  // ];
// ==========================================================

// console.log(data)


// Geocoding function
// put address, return result.lat & result.lng
// function geocode(address) {
//   naver.maps.Service.geocode({query: address}, (status, response) => {
//     if (status !== naver.maps.Service.Status.OK) {
//       return alert("Something wrong!");
//     }
//     let result = {
//       lat: response.v2.addresses[0].y,
//       lng: response.v2.addresses[0].x,
//     }
//     return result;
//   })
// }

for (let item of data) {
  // console.log(item.jibunAddress); // 서울시 노원구 상계동 746-5, 서울시 도봉구 창동 30, ...
  naver.maps.Service.geocode({ query: item.jibunAddress }, (status, response) => {
    if (status !== naver.maps.Service.Status.OK) {
      return alert("Something wrong!");
    }
    let result = {
      lat: response.v2.addresses[0].y,
      lng: response.v2.addresses[0].x,
    };
    console.log(result)

    return new naver.maps.Marker({
      position: new naver.maps.LatLng(result.lat, result.lng),
      map,
    })
  });
}


let zoomNum = 11;
const centerLat = 37.5666103;
const centerLng = 126.9783882;
const mapOptions = {
  center: new naver.maps.LatLng(centerLat, centerLng),
  zoom: zoomNum,
  zoomControl: true,
  zoomControlOptions: {
    style: naver.maps.ZoomControlStyle.LARGE,
    position: naver.maps.Position.RIGHT_TOP,
  },
};

const map = new naver.maps.Map(document.getElementById("map"), mapOptions);
map.setMapTypeId(N.MapTypeId.NORMAL);




// naver.maps.Service.geocode({query: "불정로 6"}, (status, response) => {
//     if (status !== naver.maps.Service.Status.OK) {
//       return alert("Something wrong!");
//     }

//     let result = response.v2; // 검색 결과의 컨테이너
//     let items = result.addresses; // 검색 결과의 배열
//     items = response.v2.addresses

//     console.log(items[0].y) // lat
//     console.log(items[0].x) // lng
//     response.v2.addresses[0].y
//   }
// );








window.navermap_authFailure = () => {
  console.log("Naver Map Authentication Failed!");
};