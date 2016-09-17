
import axios from 'axios';
import { configCredentials } from '../../utils/awsUtils.js';

export function facebookResponse(response) {

	console.log(response)

	return (dispatch, getState) => {

		dispatch({
			type: "FACEBOOK_RESPONSE",
			response
		});

		configCredentials(response.accessToken, () => {

			dispatch({
				type: "AWS_RESPONSE",
				isAuthenticated: true
			});

		});

	}

}
