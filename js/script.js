"use strict";

(function showMap() {
	ymaps.ready(init);

	var sedonaMap,
		sedonaPlacemark;

		function init() {
			sedonaMap = new ymaps.Map("map", {
				center: [34.869497, -111.760186],
				zoom: 10
			});
			sedonaPlacemark = new ymaps.Placemark([34.869497, -111.760186], { 
            hintContent: 'Sedona', 
            balloonContent: 'Небольшой городок в Аризоне, заслуживающий большего!' 
        });

			sedonaMap.geoObjects.add(sedonaPlacemark);
			sedonaMap.behaviors.disable('drag');
        	sedonaMap.behaviors.disable('scrollZoom');
		}	
})();

(function manageForm() {
	var manageFormButton = document.querySelector(".search-button");
	var searchForm = document.querySelector(".search-form-block");

	manageFormButton.addEventListener("click", function(evt) {
		evt.preventDefault();
		if (searchForm.classList.contains("lift-form-up")) {
			searchForm.classList.add("lift-form-down");
			searchForm.classList.remove("lift-form-up");
		} else {
			searchForm.classList.add("lift-form-up");
			searchForm.classList.remove("lift-form-down");
		}
	})
})();




