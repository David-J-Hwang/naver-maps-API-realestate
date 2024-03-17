// importing data
import data from "./data.js";

// map settings
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

// connecting this file with index.html
const map = new naver.maps.Map(document.getElementById("map"), mapOptions);
map.setMapTypeId(N.MapTypeId.NORMAL);

for (let item of data) {
  // console.log(item.jibunAddress); // 서울시 노원구 상계동 746-5, 서울시 도봉구 창동 30, ...
  naver.maps.Service.geocode(
    { query: item.jibunAddress },
    (status, response) => {
      if (status !== naver.maps.Service.Status.OK) {
        return alert("Something wrong!");
      }
      let result = {
        lat: response.v2.addresses[0].y,
        lng: response.v2.addresses[0].x,
      };

      let marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(result.lat, result.lng),
        map,
      });

      let content = `
    <div style="min-width: 300px; padding: 1rem;">
      <h3 style="text-align: center;">${item.name}</h3>
      <p style="text-align: center;">${item.jibunAddress}</p>
      <hr>
      <h4>면적: ${item.size}m<sup>2</sup></h4>
      <hr>
      <h4>매매가: ${item.maemaePriceMin} ~ ${item.maemaePriceMax}</h4>
      <h4>전세가: ${item.jeonsePriceMin} ~ ${item.jeonsePriceMax}</h4>
      <h4>월세가: ${item.wolsePriceMin} ~ ${item.wolsePriceMax}</h4>
      <hr>
      <h4>세대당 주차대수: ${item.phr}</h4>
      <h4>작성일: ${item.dateWritten}</h4>
    </div>
    `;

      let infoWindow = new naver.maps.InfoWindow({
        content: content,
        width: 300,
        backgroundColor: "#EEE",
        borderColor: "#200E3A",
        borderWidth: 3,
        // anchorSize: ,
        anchorSkew: true,
        anchorColor: "#200E3A",
      });

      naver.maps.Event.addListener(marker, "click", () => {
        if (infoWindow.getMap()) {
          infoWindow.close();
        } else {
          infoWindow.open(map, marker);
        }
      });
    }
  );
}

// 네이버지도 API 인증 문제 시 console에 표시하기
window.navermap_authFailure = () => {
  console.log("Naver Map Authentication Failed!");
};
