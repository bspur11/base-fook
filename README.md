# base-fook

# A forum for  you and your Fenemies.


# User Story


### An API for a social netrwork that uses a NoSQL database. When the server is started the Mongoose models are synced to the MongoDB. 
Api routes are opened in Insomnia Core for users and thoughts which are formated and displayed in Json.

# Packages

express
moment
mongoose

# Usage
Make sure you have MongoDB installed on your machine (if you don't, follow the instructions on the MongoDB Website)
Clone the repo
Install dependencies with npm -i
Run npm start to run the server and make the API live
Use your browser or an app like Insomnia to test the REST API.

# Models 

User
Thought
Reaction (subdocument in Thought)

 # Endpoints
## User

Get all users: GET /api/users
Create a user: POST /api/users
Get user by ID: GET /api/users/:id
Update a user: PUT /api/users/:id
Delete a user: DELETE /api/users/:id
Add a friend: PUT /api/users/:userId/friends/:friendId
Delete a friend: DELETE /api/users/:userId/friends/:friendId
## Thought

Get all thoughts: GET /api/thoughts
Create a thought: POST /api/thoughts
Get thought by ID: GET /api/thoughts/:id
Update a thought: PUT /api/thoughts/:id
Delete a thought: DELETE /api/thoughts/:id
## Reaction

Add a reaction: PUT /api/thoughts/:id/reactions
Delete a reaction: DELETE /api/thoughts/:id/reactions