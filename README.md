# Personal Landing Site

Source for a personal site I maintain. 
This site lives at the root of my primary domain, and is kind of the place where
information goes when I don't have a better place for it. 

Notes/project information/blog-ish stuff/links to other projects. 
That kind of thing. 

I am forever fiddling around with how I want this site to look and behave.
So look forward to that I guess. 

## Tech Used

- Hugo
  - The base theme used is [Terminal](https://github.com/panr/hugo-theme-terminal).  
    This theme was downloaded directly - it will have to be fully overwritten if 
    an update is desired.
- Terraform
- AWS (S3/Cloudfront)

## Organization

- `terraform` - root directory for all infrastructure components managed by the project. 
  - S3 bucket to store static files
  - Cloudfront Distribution to handle routing to the S3 bucket
  - Route53 record for the domain name
- `site` - root directory for Hugo. All the actual content of the site lives in here.
  - `config.toml` - Site configuration. 
  - etc
