$(document).ready(function () {
    $('.js-slider-count').each(function () {
        var self = this;
        var $status = $(self).find('.js-slides');
        var controls = $(self).find('.js-controls');
        var $slickElement = $(self).find('.js-slider-items');
        $slickElement.slick({
            appendArrows: $(controls),
            prevArrow: '<div class="slider-control slider-control_prev"></div>',
            nextArrow: '<div class="slider-control slider-control_next"></div>',
            swipeToSlide: true,
            infinite: true,
            arrows: true,
            dots: false,
        })
    });
    $('.js-phone').on('input', function() {
        $(this).val($(this).val().replace(/\D/g, ''));
    });
    var countdownTime = 30 * 60;

    function updateCountdown() {
        var minutes = Math.floor(countdownTime / 60);
        var seconds = countdownTime % 60;

        $('.js-minutes').text(minutes.toString().padStart(2, '0'));
        $('.js-seconds').text(seconds.toString().padStart(2, '0'));

        $('.js-minutes-text').text(getDeclension(minutes, ['минута', 'минуты', 'минут']));
        $('.js-seconds-text').text(getDeclension(seconds, ['секунда', 'секунды', 'секунд']));

        if (countdownTime <= 0) {
            clearInterval(interval);
            $('.js-timer').html("Время истекло!");
        } else {
            countdownTime--;
        }
    }

    function getDeclension(number, words) {
        var cases = [2, 0, 1, 1, 1, 2];
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    updateCountdown();
    var interval = setInterval(updateCountdown, 1000);
})
