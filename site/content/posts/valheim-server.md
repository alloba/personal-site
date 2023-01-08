+++
title = "Valheim Server"
date = "2023-01-08T18:00:00-04:00"
showFullContent = false
readingTime = true
hideComments = false
description = "Started a Valheim Server"
+++

I've set up a Valheim server! 

The connection string is `valheim.alexlbates.com`.  
Ask me directly for the password.

## Infrastructure 

I should make a more detailed post about it, but I'm lazy. 

- Terraformed AWS
    - VPC via module
    - EC2 instance via module 
    - EBS volume attached to EC2 instance 
    - Elastic IP attached to EC2 instance 
    - DNS record attached to Elastic IP 

- Valheim Server - Docker + `lloesche/valheim-server` container.
