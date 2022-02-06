const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index', { 'title': 'Welcome to Nabeatsu of the World' });
});

app.post('/nabeatsu', (req, res) => {
	if (!Number.isInteger(req.body.number)) {
		return res.render('error', { 'title': 'Server Error' });
	}

	const https = require('https');

	const options = {
		hostname: '',
		port: 443,
		path: '/',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-api-key': ''
		}
	};

	let data = '';

	const request = https.request(options, (response) => {
		console.log('statusCode:', response.statusCode);

		response.on('data', (d) => {
			data += d;
		});

		response.on('error', () => {
			return res.render('error', { 'title': 'Server Error' });
		});

		response.on('end', () => {
			if (response.statusCode != '200') {
				return res.render('error', { 'title': 'Server Error'});
			} else {
				console.log(JSON.parse(data));
				dataParsed = JSON.parse(data);
				res.render('nabeatsu', {
					'statusCode': dataParsed.statusCode,
					'number': dataParsed.number,
					'nabeatsu': dataParsed.nabeatsu,
					'title': 'Result'
				});
			}
		});
	});

	request.write(JSON.stringify({'number': req.body.number}));
	request.end();
});

app.listen(port, () => {
    console.log('Example app listening on port ${port}.');
});
