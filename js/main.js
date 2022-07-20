let commentController = {
	indexStar: null,
	street: null,
	relocation: false,
	money: null,
	validationComplete: false,

}
let linkYandex = null;
let starsValue = {
	"star_1": 1,
	"star_2": 2,
	"star_3": 3,
	"star_4": 4,
	"star_5": 5,
}
let listStars = ["star_1", "star_2", "star_3", "star_4", "star_5"];
let linkForstreet = {
	street1: 'https://yandex.ru/maps/org/ekspress_parikmakherskaya/167708224694/?display-text=%25EF%25E0%25F0%25E8%25EA%25EC%25E0%25F5%25E5%25F0%25F1%25EA%25E0%25FF%2520%25FD%25EA%25F1%25EF%25F0%25E5%25F1%25F1%2520%25EA%25E5%25EC%25E5%25F0%25EE%25E2%25EE&ll=86.087314%2C55.354968&mode=search&sll=86.087314%2C55.354968&sspn=0.328217%2C0.117361&text=%25EF%25E0%25F0%25E8%25EA%25EC%25E0%25F5%25E5%25F0%25F1%25EA%25E0%25FF%2520%25FD%25EA%25F1%25EF%25F0%25E5%25F1%25F1%2520%25EA%25E5%25EC%25E5%25F0%25EE%25E2%25EE&z=12',
	street2: 'https://yandex.ru/maps/org/ekspress_parikmakherskaya/127539216760/?display-text=%25EF%25E0%25F0%25E8%25EA%25EC%25E0%25F5%25E5%25F0%25F1%25EA%25E0%25FF%2520%25FD%25EA%25F1%25EF%25F0%25E5%25F1%25F1%2520%25EA%25E5%25EC%25E5%25F0%25EE%25E2%25EE&ll=86.087314%2C55.354968&mode=search&sll=86.087314%2C55.354968&sspn=0.328217%2C0.117361&text=%25EF%25E0%25F0%25E8%25EA%25EC%25E0%25F5%25E5%25F0%25F1%25EA%25E0%25FF%2520%25FD%25EA%25F1%25EF%25F0%25E5%25F1%25F1%2520%25EA%25E5%25EC%25E5%25F0%25EE%25E2%25EE&z=12',
	street3: 'https://yandex.ru/maps/org/ekspress_parikmakherskaya/165911237839/?display-text=%25EF%25E0%25F0%25E8%25EA%25EC%25E0%25F5%25E5%25F0%25F1%25EA%25E0%25FF%2520%25FD%25EA%25F1%25EF%25F0%25E5%25F1%25F1%2520%25EA%25E5%25EC%25E5%25F0%25EE%25E2%25EE&ll=86.087314%2C55.354968&mode=search&sll=86.087314%2C55.354968&sspn=0.328217%2C0.117361&text=%25EF%25E0%25F0%25E8%25EA%25EC%25E0%25F5%25E5%25F0%25F1%25EA%25E0%25FF%2520%25FD%25EA%25F1%25EF%25F0%25E5%25F1%25F1%2520%25EA%25E5%25EC%25E5%25F0%25EE%25E2%25EE&z=12',
	street4: 'https://yandex.ru/maps/org/ekspress_parikmakherskaya/87901981205/?display-text=%25EF%25E0%25F0%25E8%25EA%25EC%25E0%25F5%25E5%25F0%25F1%25EA%25E0%25FF%2520%25FD%25EA%25F1%25EF%25F0%25E5%25F1%25F1%2520%25EA%25E5%25EC%25E5%25F0%25EE%25E2%25EE&ll=86.087314%2C55.354968&mode=search&sll=86.087314%2C55.354968&sspn=0.328217%2C0.117361&text=%25EF%25E0%25F0%25E8%25EA%25EC%25E0%25F5%25E5%25F0%25F1%25EA%25E0%25FF%2520%25FD%25EA%25F1%25EF%25F0%25E5%25F1%25F1%2520%25EA%25E5%25EC%25E5%25F0%25EE%25E2%25EE&z=12',
	street5: 'https://yandex.ru/maps/org/ekspress_parikmakherskaya/84304122961/?display-text=%25EF%25E0%25F0%25E8%25EA%25EC%25E0%25F5%25E5%25F0%25F1%25EA%25E0%25FF%2520%25FD%25EA%25F1%25EF%25F0%25E5%25F1%25F1%2520%25EA%25E5%25EC%25E5%25F0%25EE%25E2%25EE&ll=86.087314%2C55.354968&mode=search&sll=86.087314%2C55.354968&sspn=0.328217%2C0.117361&text=%25EF%25E0%25F0%25E8%25EA%25EC%25E0%25F5%25E5%25F0%25F1%25EA%25E0%25FF%2520%25FD%25EA%25F1%25EF%25F0%25E5%25F1%25F1%2520%25EA%25E5%25EC%25E5%25F0%25EE%25E2%25EE&z=12',
}
function linkComment() {
	linkYandex = linkForstreet[commentController.street];
}




function activateComment() {
	if (commentController.indexStar !== null) {
		let comment = $('.comment');
		let review = $('.review');
		if ([0, 1, 2].includes(listStars.indexOf(commentController.indexStar))) {
			comment.removeClass('comment-hidden');
			review.addClass('review-hidden');
			commentController.relocation = false;
		} else {
			comment.addClass('comment-hidden');
			if (commentController.street !== null) {
				review.removeClass('review-hidden');
				commentController.relocation = true;
				linkComment()
			}

		}
	}
}



$('.streetList').click(function () {
	$('.streetList').toggleClass('streetList-active');
	$('.streetList__icon').toggleClass('streetList__icon-active');
});

$('.streetList__value').click(function () {
	commentController.street = $(this).attr('for')
	$('.streetList').addClass('streetList-in');
	$('.streetList__value-active').text($(this).text());
	$(this).parent().parent().addClass('section-active');
	$(this).parent().parent().children(".section__numbers").addClass('section__numbers-active');
	activateComment();
	activeButtonSend()
});





$('.streetList__value').click(function () {
	if ($(this).val() != ' ') {
		$($('.numbers__point')[0]).addClass('ok');
		$($('.numbers__line')[0]).addClass('ok-line');

	} else {
		$($('.numbers__point')[0]).removeClass('ok');
		$($('.numbers__line')[0]).removeClass('ok-line');
	}
});
$('.money__input').change(function () {
	if ($(this).val() != ' ') {
		$($('.numbers__point')[1]).addClass('ok');
		$($('.numbers__line')[1]).addClass('ok-line');

	} else {
		$($('.numbers__point')[1]).removeClass('ok');
		$($('.numbers__line')[1]).removeClass('ok-line');
	}
});
$('.star__input').change(function () {
	if ($(this).val() > 0) {
		console.log(11111)
		$($('.numbers__point')[2]).addClass('ok');
		$($('.numbers__line')[2]).addClass('ok-line');

	} else {
		console.log(2222)

		$($('.numbers__point')[2]).removeClass('ok');
		$($('.numbers__line')[2]).removeClass('ok-line');
	}
});






$('.money__input').change(function () {
	if ($(this).val() != '') {
		commentController.money = $(this).val();
		$(this).addClass('money__input-value');
		$(this).parent().parent().addClass('section-active');
		$(this).parent().parent().children(".section__numbers").addClass('section__numbers-active');
	} else {
		commentController.money = null;
		$(this).removeClass('money__input-value');
		$(this).parent().parent().removeClass('section-active');
		$(this).parent().parent().children(".section__numbers").removeClass('section__numbers-active');
	}
	activeButtonSend()
})



$('.star__icon').click(function () {
	let lastSection = $($('.section__numbers')[2]);
	commentController.indexStar = $(this).attr('for');
	let allStar = $(this).siblings()
	listStars.forEach((classStar) => allStar.removeClass('star__icon-' + classStar));
	$(this).addClass('star__icon-' + commentController.indexStar);
	allStar.removeClass('star__icon-active');
	$(this).addClass('star__icon-active');
	$(this).nextAll().addClass('star__icon-active');
	lastSection.addClass('section__numbers-active');
	// $(this).parent().parent().children( ".section__numbers" ).addClass('section__numbers-active');
	activateComment();
	activeButtonSend()
})
function activeButtonSend() {
	if (commentController.indexStar !== null &&
		commentController.money !== null &&
		commentController.street !== null) {
		$('.button').addClass('button-active');
		commentController.validationComplete = true;
		errorMessage.removeClass('P__error-active')
	} else {
		$('.button').removeClass('button-active');
		commentController.validationComplete = false;
	}
}
function relocation() {
	setTimeout(function () {
		if (linkYandex !== null && commentController.relocation === true) {
			window.location.replace(linkYandex);
			window.location.href = linkYandex;
		}
	}, 1500)
}

function sendData() {
	$.ajax({
		type: 'post',
		url: '../send.php',
		data: {
			street: $('#' + commentController.street).val(),
			money: commentController.money,
			star: starsValue[commentController.indexStar],
			comment: $('.comment__area').val()
		},
		error: function (response) {
		},
		success: function (response) {
			console.log(response);

		}
	});

}
let errorMessage = $('.P__error');

$('.button').click(function () {
	if (commentController.validationComplete) {
		sendData()
		relocation();
		errorMessage.removeClass('P__error-active')
		$('.P__successful').addClass('P__successful-active')
	} else {
		errorMessage.addClass('P__error-active')
		$('.P__successful').removeClass('P__successful-active')
	}

});
