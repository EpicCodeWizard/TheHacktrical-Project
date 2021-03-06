# -*- coding: utf-8 -*-

import email
from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
import uuid
import bson
from bson.binary import UuidRepresentation
from bson import json_util
import json

app = Flask(__name__, template_folder="templates", static_folder="static")
app.config["MONGO_URI"] = "mongodb+srv://EpicCodeWizard:TheHacktrical@thehacktrical.xt4g2.mongodb.net/TheHacktrical?retryWrites=true&w=majority"
app.config["uuidRepresentation"] = "standard"
mongo = PyMongo(app)
mongo_db = mongo.db.cinema
jobs = mongo_db.jobs
user_s = mongo_db.users
recordings = mongo_db.recordings

def parse_json(data):
    return json.loads(json_util.dumps(data))

@app.route("/jobs", methods=["GET"])
def allJobs():
    data = []
    for job in jobs.find():
        job.pop('_id')
        job['id'] = str(job['id'])
        data.append(job)
    return jsonify(data)

@app.route("/jobs/job/<jobid>", methods=["GET"])
def getJob(jobid):
    jobid = uuid.UUID(jobid)
    job = jobs.find_one({'jobid': str(jobid)})
    job.pop('_id')
    job['id'] = str(job['id'])
    return jsonify(job)

@app.route("/jobs/create", methods=["POST"])
def createJob():
    job_data = request.get_json()
    job_id = str(uuid.uuid4())
    job = {
        'recruiter': job_data['recruiter'],
        'script': job_data['script'],
        'title': job_data['title'],
        'location': job_data['location'],
        'id': str(job_id)
    }
    jobs.insert_one(job)
    data = user_s.find_one({"email": job_data['email']})
    user_s.delete_one({"email": job_data['email']})
    data['hosting_jobs'].append(job)
    user_s.insert_one(data)
    return str(job_id)

@app.route("/jobs/remove/<jobid>", methods=["POST"])
def removeJob(jobid):
    jobid = uuid.UUID(jobid)
    jobs.delete_one({'jobid': str(jobid)})
    request.get_json()['user']
    return ""

@app.route("/jobs/search/<searchquery>", methods=["GET"])
def searchJob(searchquery):
    res = []
    for job in jobs.find():
        if searchquery.lower().lstrip().rstrip() in job['title'].lower().lstrip().rstrip():
            job['id'] = str(job['id'])
            del job['_id']
            res.append(job)
    return jsonify(res)


@app.route("/recordings/job/<jobid>", methods=["GET"])
def jobRecordings(jobid):
    res = []
    for recording in recordings.find():
        if recording['job_id'] == jobid:
            del recording['_id']
            res.append(recording)
    return jsonify(res)

@app.route("/recordings/add/<jobid>", methods=["POST"])
def addRecording(jobid):
    body = request.get_json()
    recording_data = {
        'email': body['email'],
        'url': body['url'],
        'job_id': jobid
    }
    recordings.insert_one(recording_data)
    return jsonify(recording_data)


@app.route("/users/create", methods=["POST"])
def createUser():
    user_id = str(uuid.uuid4())
    user_data = request.get_json()
    user = {
        'name': user_data['name'],
        'email': user_data['email'],
        'id': str(user_id),
        'role': user_data['role'],
        'jobs': [],
        'hosting_jobs': []
    }
    user_s.insert_one(user)
    return ""

@app.route("/users/<email>", methods=["GET"])
def getUser(email):
    data = parse_json(user_s.find_one({"email": email}))
    # del data['_id']
    return jsonify(data)

@app.route("/users/change/<email>", methods=["POST"])
def changeUser(email):
    user_data = request.get_json()
    data = user_s.find_one({"email": email})
    user_s.delete_one({"email": email})
    data['name'] = user_data['name']
    data['email'] = user_data['email']
    user_s.insert_one(data)
    return ""


app.run(host='0.0.0.0')