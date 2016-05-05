import json

#userAuthorized should be a bool value
def writeToJSON(userAuthorized):
	with open("authentication.json", "w+") as output:
		json.dump({'Authorized': userAuthorized}, output, indent=4)
	
	print("Successfully wrote JSON file 'authentication' with Authorized value: {}".format(userAuthorized))

