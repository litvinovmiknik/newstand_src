ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.63020896728813,39.74021273828119],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'Новый Стандарт'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/template/img/point.png',
            iconImageSize: [19, 28],
            iconImageOffset: [0, 0]
        });

    myMap.geoObjects
        .add(myPlacemark);
});