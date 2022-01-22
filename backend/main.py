from flask import Flask, render_template, jsonify, request, redirect, url_for
# from flask_pymongo import PyMongo
import firebase_admin

import pymongo
from pymongo import MongoClient
from bson.objectid import ObjectId
from bson.binary import UuidRepresentation
from bson import json_util

import json
import uuid
import random
import pprint
import datetime
import os

client = pymongo.MongoClient("mongodb+srv://EpicCodeWizard:TheHacktrical@thehacktrical.xt4g2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority""mongodb://EpicCodeWizard:TheHacktrical@localhost:port/cinema?authSource=admin", uuidRepresentation='standard')

db = client.cinema
jobs = db.job
user_s = db.user_schema

job = {
    'recruiter': 'Adam',
    'script': 'this is some script',
    'movieTitle': 'Marvel',
    'location': 'US',
    'jobid': uuid.uuid4(),
    "date": datetime.datetime.utcnow()
}
# jobs.insert_one(job)

app = Flask(__name__, template_folder="templates", static_folder="static")

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

    data = []
    for job in jobs.find():
        job.pop('_id')
        data.append(job)
    return jsonify(data)


@app.route("/jobs/job/<jobid>", methods=["GET"])
def jobingo(jobid):

    # '7fe16834-14b1-445e-b804-3b1afe9aeb5f'
    jobid = uuid.UUID(jobid)
    job = jobs.find_one({'jobid': jobid})
    job.pop('_id')
    return jsonify(job)


@app.route("/jobs/create", methods=["POST"])
def createjob():

    user_data = request.get_json()

    job = {
        'name': user_data['name'],
        'recruiter': user_data['recruiter'],
        'jobid': uuid.uuid4()
    }

    jobs.create_one(job)
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


app.run(host='0.0.0.0')