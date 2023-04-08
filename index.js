function ready() {


	tree.addEventListener('click', function(event){
		let childrenShelter = event.target.parentNode.querySelector('ul');
		let target = event.target;
		//let CloseEverything = target.closest('.list').querySelector('ul');
	
		if (target.tagName == 'SPAN') {
			childrenShelter.hidden = !childrenShelter.hidden;
		};
	
		if (target.tagName == 'BUTTON' && !childrenShelter) {
			CloseEverything  = target.closest('.list').querySelector('ul');
			CloseEverything.hidden = !CloseEverything.hidden;
		};
	
		if (target.tagName == 'BUTTON' && childrenShelter) {
			 childrenShelter.hidden = !childrenShelter.hidden;
		};
	});
		
	};
	document.addEventListener('DOMContentLoaded', ready);
	