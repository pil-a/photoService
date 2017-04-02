import { Configuration } from './Configuration';

export default class HttpManager {
	getData() {
		return fetch('/design')
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('something goes wrong: ' + response);
			})
			.then(data => {
				return data;
			})
			.catch(error => {
				return Promise.reject(Error(error.message));
			});
	}
}