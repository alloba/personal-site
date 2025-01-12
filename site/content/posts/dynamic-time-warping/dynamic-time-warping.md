+++
title = "Dynamic Time Warping"
date = "2022-06-15T14:09:32-04:00"
#cover = "cover.jpg"
tags = ["tech", "image_processing", "kaleidoscope"]
showFullContent = false
readingTime = true
hideComments = false
description = "Image similarity analysis technique."
+++

# Dynamic Time Warping 

This is relating back to my 
[Doppelganger Hydrolyzer](../../../projects/doppelganger-hydrolyzer/doppelganger-hydrolyzer) 
project.

## Summary

Dynamic time warping is an algorithm used in time series analysis, for measuring similarities between two 
temporal sequences, which may have variances in speed. The example used on the Wikipedia page was 
two stride patterns overlayed on the top of each other. One was faster, but the overall movement of the limbs
remained very similar. 

It looks like there are a wide range of applications for use of this algorithm. Which is nifty. Audio, video, graphics, 
speech recognition, etc. Anything with a linear dataset could fall into the range of this. 

## Restrictions and rules for applying DTW

- Every index from the first sequence must be matched with one 
  or more indices from the other sequence, and vice versa
- The first index from the first sequence must be matched with the first index 
  from the other sequence (but it does not have to be its only match)
- The last index from the first sequence must be matched with the last index 
  from the other sequence (but it does not have to be its only match)
- The mapping of the indices from the first sequence to indices from the 
  other sequence must be monotonically increasing, and vice versa, 
  i.e. if ***j>i*** are indices from the first sequence, 
  then there must not be two indices ***l>k*** in the other sequence, 
  such that index ***i*** is matched with index ***l*** and 
  index ***j*** is matched with index ***k***, and vice versa
  
## Computing

- The complexity of DTW is **O(NM)**. Which is fair. Optimizations can be made, but 
  generally assume that for similar sized sequences, it works out to be **O(N^2)**
- Fast computation techniques exist for DTW. PrunedDTW, SparseDTW, FastDTW, MultiscaleDTW. 
- Some high faluting applications for supervised learning. 
- Many open sourced code implements the algorithm. For my interests, dtaidistance, mlpy and pydtw

## Alternatives

Because time series data can be viewed as differentiable functions, you get into 
being able to use continuous mathematics to do similar analysis as DTW. I do not understand
any of the things being mentioned in articles, so I leave it there. Alternatives exist, 
and in many cases you can get more satisfying results with them if they are tailored to 
your specific use case. 

## Use for multi-dimensional sequences

A nice research paper: [Multi-Dimensional DTW](http://www.cs.ucr.edu/~eamonn/Multi-Dimensional_DTW_Journal.pdf)

The implementation of DTW is inherently interested in single-dimensional arrays of 
data, spread across a second dimension. Meaning, a 2D graph with the X axis being time. 
This means that some preprocessing must be done in advance if you want to compute off of
data with extra dimensionality (2D with time, or in my case, 3D with time).

Apparently there are two commonly recognized ways to do this, 
DTWI (independent) and DTWD (dependent). I'm going to call out that DTWI seems way 
easier to understand for multidimensional data.

- Dependent -  "The cumulative squared Euclidean distance of data points"
- Independent - DTW of both X axis + DTW of both Y axis + etc. 
                "The cumulative distances of all dimensions independently."


