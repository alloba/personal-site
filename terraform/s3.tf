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
