function ready() {
	let isChanged = false;
	let isIncrease = 1;

	tree.addEventListener('click', function(event){

		let childrenShelter = event.target.parentNode.querySelector('ul');
		let target = event.target;

		let sublist = target.closest('.list').querySelectorAll('.sublist');
		let sublistSublist = target.closest('.list').querySelectorAll('.sub__sublist');
		let subSubSublist = target.closest('.list').querySelectorAll('.sub-sub__sublist');

		if(target.tagName == 'BUTTON' && childrenShelter) {
			console.log(isIncrease);
			if (isIncrease == 1 || isIncrease == 6) {
				for (let i = 0; i < sublist.length; i++) {
					if (sublist[i].hidden == true) {
						sublist[i].hidden = false;
					} else if (sublist[i].hidden == false) {
						sublist[i].hidden = true;
						isIncrease = 0;
					}
				};
				isIncrease++;
			} else if (isIncrease == 2 || isIncrease == 5) {
				for (let i = 0; i < sublistSublist.length; i++) {
					if (sublistSublist[i].hidden == true) {
						sublistSublist[i].hidden = false;
					} else if (sublistSublist[i].hidden == false) {
						sublistSublist[i].hidden = true;
					}
				};
				isIncrease++;
			} else if (isIncrease == 3 || isIncrease == 4 ) {
				for (let i = 0; i < subSubSublist.length; i++) {
					if (subSubSublist[i].hidden == true) {
						subSubSublist [i].hidden = false;
					} else if (subSubSublist[i].hidden == false) {
						subSubSublist[i].hidden = true;
					}
				};
				isIncrease++;
			};
		};
	});
		//let elements = document.querySelectorAll('ul >li');
		//let CloseEverything = target.closest('.list').querySelector('ul');
	

		


	
		// if (target.tagName == 'SPAN') { //&& !isChanged
		// 	childrenShelter.hidden = !childrenShelter.hidden;
		// 	//isChanged = true;
		// };
	
		// if (target.tagName == 'BUTTON' && !childrenShelter) {  //&& !isChanged
		// 	CloseEverything  = target.closest('.list').querySelector('ul');
		// 	CloseEverything.hidden = !CloseEverything.hidden;
		// 	isChanged = true;
		// };
	
		// if (target.tagName == 'BUTTON' && childrenShelter) { //&& !isChanged
		// 	 childrenShelter.hidden = !childrenShelter.hidden;
		// 	 //isChanged = true;
		// };

		// if (target.className == 'sublist') {
		// 	childrenShelter.hidden = !childrenShelter.hidden;
		// }

		// for(let i = 0; i <3; i++) {
		// 	console.log(i);
		// };

		//if(target.className == '.sub__sublist' && !isChanged) {
			 //childrenShelter.isOpen = !childrenShelter.isOpen;
			 //isChanged = true;
		//}
  
		
	//});
		
	};

	

document.addEventListener('DOMContentLoaded', ready);
	