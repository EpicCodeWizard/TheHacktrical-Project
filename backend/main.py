from flask import Flask, render_template, jsonify, request
from flask_pymongo import PyMongo
import firebase_admin

app = Flask(__name__, template_folder="templates", static_folder="static")

app.config["MONGO_URI"] = "mongodb+srv://EpicCodeWizard:TheHacktrical@thehacktrical.xt4g2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority""mongodb://EpicCodeWizard:TheHacktrical@localhost:port/TheHacktrical?authSource=admin"
mongo = PyMongo(app)

firebase_admin.initialize_app(firebase_admin.credentials.Certificate("key.json"), {"storageBucket": "thehacktrical.appspot.com"})
db = firebase_admin.firestore.client()
bucket = firebase_admin.storage.bucket()

users = firebase.collection("users")

def find_user_mongo(username):
    return mongo.db.users.find({"name": username})

def upload_file_firebase(filename):
    blob = bucket.blob(filename)
    blob.upload_from_filename('/' + filename)
    blob.make_public()
    return blob.public_url

@app.route("/")
def home():
	return render_template("index.html")

@app.route("/jobs", methods=["GET"])
def alljobs():
	return jsonify("")

@app.route("/jobs/job/<jobid>", methods=["GET"])
def jobingo(jobid):
	return jsonify("")

@app.route("/jobs/create", methods=["POST"])
def createjob():
	return jsonify("")

@app.route("/recordings/job/<jobid>", methods=["GET", "POST"])
def recording(jobid):
	return jsonify("")

@app.route("/jobs/remove/<jobid>", methods=["POST"])
def removejob(jobid):
	return jsonify("")

@app.route("/dashboard/user/<userid>", methods=["GET"])
def dashboard(userid):
	return jsonify("")

@app.route("/jobs/search", methods=["GET"])
def searchjob():
	return jsonify("")

app.run(host='0.0.0.0')