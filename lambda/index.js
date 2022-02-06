exports.handler = async (event) => {
	var request, number, nabeatsu, statusCode, errMessage;

	// Try to convert event as JSON
	try {
		number = Number(JSON.parse(JSON.stringify(event)).number);
	} catch (e) {
		const response = {
			statusCode: 400,
			"nabeatsu": null,
			"message": "Bad Request: Your request cannot be converted to JSON format."
		};

		return response;
	}

	// Implementation of Nabeatsu
	if (40 < number) {
		nabeatsu = 9;
	} else if (number % 3 == 0) {
		nabeatsu = 1;
	} else if (number.toString().includes('3')) {
		nabeatsu = 2;
	} else {
		nabeatsu = 0;
	}

	const response = {
		statusCode: 200,
		"number": number,
		"nabeatsu": nabeatsu
	};
	return response;
};

