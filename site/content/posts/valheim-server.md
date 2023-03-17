+++
title = "Valheim Server Postmortem"
date = "2023-03-17T05:00:00-04:00"
cover = ""
showFullContent = false
readingTime = true
hideComments = false
description = "How did running a server for friends go?"
+++

## Intro 

Valheim put out new content somewhat recently. 
Woo! 
I consider the game to be something that is very much intended to be played with a few extra people in tow.
Fortunately some friends were down for it. 
Woo again!

Something about the game that isn't necessarily unique but is perhaps less common to encounter 
is the large amount of down-time between what I would consider "eventful" moments. 
There is a lot of wandering around in order to find things you need, and a lot of preparation required before 
fighting bosses or going to new biomes. 
Because of this, I thought it would be more enjoyable to have the game server running all the time and allow 
people to log in at their leisure to work on background tasks.

I would say that this is a great way to play the game. 
It's difficult to coordinate with a group of people consistently over a couple months of play sessions.
Playing together when convenient and then scheduling boss fights ended up being a bit easier (I think).

The rest of this post is going to focus on the technical details around hosting the server. 

## The Valheim Container

- Valheim Server - Docker + `lloesche/valheim-server` container.

## Brainless(-ish) AWS Hosting

## Closing

