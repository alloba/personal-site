# personal-landing-site

Personal site that is meant to live at the root of whatever else I want to share online. 
Think something like a bio or portfolio site, but way less professional than either of those. 

# Technology
## React
The content of the site itself is written in React. 
Nothing fancy going on with it at this point - to such a 
incredible degree that honestly it could just be a html + css project. 

## Terraform
Infrastructure for this project is managed through Terraform. 
Not much is needed since it is a static site. Infrastructure 
is mainly limited to things like S3 buckets and access permissions. 

## Node/NPM
Static site files are compiled via standard build process for a React codebase. 
Simple compile step to render html/css/js. 

## GitLab CI
Code integration and deploy is handled via the free tier of Gitlab's pipelines. 
This pretty much just means a script to push terraform operations. 

# Local Development
TBD

# Deployment
Deploy for this project is a simple combination of 
node script to build out the site files, followed by 
a terraform apply step. 

Terraform should utilize workspaces for deploy environments.
(I say this, but I'll have to decide on environment and 
how to throw errors if there isnt a workspace selected)


