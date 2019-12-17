// issue 1
document.addEventListener('DOMContentLoaded', () => {
	const customer = document.getElementById('customer'),
		freelancer = document.getElementById('freelancer'),
		blockCustomer = document.getElementById('block-customer'),
		blockFreelancer = document.getElementById('block-freelancer'),
		blockChoice = document.getElementById('block-choice'),
		btnExit = document.getElementById('btn-exit'),
		formCustomer = document.getElementById('form-customer');

	const ordersStorage = [];

	function showTitleScreen() {
		blockFreelancer.style.display = 'none';
		blockCustomer.style.display = 'none';
		btnExit.style.display = 'none';
		blockChoice.style.display = 'block';
	}

	function showCustomerArea() {
		blockChoice.style.display = 'none';
		blockFreelancer.style.display = 'none';
		blockCustomer.style.display = 'block';
		btnExit.style.display = 'block';
	}

	function showFreelancerArea() {
		blockChoice.style.display = 'none';
		blockCustomer.style.display = 'none';
		blockFreelancer.style.display = 'block';
		btnExit.style.display = 'block';
	}

	function isEmpty(obj) {
		return Object.keys(obj).length === 0 && obj.constructor === Object;
	}

	customer.addEventListener('click', showCustomerArea);
	freelancer.addEventListener('click', showFreelancerArea);
	btnExit.addEventListener('click', showTitleScreen);

	formCustomer.addEventListener('submit', event => {
		event.preventDefault();

		let filteredFormElements = {};

		// issue 2
		[...formCustomer.elements].filter(item => {
			if (
				item.tagName === 'TEXTAREA' ||
				(item.tagName === 'INPUT' && item.type !== 'radio') ||
				(item.type === 'radio' && item.checked)
			) {
				filteredFormElements[item.name] = item;
			}
		});

		// issue 3
		formCustomer.reset();

		if (!isEmpty(filteredFormElements)) {
			ordersStorage.push(filteredFormElements);
		}
		console.clear();
		console.log(ordersStorage)
	});
});

