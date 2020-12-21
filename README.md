# Buff UP LTD JS/TypeScript Dev. Test

# How to test:

Clone the repo, run npm install.

There's a few scripts available:

- npm run test (runs the available tests) using Mocha, Sinon and Chai
- npm run start:dev (builds the package in development mode and on watch mode for changes)
- npm run dev-server (run this after a build of the package, to have the files available on dist) will run a simple http server that serves index.html file that uses the npm package to start and fetch a buff (id = 1) at the moment and serves it on a transparent layer over the video player. Missing styles and some additional logic UI logic still


# The Task:

Create a JS/TypeScript library using our Rest API to show content of top of an HTML 5 Video Player



## Part A: HTML Player

Create a simple HTML page, that hosts a video stream (**use this URL**: https://buffup-public.s3.eu-west-2.amazonaws.com/video/toronto+nba+cut+3.mp4) in any HTML5 video player you want.

Import the npm package for the library that you have created in Part B, to display content on top of that player

## Part B: Web Library

We now want a JS/Typescript library distributed as an npm package, that allows to display content (Buff's as we call them) over any existing video player.

The Developer using our library should import our library and initialize it with the ID of the player.

The library then should locate the HTML player frame, and render on top of that HTML content (our Buffs)

### Library Requirements

The library should have the following features

- Automatically detect the player frame and put a transparent layer on top of that view that will display our content
- Handle all the business and UI logic to display the Buffs over the video in the view

### Buff UI

The Buff UI should look like this:

![Buff](Buff.png)

The UI has 3 sections:

- Top Section that displays the Questions Sender Name and Image
- Middle section where we see the question and the countdown timer
- Bottom Section where we see the answers

- [ ] The countdown timer should work and at the end if the user hasn't yet voted, the question should automatically hide

- [ ] The number of answers can vary from 2 to 5, your UI should automatically adapt to the number of answers that the API delivers

- [ ] If the user selects an answer, the timer should stop and you should hide the Buff after 2 seconds. You should also highlight the selected answer.


***The UI for this screen with the downloadable assets can be found here:***

https://xd.adobe.com/view/763a1597-da0c-4b42-6fb9-73d5666aef52-000b/

##### A sample video of the Buffs showing on the current iOS version can be seen here:

https://github.com/buffup/AndroidTechTest/blob/master/Buff.mov?raw=true


## What we are looking for:

- A demo website that hosts the video player and the  Javascript/Typescript library  
- Demonstration of coding style and design patterns.
- Error handling.
- Any form of unit testing you see fit.

## How to Submit your solution:

- Clone this repository
- Create a public repo in github, bitbucket or a suitable alternative and provide a link to the repository.
- Provide a readme in markdown which details your code and any libraries that you may have used
- Explain how we should test the solution

## API Usage

This a brief summary of the api endpoints you will need in order to create the library. There a lot of other additional properties from the json responses that are not relevant, but you must use these endpoints to retrieve the information needed for this task.

#### Base URL

The base URL is `http://demo2373134.mockable.io/`

#### Get  Buff

Gets the data for the Buff to show

```
GET /buff/:buffId

Buff Id is the id of the buff to fetch
In the sample Rest API Buffs with Id's 1 to 5 are available
```

Sample response:

```
{
    "data": {
        "id": 1895,
        "stream_id": 18,
        "client_id": 6,
        "user_id": 16,
        "name": "placeholder",
        "question": "Who would you rather have as your Warzone partner?",
        "participation_points": 9,
        "type": 3,
        "status": 3,
        "statusText": "expired",
        "language": "en",
        "public": false,
        "priority": 1,
        "replay": true,
        "delay": 0,
        "duration": 15,
        "play_at": null,
        "resolve_at": null,
        "resolved_at": null,
        "published_at": "2020-09-28T19:21:06Z",
        "expire_at": 2892939,
        "expires_at": "2020-09-28T19:21:32Z",
        "author": {
            "id": 12,
            "first_name": "DreamHack",
            "last_name": "Games",
            "photo": [
                "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/authors/%25%21d%28string%3D30581b1a-9c78-4c96-97e0-5700c1fe039e%29/photo/1x.png",
                "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/authors/%25%21d%28string%3D30581b1a-9c78-4c96-97e0-5700c1fe039e%29/photo/2x.png",
                "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/authors/%25%21d%28string%3D30581b1a-9c78-4c96-97e0-5700c1fe039e%29/photo/3x.png",
                "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/authors/%25%21d%28string%3D30581b1a-9c78-4c96-97e0-5700c1fe039e%29/photo/original.png"
            ]
        },
        "answers": [
            {
                "id": 5325,
                "buff_id": 1895,
                "title": "Nick",
                "image": [
                    "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/7fe95db1-ab92-46cd-912e-1e3938b9293f/1x.png",
                    "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/7fe95db1-ab92-46cd-912e-1e3938b9293f/2x.png",
                    "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/7fe95db1-ab92-46cd-912e-1e3938b9293f/3x.png",
                    "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/7fe95db1-ab92-46cd-912e-1e3938b9293f/original.png"
                ],
                "bg_color": "#000000",
                "fg_color": "#ffffff"
            },
            {
                "id": 5324,
                "buff_id": 1895,
                "title": "Vikk",
                "image": [
                    "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/3ad8bc35-bbf2-458d-bce3-dc85f535713e/1x.png",
                    "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/3ad8bc35-bbf2-458d-bce3-dc85f535713e/2x.png",
                    "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/3ad8bc35-bbf2-458d-bce3-dc85f535713e/3x.png",
                    "https://buffup-api-staging.s3.eu-west-1.amazonaws.com/clients/6/answers/3ad8bc35-bbf2-458d-bce3-dc85f535713e/original.png"
                ],
                "bg_color": "#000000",
                "fg_color": "#ffffff"
            }
        ]
    }
}
```

Using the above URL's to fetch the various Buffs, request the Buffs every 30 seconds (from 1 to 5) and display them over the video stream.

The Buff should be displayed with a countdown timer matching the time in the `time_to_show` field of each Buff.
If the user votes before the end of the timer (taps on an answer), you should freeze the timer and hide the Buff after 2 seconds.

If the timer expires and the user doesn't vote, you should hide the Buff.

If the user manually closes the Buff by tapping on the top right `x` close button, you should hide the Buff.



Good luck!
