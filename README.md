# base-fook

# A forum for  you and your Frenemies.


# User Story

 **An API** for a social netrwork that uses a NoSQL database. When the server is started the Mongoose models are synced to the MongoDB.

**Api** routes are opened in Insomnia Core for users and thoughts and reactions to thoughts which are formated and displayed in Json.

## Packages
- express
- mongoose

## Usage
1. Make sure you have MongoDB installed on your machine (if you don't, follow the instructions on the [MongoDB Website](https://docs.mongodb.com/manual/installation/))
2. Clone the repo
3. Install dependencies with `npm -i`
4. Run `npm start` to run the server and make the API live
5. Use your browser or an app like [Insomnia](https://insomnia.rest/) to test the REST API.


## Models
- User
- Thought
- Reaction (used as a subdocument in Thought)


## Endpoints
**User**
- Get all users:        `GET /api/users`
- Create a user:        `POST /api/users`
- Get user by ID:       `GET /api/users/:id`
- Update a user:        `PUT /api/users/:id`
- Delete a user:        `DELETE /api/users/:id`
- Add a friend:         `PUT /api/users/:userId/friends/:friendId`
- Delete a friend:      `DELETE /api/users/:userId/friends/:friendId`

**Thought**
- Get all thoughts:     `GET /api/thoughts`
- Create a thought:     `POST /api/thoughts`
- Get thought by ID:    `GET /api/thoughts/:id`
- Update a thought:     `PUT /api/thoughts/:id`
- Delete a thought:     `DELETE /api/thoughts/:id`

**Reaction**
- Add a reaction:       `PUT /api/thoughts/:id/reactions`
- Delete a reaction:    `DELETE /api/thoughts/:id/reactions`

**InQuiries**

**Brad Spurrell** 
- https://bspur11.github.io/brad-port/


## Links to Demo Videos

 - https://drive.google.com/file/d/1hKni9GT_2XoWcbssj-xvjIJ5wdMC94oH/view 1 latest

 - https://drive.google.com/file/d/1GsAFfF44WNyAC8Iauav4YxKArdMBcRf3/view