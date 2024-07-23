AOS.init({
	duration: 800,
	easing: 'slide'
});

(function ($) {

	"use strict";

	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();

	var carousel = function () {
		$('.carousel-car').owlCarousel({
			center: true,
			loop: true,
			autoplay: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		// timer;
		// timer = setTimeout(function(){
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var counter = function () {

		$('#section-counter, .hero-wrap, .ftco-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
					);
				});

			}

		}, { offset: '95%' });

	}
	counter();


	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function () {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
			e.preventDefault();

			var hash = this.hash,
				navToggler = $('.navbar-toggler');
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, 'easeInOutExpo', function () {
				window.location.hash = hash;
			});


			if (navToggler.is(':visible')) {
				navToggler.click();
			}
		});
		$('body').on('activate.bs.scrollspy', function () {
			console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


	$('#book_pick_date,#book_off_date').datepicker({
		'format': 'm/d/yyyy',
		'autoclose': true
	});
	$('#time_pick').timepicker({
		timeFormat: 'H:i'
	});

	// Inisialisasi dropdown mobil
	var carSelect = $('#carName');

	var cars = [
		{ value: '', text: 'Pilih Mobil', disabled: true, selected: true },
		{ value: 'new_avanza', text: 'New Avanza' },
		{ value: 'mercy', text: 'Mercedes-Benz' },
		{ value: 'hiprem_lux', text: 'Hiace Premio Luxury' },
		{ value: 'pajero', text: 'Pajero' },
		{ value: 'elf', text: 'Isuzu ELF' },
		{ value: 'expander', text: 'Xpander' },
		{ value: 'alphard', text: 'Alphard' },
		{ value: 'inov_reb', text: 'Innova Reborn' },
		{ value: 'hi_com', text: 'Hiace Commuter' }
	];

	cars.forEach(function (car) {
		var option = $('<option>').val(car.value).text(car.text);

		if (car.disabled) {
			option.prop('disabled', true);
		}

		if (car.selected) {
			option.prop('selected', true);
		}

		carSelect.append(option);
	});

	// Inisialisasi dropdown jam sewa
	var rentalSelect = $('#hourRental');

	// Opsi default
	var durations = [
		{ value: '', text: 'Pilih Jam Ambil', disabled: true, selected: true }
	];

	// Tambahkan opsi untuk jam dari 01:00 hingga 24:00 dengan kelipatan 30 menit
	for (var hour = 0; hour <= 23; hour++) {
		var formattedHour = hour < 10 ? '0' + hour : hour;
		[0, 30].forEach(function (minute) {
			var formattedMinute = minute < 10 ? '0' + minute : minute;
			var value = formattedHour + ':' + formattedMinute;
			var text = formattedHour + ':' + formattedMinute;
			durations.push({ value: value, text: text });
		});
	}

	// Tambahkan semua opsi ke dalam dropdown
	durations.forEach(function (duration) {
		var option = $('<option>').val(duration.value).text(duration.text);

		if (duration.disabled) {
			option.prop('disabled', true);
		}

		if (duration.selected) {
			option.prop('selected', true);
		}

		rentalSelect.append(option);
	});


	// Inisialisasi dropdown durasi sewa
	var rentalSelect = $('#rentalDuration');

	var durations = [
		{ value: '', text: 'Pilih Durasi Sewa', disabled: true, selected: true },
		{ value: '3_hour', text: '3 Jam' },
		{ value: '6_hours', text: '6 Jam' },
		{ value: '12_hours', text: '12 Jam' }
		// Tambahkan opsi waktu dalam jam jika diperlukan
	];

	// Tambahkan opsi untuk durasi sewa dari 1 hari hingga 30 hari
	for (var i = 1; i <= 30; i++) {
		var value = i + '_day' + (i > 1 ? 's' : ''); // Menambahkan 's' untuk plural
		var text = i + ' Hari';
		durations.push({ value: value, text: text });
	}

	durations.forEach(function (duration) {
		var option = $('<option>').val(duration.value).text(duration.text);

		if (duration.disabled) {
			option.prop('disabled', true);
		}

		if (duration.selected) {
			option.prop('selected', true);
		}

		rentalSelect.append(option);
	});

	// Kirim ke whatsapp
	document.querySelector('.request-form').addEventListener('submit', function (e) {
		e.preventDefault();

		// Ambil data dari form
		const custName = document.querySelector('input[placeholder="Masukkan Namamu"]').value;
		const carName = document.getElementById('carName').value;
		const pickupLocation = document.querySelector('input[placeholder="Kota, Bandara, Stasiun, dll"]').value;
		const returnLocation = document.querySelectorAll('input[placeholder="Kota, Bandara, Stasiun, dll"]')[1].value;
		const pickupDate = document.getElementById('book_pick_date').value;
		const returnDate = document.getElementById('book_off_date').value;
		const pickupHour = document.getElementById('hourRental').value;
		const rentalDuration = document.getElementById('rentalDuration').value;

		// Format data untuk pesan WhatsApp
		const message = `*Pesanan Sewa Mobil*\n` +
			`Nama Pelanggan: ${custName}\n` +
			`Nama Mobil: ${carName}\n` +
			`Lokasi Ambil: ${pickupLocation}\n` +
			`Lokasi Kembali: ${returnLocation}\n` +
			`Tanggal Ambil: ${pickupDate}\n` +
			`Tanggal Kembali: ${returnDate}\n` +
			`Waktu Ambil: ${pickupHour}\n` +
			`Durasi Sewa: ${rentalDuration}\n`;

		// Encode URL
		const encodedMessage = encodeURIComponent(message);
		//nomor whatsapps
		const whatsappUrl = `https://wa.me/6285259119005?text=${encodedMessage}`;

		// Arahkan ke WhatsApp
		window.open(whatsappUrl, '_blank');
	});
})(jQuery);

