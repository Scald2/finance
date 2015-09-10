(function (swiper) {

    if (!swiper) {
        return;
    }

    function initSwiper(selector) {
        var defaultSlidesPerView = 1,
            instance;

        function initOrUpdate(slidesPerView) {

            if (instance) {
                instance.params.slidesPerView = slidesPerView || defaultSlidesPerView;
                instance.update();
                return;
            }

            instance = new Swiper(selector, {
                prevNextPreview: true,
                slidesPerView: slidesPerView || defaultSlidesPerView,
                centeredSlides: true,
                spaceBetween: 10,
                initialSlide: 1
            });
        }

        function destroy() {

            if (!instance) {
                return;
            }

            instance.destroy(instance, true);
            instance = null;
        }

        function getSlidesPerView() {
            if (window.matchMedia("all and (max-width: 960px)").matches || window.matchMedia("all and (max-width: 500px)").matches) {
                if (window.matchMedia("all and (max-width: 590px)").matches) {
                    return 1;
                }
                else {
                    return 2;
                }
            }

            return -1;
        }

        if (window.matchMedia("all and (max-width: 960px)").matches) {
            initOrUpdate(getSlidesPerView());
        }

        window.onresize = function () {
            var slides = getSlidesPerView();

            if (slides >= 0) {
                initOrUpdate(getSlidesPerView());
            }
            else {
                destroy();
            }

        }
    }

    swiper.initNew = initSwiper;

    return swiper;

}(window.Swiper));