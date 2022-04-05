resource "aws_s3_bucket" "website-bucket" {
  bucket = "alexlbates.com"
}

resource "aws_s3_bucket" "www" {
 bucket = "www.alexlbates.com"
}

resource "aws_s3_bucket_website_configuration" "website-access-config" {
  bucket = aws_s3_bucket.website-bucket.bucket

  index_document {
    suffix = "index.html"
  }
  
}

#TODO: All subroutes fail when coming into s3, since 
#      it reports a 404. All requests need to go back to 
#      index.html. CloudFront is a proper solution to this, 
#      but if i still feel like i don't want to add a piece 
#      of infrastructure to it, there is a solution s3 routing rules.
#      https://via.studio/journal/hosting-a-reactjs-app-with-routing-on-aws-s3
resource "aws_s3_bucket_website_configuration" "www-forwarding" {
    bucket = aws_s3_bucket.www.bucket
    redirect_all_requests_to  {
        host_name = "alexlbates.com" 
        protocol = "http"
    }
}

resource "aws_s3_bucket_policy" "website-policy" {
  bucket = aws_s3_bucket.website-bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource = [
          aws_s3_bucket.website-bucket.arn,
          "${aws_s3_bucket.website-bucket.arn}/*",
        ]
      },
    ]
  })
}
