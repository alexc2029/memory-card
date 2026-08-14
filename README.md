# Superhero Memory Game

[**Play it live**](https://superhero-memory-game.netlify.app/)

The main goal of this project is to implement the react concepts I learned so far by using hooks to manage and utilize state while fetching and using data from an external API.

API Link: https://github.com/akabab/superhero-api/tree/master/api
(open source wrapper of the Superhero API that doesn't require auth)

This API only allows you to handpick heroes by id, otherwise you have to request the entire json with all heroes. To make it more interesting, my intention was to randomly make a number of requests for random ids (1-731) which would allow me to play around a bit more as opposed to getting the whole json and working on that. However, it turns out that the API is missing maybe hundreds of ids, so my randomization function had a decent chance of returning an id for which the request would fail.

I decided to pivot to requesting the entire json and then manipulating that as I see fit, since there was no way I could think of to reliably make, say, 12 requests that would hit a valid id, even if I implemented retries.
