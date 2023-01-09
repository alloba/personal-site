+++ 
title = "Doppelganger Hydrolyzer"
date = "2022-06-15"
tags = ["project", "complete"]
+++

This project has the goal of running analytics on video clips, to find similarities. 
This is a derivative project of Kaleidoscope and WSG Scraper, and uses the same data for it's operations.

The entire data set gathered in previous efforts is valid for this project. Meaning, about 19 GBs spread across some 5000 files.

## Approach 

After some research on common algorithms to find differences in things like pictures and video, I found a 
description of Distributed Time Warping. It sounded like almost exactly the type of analysis I was looking for, 
so that is what is being used for the initial piece of work in this project. 

DTW can be applied separately to both video and audio, after which the datasets can either be kept 
separate for certain data queries, or should be able to be combined without invalidating the results 
(per a caveman-level understanding of independent distributed time warping).

All files of the same category will be compared with each other for a start. It is far from guaranteed that 
a particular video is uniquely in a single saved location, but you get closer than not for at least one direction.
the WSG files can be considered a partial superset of the other two categories. 

The number of files and the type of analysis being done unfortunately means that this whole process takes an 
incredible amount of time (I'm estimating 3 days for the video frame analysis of the larger file category).

### Video DTW

For running DTW on the video portion of the files, preprocessing was done to compress the files down into viewer datapoint/dimensions. 
I struggle to think of a good way to come to terms with running full frame DTW compared across a few thousand files. 
Instead, the average RGB values for all frames within a video were computed, and saved separately to run processing on. 

I view this as a resonable enough compromise between dimensionality/computing time and useful data. 
There is obviously accuracy loss and room for weird similarities between files 
(half white + half black on one frame is the same as full grey on another, or something like that), 
but overall the *change over time* of those color averages is useful for analysis. 

### Audio DTW

The audio version of this process should be very similar to the video portion. 
I'm actually expecting it to be a bit simpler than the video section, due to the reduced 
dimensionality of the data involved. An audio stream can be represented as a single 
value changing over time, which means 2 dimensions fewer to work with than the video 
section (R,G,B). Also hopefully there is some more resilience in the extraction process 
for audio compared to video. 

Generally the same as above though, everything will be compared within it's own category and 
then saved separately for further use. No conversations needed about preproccessing or 
compromises ***yet***. Hopefully it stays that way, because it's a lot harder to intuit
useful transformations to audio compared to video, unless it's something like bitrate or amplitude. 
Except not even that, since amplitude doesn't really make a difference with DTW. 

## Implementation Challenges

- A significant chunk of the files being worked on have kind of crappy frame data inside the file streams... 
  The data is so sparse that ffmpeg refuses to process it, which means that OpenCV silently fails the file read, 
  and data cannot be extracted. There is a workaround for this when working with ffmpeg directly, but so far I 
  have not been able to find a solution that plays nice with the OpenCV frontend. 

- The sheer size of data is a real problem for timely processing. It's taking multiple days to chew through the files. 
  Early on in the process I added multiprocess behavior to the program, but even so it's that slow. It's not a 
  literal blocker, but I am very interested in performance improvements in the future, in any form. 
  I have 3 options remaining that can be looked into for this: 
    - Full utilization of numpy instead of passing python lists into the DTW library.
    - Conversion to either another language, or into GPU programming. 
    - Maybe finding useful options inside of the DTW library that improves performance (even at a sacrifice to accuracy would be acceptable).

- Using the output from this process when it finally is finished is a lesson in large datasets. There are several hundred thousand data points
  being generated, that need to be organized in some useful way. I've chosen SQLite for simplicity, and it has been doing well so far. 
  We'll see long term. I do love that no matter what you do, it always ends up back in a database to run scripts on. 

## Misc Notes

- Data set is 18.6 GB at time of writing. 
- Slightly over 5000 files in the dataset.


