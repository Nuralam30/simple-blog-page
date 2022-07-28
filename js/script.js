

	//sidebar navigation start
	let navbar = document.querySelector('.navlist');
	let list = document.querySelector('.navlist').children;
	//console.log(list.length);

	for (var i = 0; i < list.length; i++) {
		list[i].addEventListener('click', function(){

			for (var j = 0; j < list.length; j++){
				list[j].classList.remove('active');
			}
			//this.classList.add('active');
			});
		}

	
	//seemore button start
	let seeMore = document.getElementById('seeMorebtn');
	let info = document.getElementById('details');

	if(seeMore){
		for (var i = 0; i < seeMore.length; i++) {
			seeMore[i].addEventListener('click', function(){
			info.style.display = 'block';
		})
	}
	}