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
	var modal = document.getElementById("my-modal");
	modal.style.display = 'flex';

	functions.renderModalContent.call(this);
	
};

functions.closeModal = function (event) {
	var modal = document.getElementById("my-modal");
	var xSpan = document.getElementsByClassName('close')[0];
	if(event.target == modal || event.target == xSpan) {
		console.log('hey')
		modal.style.display = 'none';
	}
	
};

content.projects = {};

content.projects.apple  = {
	img: 'apple.png',
	title: 'Recreating the apple webpage',
	description: 'One of my first projects with plain HTML/CSS, it was a design orientated project to recreate the apple landing page.',
	technologies: ['html', 'css']
};

content.projects.roboto = {
	img: 'roboto.png',
	title: 'Roboto roams',
	description: 'Roboto is the roaming robot which can roam throughout the realms of his ipad home',
	technologies: ['html', 'css', 'JS']
};

content.projects.tv = {
	img: 'roboto.png',
	title: 'Netflix who?',
	description: 'I enabled many features on this project, including enabling the search feature, dealing with template pages and also working with api endpoints',
	technologies: ['html', 'css', 'JS', 'python', 'bottle']
};

content.projects.toDo = {
	img: 'roboto.png',
	title: 'To do app',
	description: 'Roboto is the roaming robot which can roam throughout the realms of his ipad home',
	technologies: ['html', 'css', 'JS', 'firebase']
};

content.projects.teachings = {
	img: 'roboto.png',
	title: 'Values, values, values...',
	description: 'OF my personal favourites, and not for its technological complexity. This web app enables one to connect with their core values in many different ways.',
	technologies: ['html', 'css', 'JS', 'firebase']
};

content.projects.memory = {
	img: 'roboto.png',
	title: 'Memory game',
	description: 'This was my first React project. This is an example fof the classic memory game, based on one of the best things in life... Food!',
	technologies: ['html', 'css', 'JS', 'React']
};

functions.renderModalContent = function() {
	var id = this.id;
	var keyObject = content.projects[id]; 

	var image = document.getElementById('modal-image');
	var title = document.getElementById('modal-title');
	var description = document.getElementById('modal-description');
	var technologies = document.getElementById('modal-technologies');
	console.log(keyObject)
	image.style.backgroundImage = `url(./images/${keyObject.img})`;
	title.innerText = keyObject.title;
	description.innerText = keyObject.description;
};
functions.start();
