resource "aws_s3_bucket" "website-bucket" {
  bucket = "alexlbates.com"
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

resource "aws_s3_bucket_website_configuration" "example" {
  bucket = aws_s3_bucket.website-bucket.bucket

  index_document {
    suffix = "index.html"
  }

#  error_document {
#    key = "error.html"
#  }

#  routing_rule {
#    condition {
#      key_prefix_equals = "docs/"
#    }
#    redirect {
#      replace_key_prefix_with = "documents/"
#    }
#  }
}
