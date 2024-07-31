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

			// Gambar logo
			var logoNormal = $('#logo-normal');
			var logoScroll = $('#logo-scroll');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
					logoNormal.hide();
					logoScroll.show();
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
					logoNormal.show();
					logoScroll.hide();
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


	// Inisialisasi datepicker
	$.fn.datepicker.dates['id'] = {
		days: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
		daysShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
		daysMin: ["Mi", "Se", "Sel", "Ra", "Ka", "Ju", "Sa"],
		months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
		monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
		today: "Hari Ini",
		clear: "Hapus",
		titleFormat: "M yyyy", /* Leverages the title format for month and year */
		weekStart: 0
	};
	$('#book_pick_date, #book_off_date').datepicker({
		'format': 'dd MM yyyy',
		'autoclose': true,
		'startDate': new Date(), // Menentukan tanggal mulai dari hari ini
		'language': 'id' // Menetapkan bahasa ke bahasa Indonesia
	});

	$('#time_pick').timepicker({
		timeFormat: 'H:i'
	});

	// Inisialisasi dropdown mobil
	var carSelect = $('#carName');

	var cars = [
		{ value: '', text: 'Pilih Mobil', disabled: true, selected: true },
		{ value: 'New Avanza', text: 'New Avanza' },
		{ value: 'New Xenia', text: 'New Xenia' },
		{ value: 'Xpander', text: 'Xpander' },
		{ value: 'Innova Reborn', text: 'Innova Reborn' },
		{ value: 'Pajero', text: 'Fortuner' },
		{ value: 'Alphard', text: 'Alphard' },
		{ value: 'Mercedes-Benz', text: 'Mercedes-Benz' },
		{ value: 'Hiace Premio Luxury', text: 'Hiace Premio Luxury' },
		{ value: 'Hiace Commuter', text: 'Hiace Commuter' },
		{ value: 'Isuzu ELF', text: 'Isuzu ELF' },

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
		{ value: '12 Jam', text: '12 Jam' }
	];

	// Tambahkan opsi untuk durasi sewa dari 1 hari hingga 30 hari
	for (var i = 1; i <= 30; i++) {
		var value = i + ' Hari'; // Menambahkan 's' untuk plural
		var text = i + ' Hari';
		durations.push({ value: value, text: text });
	}

	function populateDurations() {
		rentalSelect.empty(); // Hapus semua opsi sebelumnya
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
	}

	function updateDuration() {
		var pickDate = $('#book_pick_date').datepicker('getDate');
		var offDate = $('#book_off_date').datepicker('getDate');

		if (pickDate && offDate) {
			var diffDays = Math.floor((offDate - pickDate) / (1000 * 60 * 60 * 24)) + 1; // Menghitung selisih hari

			if (diffDays > 0) {
				// Filter dropdown durasi sewa sesuai dengan selisih hari
				var filteredDurations = durations.filter(function (duration) {
					var value = parseInt(duration.value);
					return !isNaN(value) && value >= diffDays;
				});

				rentalSelect.empty(); // Hapus semua opsi sebelumnya
				filteredDurations.forEach(function (duration) {
					var option = $('<option>').val(duration.value).text(duration.text);
					rentalSelect.append(option);
				});

				// Pilih durasi sesuai dengan selisih hari jika ada
				rentalSelect.val(diffDays + ' Hari');
			}
		}
	}

	// Panggil populateDurations saat inisialisasi
	populateDurations();

	// Tambahkan event listener pada perubahan tanggal
	$('#book_pick_date, #book_off_date').on('changeDate', function () {
		updateDuration();
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
		const message = `*Selamat datang di Samudra Trans* 
	
Terima kasih telah memilih layanan kami untuk kebutuhan transportasi kamu. Kami berkomitmen untuk memberikan pengalaman berkendara yang nyaman, aman, dan menyenangkan. Untuk memulai pemesanan, silakan isi formulir berikut dengan informasi lengkap kamu. Tim kami akan segera menghubungi kamu untuk konfirmasi dan detail lebih lanjut.
	\n` +
			`Nama Pelanggan : ${custName}\n` +
			`Nama Mobil        : ${carName}\n` +
			`Lokasi Ambil        : ${pickupLocation}\n` +
			`Lokasi Kembali    : ${returnLocation}\n` +
			`Tanggal Ambil     : ${pickupDate}\n` +
			`Tanggal Kembali : ${returnDate}\n` +
			`Waktu Ambil       : ${pickupHour}\n` +
			`Durasi Sewa        : ${rentalDuration}\n` +
			'\nSelamat menikmati perjalanan kamu bersama Samudra Trans.';

		// Encode URL
		const encodedMessage = encodeURIComponent(message);
		//nomor whatsapps
		const whatsappUrl = `https://wa.me/6281389892426?text=${encodedMessage}`;

		// Arahkan ke WhatsApp
		window.open(whatsappUrl, '_blank');
	});

	$(document).ready(function () {
		$('.request-form').on('submit', function (event) {
			event.preventDefault(); // Mencegah form dari pengiriman default

			// Mengambil elemen counter
			const counter = $('#customerCount');

			// Mendapatkan nilai saat ini
			let currentCount = parseInt(counter.text());

			// Menambahkan 1 ke nilai saat ini
			currentCount += 1;

			// Memperbarui teks elemen dengan nilai baru
			counter.text(currentCount);
		});
	});

})(jQuery);

