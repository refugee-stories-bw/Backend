# Refugee Stories API


#### API Base URL :
https://refugee-stories-backend-1.herokuapp.com

---

## Retrieve Stories
---
_HTTP Method: [GET]_  
__URL: /stories__

_The returned object will look like:_

```
[
    {
        "id": 2,
        "name": "Zahida",
        "title": "Returning home to Syria",
        "imageurl": null,
        "story": "The destruction was indescribable, and at first I did not recognize my town. When I saw it, it was one of the saddest moments in my life. There was no water, no electricity. We felt that we were in the stone age. But little by little, we made things better.",
        "isapproved": true
    },
    {
        "id": 4,
        "name": "Anonymous",
        "title": "Yaser's Story",
        "imageurl": null,
        "story": "For two long years Yaser's* five children, Ali*, 15, Achmed*, 14, Hala*, 10, Sedra*, 7 and Aya*, 3, have not been able to go to school or play outside. Violence kept them from living a normal life. There was constant fear of sniper and missile attacks. They learned what type of weapon was being used just by the sound it made.",
        "isapproved": true
    }
]
```


---
## Sign Up
---
_HTTP Method: [POST]_  
__URL: /signup__

Schema:

| Name | Type  | Required | description |
|------|:-----:|:---------:|:-----:|
|username | string | yes | unique username|
|password | string  | yes | password |
|admin | boolean | yes | defaults to false |

_Example_

```
{
	"username": "porter",
	"password": "123456"
}
```

_The returned object will be:_

```
{
    "username": "porter",
    "password": "$2a$09$NGfJ5myE6tvRBqQO.NUaMugbCLTGWa4BOIISq.qFiD1hGdMOUMPFK"
}

```

---
## Login
----

_HTTP Method: [POST]_  
__URL: /login__

Schema:

| Name | Type  | Required | description |
|------|:-----:|:---------:|:-----:|
|username | string | yes | unique username|
|password | string  | yes | password |

_Example_

```
{
	"username": "porter",
	"password": "123456"
}
```

_The returned object will be:_

```
{
    "message": "Welcome!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6ImxhbWJkYUFkbWluIiwiYWRtaW4iOjEsImlhdCI6MTU1MjU4NDYzNSwiZXhwIjoxNTUyNjcxMDM1fQ.InIpcAjxIbCSL-Fmfbm2gXOr_JH3l0UlaDYdXnxt1nY"
}

```

---

## Submit Story
------

_HTTP Method: [POST]_  
__URL: /submitStory__

Schema:

| Name | Type  | Required | description |
|------|:-----:|:---------:|:-----:|
|name| string | yes | submitter's name|
|title | string  | yes | story title|
|imageurl | string | no | url to image|
|story | text  | yes | story submission content |
|isapproved | boolean  | yes | defaults to false |

_Example_

```
{
	"title": "This is a test2",
	"name": "Tester",
	"story": "Hello there.  I'm a test story, blah blah blah blah.   Blah",
	"imageurl": "https://http.cat/",
	"isapproved": 0
}
```

_The returned object will be the story's id:_

```
[
    13
]
```

---

## **Authorized API Calls**

_will only render/work if a user has an authorization header_

---

## Retrieve All Submitted Stories
-------------------
_HTTP Method: [GET]_  
__URL: /submissions__

_The returned object will look like:_

```
[
    {
        "id": 2,
        "name": "Zahida",
        "title": "Returning home to Syria",
        "imageurl": null,
        "story": "The destruction was indescribable, and at first I did not recognize my town. When I saw it, it was one of the saddest moments in my life. There was no water, no electricity. We felt that we were in the stone age. But little by little, we made things better.",
        "isapproved": true
    },
    {
        "id": 4,
        "name": "Anonymous",
        "title": "Yaser's Story",
        "imageurl": null,
        "story": "For two long years Yaser's* five children, Ali*, 15, Achmed*, 14, Hala*, 10, Sedra*, 7 and Aya*, 3, have not been able to go to school or play outside. Violence kept them from living a normal life. There was constant fear of sniper and missile attacks. They learned what type of weapon was being used just by the sound it made.",
        "isapproved": false
    }
]
```
---

## Update a Story
---
_HTTP Method: [PUT]_  
__URL: /submissions/:id__

Schema:

| Name | Type  | Required | description |
|------|:-----:|:---------:|:-----:|
|name| string | yes | submitter's name|
|title | string  | yes | story title|
|imageurl | string | no | url to image|
|story | text  | yes | story submission content |
|isapproved | boolean  | yes | defaults to false |

_Example_

```
{
	"title": "This is a test2",
	"name": "Tester",
	"story": "Hello there.  I'm a test story, blah blah blah blah.   Blah",
	"imageurl": "https://http.cat/",
	"isapproved": true
}
```

_The returned object will be the same as the updated fields above_

```
{
	"title": "This is a test2",
	"name": "Tester",
	"story": "Hello there.  I'm a test story, blah blah blah blah.   Blah",
	"imageurl": "https://http.cat/",
	"isapproved": true
}
```
---

## Delete a Story
---
_HTTP Method: [DELETE]_  
__URL: /submissions/:id__

Schema:

| Name | Type  | Required | description |
|------|:-----:|:---------:|:-----:|
|name| string | yes | submitter's name|
|title | string  | yes | story title|
|imageurl | string | no | url to image|
|story | text  | yes | story submission content |
|isapproved | boolean  | yes | defaults to false |

_Example_

```
{
    "id": 2,
    "name": "Moo Chan",
    "title": "My Story",
    "imageurl": null,
    "story": "One day he was in China doing business when he was arrested. He was repatriated and sat in prison for two months before being released. It was then that he truly realized that life was hopeless in North Korea and started to think about joining his resettled family members and good friends in the South. He wanted to be with them more than anything, so he escaped.",
    "isapproved": 0
}
```

_The returned object will be the same as the updated fields above_

```
{
    "message": "The story has been deleted."
}
```
---
# backend

Click [here](https://docs.google.com/document/d/1I8-0-K1wlBzCb9y0kJQD4I7AD_8tnwtXPnSMq0DN-U4/) to view the Technical Design Document.
master
