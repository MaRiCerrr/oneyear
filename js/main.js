;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
	    	}
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
		});
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	
	
	$(function(){
		mobileMenuOutsideClick();
		parallax();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
	});


}());

$(document).one('click keydown touchstart', function() {
    var player = document.getElementById('player');
    player.play().catch(function(error) {
        console.log('Autoplay bị chặn: ', error);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const calendarContainer = document.querySelector('.calendar-days');
    const daysInMonth = 31; // Số ngày trong tháng
    const firstDayOfWeek = new Date(2024, 9, 1).getDay(); // Ngày đầu tiên trong tháng
    const today = new Date();

    // Thêm các ô trống trước khi bắt đầu tháng
    for (let i = 0; i < firstDayOfWeek; i++) {
        const emptyDiv = document.createElement('div');
        calendarContainer.appendChild(emptyDiv);
    }

    // Tạo các ngày trong tháng
    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;

        // Thêm sự kiện click cho ngày 20
        if (i === 20) {
            dayDiv.classList.add('heart-day'); // Ngày 20 được tô màu
            dayDiv.addEventListener('click', function() {
                openPopup(); // Gọi hàm mở popup
            });
        }

        // Kiểm tra ngày đã qua hay chưa
        const currentDate = new Date(2024, 9, i);
        if (currentDate < today && i !== 20) {
            dayDiv.classList.add('passed-day'); // Các ngày đã qua sẽ có màu xám
        }

        calendarContainer.appendChild(dayDiv); // Thêm ngày vào lịch
    }

    // Hàm mở popup
    function openPopup() {
        const popup = document.getElementById('popup');
        popup.style.display = 'flex'; // Hiển thị popup
        setTimeout(() => {
            popup.style.opacity = '1'; // Tăng độ mờ cho hiệu ứng
        }, 10); // Đợi 10ms để áp dụng độ mờ
        document.body.style.overflow = 'hidden'; // Chặn cuộn trang khi popup hiển thị
    }

    // Đóng popup
    const closePopup = document.querySelector('.close');
    closePopup.addEventListener('click', closePopupFunction); // Gọi hàm đóng popup khi nhấp vào nút đóng

    // Đóng popup khi nhấn ra ngoài nội dung
    window.addEventListener('click', function(event) {
        const popup = document.getElementById("popup");
        if (event.target === popup) {
            closePopupFunction(); // Gọi hàm đóng popup
        }
    });

    // Hàm đóng popup
    function closePopupFunction() {
        const popup = document.getElementById('popup');
        popup.style.opacity = '0'; // Giảm độ mờ để tạo hiệu ứng biến mất
        setTimeout(() => {
            popup.style.display = "none"; // Ẩn popup sau khi giảm độ mờ
        }, 300); // Thời gian tương ứng với hiệu ứng giảm độ mờ
        document.body.style.overflow = ''; // Cho phép cuộn lại khi popup đóng
    }
});

