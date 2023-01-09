+++
title = "Task Master"
date = "2022-06-15"
tags = ["project", "incomplete"]
+++

Single page application for tracking recurring tasks. 

Summary
--------
Application would be a single-ish page that is responsible for tracking 
recurring tasks that need to be completed. 

This means that each task would have a concept of a completion state, and the ability to reset itself
when the allocated amount of time has passed. 

Technology to use is going to be based purely on familiarity - Angular frontend, Java backend, ORM connecting 
to a SQL flavored database. 

Design and mockups to be added here as time goes on...

Layout
--------
### Card Layout
```text
|-----------------------|       |-----------------------|
|       Task Name  [x]  |       |        Situps     [x] |
| Task Description      |       | Get that excersize in |
|                       |       |                       |
| Time Remaining        |       | 13 hours 24 minutes   |
| Recurrance            |       | Every 2 days          |
|                       |  ==>  |                       |
|  Progress Bar         |       |  19 / 24              |
| |---------------|     |       | |---------------|     |
| |//////|        |     |       | |////////////|  |     |
| |---------------|     |       | |---------------|     |
| [Increment Btn]       |       | [ + ]                 |
|-----------------------|       |-----------------------|
```

### Page Layout
```text
|---------------------------------------------------|
|  [Add New Task]                                   |
|                                                   |
|  Interesting Stats Section Maybe                  |
|                                                   |
|  |---------|    |---------|    |---------|        |
|  |  Card   |    |  Card   |    |  Card   |        |
|  |         |    |         |    |         |        |
|  |---------|    |---------|    |---------|        |
|                                                   |
|  |---------|    |---------|    |---------|        |
|  |  Card   |    |  Card   |    |  Card   |        |
|  |         |    |         |    |         |        |
|  |---------|    |---------|    |---------|        |
|                                                   |
|---------------------------------------------------|
```

