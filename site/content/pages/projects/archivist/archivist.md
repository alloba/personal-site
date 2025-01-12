+++
title = "Archivist"
date = 2022-06-27T20:06:00-04:00
draft = false
description = "Media scanner and downloader."
showFullContent = false
readingTime = false
hideComments = false
tags = ["project", "complete"]
+++

** [Project Link](https://github.com/alloba/archivist) **

This program is focused on copying files found in one location and putting them in another. 
Pretty simple stuff. 

This is the thing that manages finding new content for one of my other projects, [Kaleidoscope](../../kaleidoscope).
It's taken the place of my old WSG_Scraper, which had the same purpose but with fewer features. 

The primary use case is to access specified 4Chan boards and look for all WebM files in threads that 
match a search criteria, and dump them into S3. But, it's designed to be able to easily hook into other inputs/outputs.
Which is pretty much just local file storage and S3. 

An important bit of functionality that gets layered on top of the simple "download and copy" is that 
duplicate files are avoided as much as possible. This is done via md5 hash comparisons on all incoming files. 

It's been made to easily hook in new sources (and destinations) mainly because I'd like to find a 
secondary source of media files other than 4Chan. I've honestly struggled to find a different source 
for the same type of files though. Nothing else has come to mind that fills the category of 
"Here is a massive dump of files labeled with a specific high-level theme. Oh, and the theme is music + visuals.".  
One day though. Fingers crossed.
