var script = document.createElement("script");
document.head.appendChild(script);
script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=d686d0cf4d2d3680f083a7dbaba7e25d"


var zzz = function() {
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=d686d0cf4d2d3680f083a7dbaba7e25d"
    kakao.maps.load(function () {
        var container = document.getElementById('map')
        var options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        }

        var map = new kakao.maps.Map(container, options)
    })
}


    