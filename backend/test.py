# -*- coding: utf-8 -*-
from flask import Flask, render_template, jsonify, request, redirect, url_for
from firebase_admin import firestore, storage
from flask_pymongo import PyMongo
import firebase_admin
import datetime
import uuid

app = Flask(__name__, template_folder="templates", static_folder="static")
app.config["MONGO_URI"] = "mongodb+srv://EpicCodeWizard:TheHacktrical@thehacktrical.xt4g2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongo = PyMongo(app)
mongo_db = mongo.db.cinema
jobs = mongo_db.jobs
user_s = mongo_db.users

firebase_app = firebase_admin.initialize_app(firebase_admin.credentials.Certificate("thehacktrical-firebase-adminsdk-39ck4-aa933d23c5.json"), {"storageBucket": "thehacktrical.appspot.com"})
db = firestore.client(app=firebase_app)
bucket = storage.bucket()
users = db.collection("users")

def add_user(info):
    user_s.insert_one(info)

def delete_user(info):
    user_s.delete_one({"id": uuid.UUID(info['id'])})
    user_s.insert_one(info)

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
    data = []
    for job in jobs.find():
        job.pop('_id')
        data.append(job)
    return jsonify(data)


@app.route("/jobs/job/<jobid>", methods=["GET"])
def jobingo(jobid):
    jobid = uuid.UUID(jobid)
    job = jobs.find_one({'jobid': jobid})
    job.pop('_id')
    return jsonify(job)


@app.route("/jobs/create", methods=["POST"])
def createjob():
    job_data = request.get_json()
    job = {
        'recruiter': job_data['recruiter'],
        'script': job_data['script'],
        'movieTitle': job_data['movieTitle'],
        'location': job_data['location'],
        'id': job_data['id']
    }
    jobs.insert_one(job)
    return jsonify(job)


@app.route("/recordings/job/<jobid>", methods=["GET", "POST"])
def recording(jobid):
    return jsonify("")


@app.route("/jobs/remove/<jobid>", methods=["POST"])
def removejob(jobid):
    jobid = uuid.UUID(jobid)
    jobs.delete_one({'jobid': jobid})
    return jsonify("document deleted!")


@app.route("/dashboard/user/<userid>", methods=["GET"])
def dashboard(userid):
    return jsonify("")


@app.route("/jobs/search", methods=["GET"])
def searchjob():
    return jsonify("")

@app.route("/register", methods=["POST"])
def createUser():
    user_data = request.get_json()
    user = {
        'name': user_data['name'],
        'email': user_data['email'],
        'id': user_data['id'],
        'jobs': []
    }
    user_s.create_one(user)
    return jsonify("successfully added")


@app.route("/login", methods=["POST"])
def login():
    email = request.form.get('email')
    user = user_s.query.filter_by(email=email).first()
    if not user:
        return jsonify("user does not exist")
    return redirect(url_for('home'))

app.run(host='0.0.0.0')