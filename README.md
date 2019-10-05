# Mock-API

Simple extensible mock API served with [`json-server`](https://github.com/typicode/json-server)

API data generated using [`json-schema-faker`](https://github.com/json-schema-faker/json-schema-faker)

```javascript
{
  "deleted": false,
  "_id": "5d9788a179319c3630715d80",
  "startTime": "2019-10-04T18:00:01.145Z",
  "userId": {
    "last_stopped": {
      "file": "5d961369c54e8802423121c8",
      "lesson": "5d961369c54e8802423121c7"
    },
    "interests": [],
    "step": 3,
    "deleted": false,
    "_id": "5d95e6f1c54e880242312154",
    "firstName": "Mahdi",
    "lastName": "Moolla",
    "gender": "female",
    "profilePicture": "http://res.cloudinary.com/softcom/image/upload/v1570180448/5d970d60bc4f442d2e0c9dde.png",
    "phone": "09099999909",
    "email": "sqa10@softcom.ng",
    "matric": "20/89HJ090",
    "level": "200 Level",
    "organization": "5d95d3d895b05e7d4ef3aee1",
    "currentAcademicStage": "5d95e3eac54e88024231213d",
    "firstAccess": true,
    "password": "$2a$10$.lYaTTkwolZ2x4DM0R3RieBgMyt7Udie3Ln4wIXR1c.v8fD6fT512",
    "verified": true,
    "courses_started": [],
    "createdAt": "2019-10-03T12:17:53.738Z",
    "updatedAt": "2019-10-04T09:14:08.819Z",
    "__v": 0,
    "firebase_tokens": "dFzDP6fZAoY:APA91bFpDkF-ISq_JiqiE-sFZveUlybE0F-3AVlRKj_lc7mgLuioXPgsSKMhOM8H6hqXsWwePm7P50PmbN_WQt17x0y4kGbyq2fF9snVtiEMonDLN5Z88VhNQif5nZmcdBQITF66ysNt"
  },
  "assessment": {
    "questions": [
      "5d9717a6402f462d2d466b25",
      "5d9717a6402f462d2d466b26"
    ],
    "deleted": false,
    "_id": "5d9717a6402f462d2d466b24",
    "course": "5d95ed60c54e88024231216a",
    "name": "Intro Maths Assessment",
    "duration": "5",
    "deadline": "2019-10-05T00:00:00.000Z",
    "created_by": "5d95d3fe95b05e7d4ef3aee2",
    "organization": "5d95d3d895b05e7d4ef3aee1",
    "session": "5d95dcb4c54e88024231211f",
    "createdAt": "2019-10-04T09:57:58.432Z",
    "updatedAt": "2019-10-04T09:57:58.870Z",
    "__v": 0
  },
  "answers": [
    {
      "_id": "5d9788e979319c3630715d82",
      "question": {
        "options": [
          "qwe",
          "happy"
        ],
        "deleted": false,
        "_id": "5d9717a6402f462d2d466b25",
        "assessment": "5d9717a6402f462d2d466b24",
        "question": "What is Maths",
        "answer": "qwe",
        "feedback": "This is a staging feedback",
        "createdAt": "2019-10-04T09:57:58.859Z",
        "updatedAt": "2019-10-04T09:57:58.859Z",
        "__v": 0
      },
      "selection": "qwe"
    },
    {
      "_id": "5d9788e979319c3630715d81",
      "question": {
        "options": [
          "Math 1",
          "Math 2"
        ],
        "deleted": false,
        "_id": "5d9717a6402f462d2d466b26",
        "assessment": "5d9717a6402f462d2d466b24",
        "question": "Again I ask, what is Maths?",
        "answer": "Math 2",
        "feedback": "feed backkkkkkkk!!!!!!",
        "createdAt": "2019-10-04T09:57:58.861Z",
        "updatedAt": "2019-10-04T09:57:58.861Z",
        "__v": 0
      },
      "selection": "Math 1"
    }
  ],
  "createdAt": "2019-10-04T18:00:01.146Z",
  "updatedAt": "2019-10-04T18:01:13.169Z",
  "__v": 0,
  "endTime": "2019-10-04T18:01:12.777Z",
  "score": "50",
  "timeTaken": 0
}
```
