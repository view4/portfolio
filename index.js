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

	//event Listeners to modal arrows
	var next = document.getElementsByClassName('next')[0];
	var prev = document.getElementsByClassName('prev')[0];
	next.addEventListener('click', () => functions.changeModalSlide(content.projects.slideIndex += 1));
	prev.addEventListener('click', () => functions.changeModalSlide(content.projects.slideIndex -= 1));

	// event Listeners for modal carousels
	var dots = document.getElementsByClassName('dot');
	for(var i = 0; i < dots.length; i++){
		dots[i].addEventListener('click', functions.changeSlideIndex)
	}
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
		modal.style.display = 'none';
	}
	
};

content.projects = {};

content.projects.apple  = {
	img: ['apple.png','apple-two.png', 'apple-three.png'],
	title: 'Recreating the apple webpage',
	description: 'A basic project where I recreated the apple landing page from scratch. This project shows the extent of my ability to pay attention to detail and be a design-orientated developer. This was a great way to hone my bread and butter developer with the practice of HTML and CSS'
};

content.projects.roboto = {
	img: ['boto-one.png','boto-two.png', 'boto-three.png'],
	title: 'Roboto roams',
	description: 'Roboto is the roaming robot who can roam throughout the realms of his ipad home. This simple game includes the ability to change Roboto, into robo-boogey or robo-red, and he can move in any direction with the help of the compass.',
	technologies: ['html', 'css', 'JS']
};

content.projects.tv = {
	img: ['tv-one.png','tv-two.png', 'tv-three.png'],
	title: 'Netflix who?',
	description: 'A mock online tv network which enables one to browse through episodes of their favourite shows. On this project I enabled multiple endpoints, worked on templates, search features and bottle. It was a full-stack project, showing I have got the full series of skills to be a top web-developer (get it!). ',
	technologies: ['html', 'css', 'JS', 'python', 'bottle']
};

content.projects.toDo = {
	img: ['todo-one.png','todo-two.png', 'todo-three.png'],
	title: 'To do app',
	description: 'To-do: Write a to-do list... This project involved the use of React and Firebase which I really enjoyed working with. Here, I made a more complicated version of the common to-do list; converting it into a single-page web app. ',
	technologies: ['html', 'css', 'JS', 'firebase']
};

content.projects.teachings = {
	img: ['teachings-one.png','teachings-two.png', 'teachings-three.png'],
	title: 'Values, values, values...',
	description: 'Perhaps one of my personal favourite projects, and not for its technological complexity but because of its introspective and meaningful nature. This web app enables one to connect record different aspects of a specific belief or value, something which shows the extensive lack of depth which can be within them. I also used firebase and vanilla javascript on this project',
	technologies: ['html', 'css', 'JS', 'firebase']
};

content.projects.memory = {
	img: ['memory-one.png','memory-two.png', 'memory-three.png'],
	title: 'Memory game',
	description: 'This was basically my first React project, the beginning of a beautiful relationship. It was initially a bit of a struggle to get used to react and I remember getting a bit stuck with the logic on this project but eventually I made it through. To create a memory game about.... food!',
	technologies: ['html', 'css', 'JS', 'React']
};

content.projects.slideIndex = 0;
content.projects.activeModalKey = ''

functions.renderModalContent = function() {
	var id = this.id;
	content.projects.activeModalKey = id;
	var keyObject = content.projects[id]; 

	//var image = document.getElementById('modal-image');
	var title = document.getElementById('modal-title');
	var description = document.getElementById('modal-description');
	var technologies = document.getElementById('modal-technologies');
	//image.style.backgroundImage = `url(./images/${keyObject.img})`;
	title.innerText = keyObject.title;
	description.innerText = keyObject.description;

	functions.changeModalSlide(content.projects.slideIndex = 0);
};

functions.changeSlideIndex = function() {
	var dots = document.getElementsByClassName('dot');
	var index = this.classList[1];

	if(index == 'one'){
		index = 0;	
	} else if (index == 'two') {
		index = 1;
	} else if (index =='three') {
		index = 2;
	}

	functions.changeModalSlide(content.projects.slideIndex = index);
	for (i = 0; i < dots.length; i++) {
      		dots[i].className = dots[i].className.replace(" active", "");
  	}
	this.className += ' active'
}

functions.changeModalSlide = function (num) {

	var slides = content.projects[content.projects.activeModalKey].img
	var slide = document.getElementsByClassName('myslides')[0];
	var dots = document.getElementsByClassName('dot');

	if( num >= slides.length){
		content.projects.slideIndex = 0;	
	}else if (num < 0 ){
		content.projects.slideIndex = slides.length - 1;
	};

	slide.style.backgroundImage = `url(./images/${slides[content.projects.slideIndex]})`;

}
functions.start();
