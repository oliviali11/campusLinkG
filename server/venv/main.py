from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
cors = CORS(app, origins='*')

# @app.route("/api/users", methods=['GET'])
# def users():
#     return jsonify(
#         {
#             "users": [
#                 'arpan',
#                 'zach',
#                 'jessie'
#             ]
#         }
#     )

# Define the endpoint and API key

# Function to send a message to the chatbot

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