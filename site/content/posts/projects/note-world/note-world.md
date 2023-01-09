+++
title = "Note World (Provisional Title)"
date = "2022-06-15"
tags = ["project", "incomplete"]
+++

Not at all implemented in any way.
Yet another interpretation on note-taking to insert into my life :smile: .

## Background

The very high level goal for this project would be to kind of manifest a concept that is encountered 
while reading about the [Method of loci](https://en.wikipedia.org/wiki/Method_of_loci). 
Specifically, that it is easier to remember something when it is associated with a physical place or item. 
I don't have nearly the required dedication to form such a thing in my mind, even though the concept does 
sound correct to me intuitively. 

So, the combination of the idea along with the realization that I am too lazy to pursue it has led me to a
desire to have something similar that also takes away the burden of maintaining it mentally.
This project is the most recent manifestation of that desire, although I have also previously considered 
using familiar maps from video games to help the process along as well. 

## Description

The goal of the project is to provide a simulated space in which to embed notes. 
This would allow the user to "walk around" and view/create notes that have an association with a particular 
object or room. The user would be able to create new objects and rooms as desired, and connect them together 
to form a personalized space that would grow over time. 

Layered on top of this would be some additional utility functions like fast navigation and indexing notes for 
search. 

The aspect of customization and freedom to tweak things as the user sees fit is high priority, since the formatting
of notes and the organization of them can change over time (or, at least, I want them to be able to).

## Key Project Aspects

There are some very big items that need to be investigated and decided before work ever properly begins on this. 
Everything in this section is a work in progress. Things should change a whole heck of a lot as 
more planning goes into things.

### How to navigate the world

The biggest piece of this is the distinction between 3D and 2D, as well as the framework/platform used to achieve
rendering in either. I truly know nothing about this area of things, so a lot of research is needed. 

Currently, all I can suggest would be any of the popular game engines, or a deeply simplified custom solution. 
So, Unity, Godot, Game Maker Studio, Unreal, etc. Custom options would basically be limited to text navigation, 
kind of like an old interactive fiction game. Which is a cool idea, but it would suck to actually use.

3D solutions seem like they would be better in the long run, although it's more work to get something going. 

***Update:*** You know, some twisted part of my mind almost likes the idea of finding an effective way to 
handle this project outside of a 3D context. I have no idea how that would really be accomplished in a way
that would be fully competitive and satisfying, but it speaks to me. 

### How to store the world

Very important to me is the ability to export and keep any notes separately from everything else. I love my markdown
files, and have no intention of getting rid of them entirely. The files don't have to always exist in that format, 
but there must always be a clean export option to at least one standard format. 

On top of this is the need to cleanly store the world structure itself. If the user is going to be allowed to 
create new objects and rooms at will, there is going to need to be a way to save that to disk. 
Also, the same thing applies as above to a degree - easy exports to a readable format 
(less readable than the notes themselves though, of course).

### Data Modeling

Not much to say about this one, other than obviously there needs to be a very clear data model. 
I want notes and the world around them to travel through iterations of the project as easily as possible, 
and I want everything to be flexible enough to allow sticking notes, rooms, and objects wherever the user wants. 

Kind of a hassle, but if I get it right it will be fantastic in the long run. A case of a little work early on 
saving a lot of work in the future. It's also integral to data import/export. 

### Systems Design

There shouldn't be too many complicated systems early on for this project, although I do want to 
plan for a very explicit separation between any rendering that takes place, and the actual logical 
connections made between objects. 

I had a brief thought of being able to swap out "frontends" for the backend of the note and world structure, 
which probably isn't very viable. But if I ever want to do something like that, isolated components and clear 
designs are important.

### MVP Feature Set

Big fat TBD here. I'd like to define some minimal target to aim for, but I don't think I could 
write them down currently. 
