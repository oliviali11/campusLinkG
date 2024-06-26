from flask import Flask, jsonify, request, session, redirect, url_for
from pymongo import MongoClient
from flask_cors import CORS
from bson.objectid import ObjectId
from bson.json_util import dumps
import bcrypt
import requests
import certifi
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(24).hex()
cors = CORS(app, origins='*')


# MongoDB connection
client = MongoClient('mongodb+srv://artsyoli11:Uh28xxh8yP6O4H6l@rideclaremontcluster.mwq7krb.mongodb.net/?retryWrites=true&w=majority&appName=rideClaremontCluster&ssl=true&tlsAllowInvalidCertificates=true')
db = client['rideclaremont']  # Replace 'mydatabase' with your database name
users_collection = db['users']

# Routes
@app.route('/')
def index():
    return "Welcome!"

@app.route('/register', methods=['POST'])
def register():
    # Retrieve user data from request
    username = request.json['username']
    password = request.json['password']

    # Hash the password
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # Insert user into database
    users_collection.insert_one({'username': username, 'password': hashed_password})
    
    return jsonify({'message': 'User registered successfully!'})

@app.route('/login', methods=['POST'])
def login():
    # Retrieve user data from request
    username = request.json['username']
    password = request.json['password']

    # Find user in the database
    user = users_collection.find_one({'username': username})

    if user:
        # Check if password matches
        if bcrypt.checkpw(password.encode('utf-8'), user['password']):
            # Store user data in session
            session['username'] = username
            return jsonify({'message': 'Login successful!'})
    
    return jsonify({'message': 'Invalid username/password combination'}), 401

@app.route('/profile')
def profile():
    # Check if user is logged in
    if 'username' in session:
        return f"Welcome {session['username']}!"
    else:
        return redirect(url_for('login'))

@app.route('/logout')
def logout():
    # Remove user data from session
    session.pop('username', None)
    return jsonify({'message': 'Logged out successfully!'})


def get_ai_snippets_for_query(query):
    headers = {"X-API-Key": "a504b5cb-9ed3-41c8-a466-aa8992c1e6d3<__>1PVqZSETU8N2v5f4AQnANCQx"}
    params = {"query": query}
    return requests.get(
        f"https://api.ydc-index.io/search",
        params=params,
        headers=headers,
    ).json()
    
results = get_ai_snippets_for_query("reasons to smile")
print(results)

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    if not user_message:
        return jsonify({"error": "No message provided"}), 400
    bot_response = get_ai_snippets_for_query(user_message)
    return jsonify(bot_response)

if __name__=="__main__":
    app.run(debug=True, port=8000)