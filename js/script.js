$(function () {

    // Menu Button
    $(".menu .button").on("click", function (event) {
        event.preventDefault();
        $(".menu .button").toggleClass("active");
        $(".menu .nav").toggleClass("active");
    });

    $(".open-nav-sub-list > a:first-child").on("click", function (event) {
        event.preventDefault();
        $(this).next().toggleClass("active");
    });

    // Gallery
    $('.gallery .slider-track').slick({
        mobileFirst: true,
        appendArrows: $(".slider-arrows"),
        prevArrow: '<button type="button" class="slick-prev i-l-arrow"></button>',
        nextArrow: '<button type="button" class="slick-next i-r-arrow"></button>',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    centerMode: true,
                    variableWidth: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: true,
                    variableWidth: true,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    centerMode: true,
                    variableWidth: true,
                },
            },
        ],
    });
    
    // Popup
	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

    // Request Popup
    $('.open-request-popup').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
        showCloseBtn: false,
        fixedContentPos: true,
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

    // Request Form

    // Request Form Error Messages

    var errorMessages = {
        "required" : "Это поле обязательно для заполнения.",
    };

    // Request Form Validation

    $("#request-form").validate({
		errorElement: "p",
		rules: {
			name: {
				required: true,
			},
			phone: {
				required: true,
			},
            email: {
				required: true,
			},
            message: {
                required: true,
            },
            confirmation: {
                required: true,
            },
		},
		messages: {
			name: {
				required: errorMessages.required,
			},
			phone: {
				required: errorMessages.required,
			},
            email: {
				required: errorMessages.required,
			},
            message: {
                required: errorMessages.required,
            },
            confirmation: {
                required: "Подтвердите согласие на обработку персональных данных",
            },
		},
    });

    // Request Form Phone Input Mask

    $("#request-form #phone").mask("+7(999)-999-99-99");

});