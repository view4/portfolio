functions = {};
content = {};
utils = {};

content.welcome = {};
content.welcome.iAm = [
	'Gabriel Morris',
	'a thinker',
	'a do-er',
	'a creator',
	'a developer',
	'a believer',
	'so much more.'
	
];
content.welcome.isDeleting = false;
content.welcome.currentText = '';
content.welcome.loopNumber = 0;


functions.start = function() {
	setTimeout(functions.whoAmI, 1500);
	functions.changeImg();

	//Event listeners to open modal
	var projects = document.getElementsByTagName('figure');
	console.log(projects);
	for(var i = 0; i < projects.length; i++) {
		projects[i].addEventListener('click', functions.openModal);
	};
	// event listeners to close modal
	var xSpan = document.getElementsByClassName('close')[0];
	xSpan.addEventListener('click', functions.closeModal);
	window.addEventListener('click', functions.closeModal);
};

functions.whoAmI = function() {
	var phraseArray = content.welcome.iAm;
	var loopNumber = content.welcome.loopNumber;
	var period = 2000;
	var text = content.welcome.currentText;
	var isDeleting = content.welcome.isDeleting;

	var i = loopNumber % phraseArray.length;
	var fullText = phraseArray[i];


	if(isDeleting){
		text = fullText.substring(0, text.length - 1);
	} else {
		text = fullText.substring(0, text.length + 1);
	};
	content.welcome.currentText = text;
	document.getElementById('typewriter-wrapper').innerText = text;

	var delta = 200 - Math.random() * 100;

	if(isDeleting){
		delta /=2;	
	};

	if(!isDeleting && text == fullText) {
		delta = period;
		content.welcome.isDeleting = true;
	} else if(isDeleting && text == '') {
		content.welcome.isDeleting = false;
		content.welcome.loopNumber++;
		delta = 500;
	} ;
	setTimeout(functions.whoAmI, delta);

};
content.about = {};
content.about.images = ['./images/Benj+sushi.jpg','./images/Nate+I.jpg', './images/Family.jpg', './images/Tzahi_and_I.jpg', './images/Token.jpg','./images/Opener.jpg' ];
content.about.currentIndexImg = 0;

functions.changeImg = function () {
	var slide =  document.getElementById('slide');
	var images = content.about.images;
	var i = content.about.currentIndexImg;
	slide.style.backgroundImage = `url(${images[i]})`;
	if(i < images.length-1){
		content.about.currentIndexImg++;
	} else{
		content.about.currentIndexImg=0;
	};
	setTimeout(functions.changeImg,3500);
};

functions.openModal = function () {
	console.log('open modal here');
	var modal = document.getElementById("my-modal");
	console.log(modal)
	modal.style.display = 'block';
	
};

functions.closeModal = function (event) {
	var modal = document.getElementById("my-modal");
	var xSpan = document.getElementsByClassName('close')[0];
	if(event.target == modal || event.target == xSpan) {
		console.log('hey')
		modal.style.display = 'none';
	}
	
};
functions.start();
