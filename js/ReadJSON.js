function read() {
	$.getJSON( "/FaceRecognition/authentication.json", function( json ) {
		console.log("JSON Data: " + json.Authorized);

		updateMessageForUserAuth(json.Authorized);
	});
}

