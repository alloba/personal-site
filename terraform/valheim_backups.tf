resource "aws_route53_record" "valheim-backup-record" {
  name    = "valheim-backups" # kaleidoscope.alexlbates.com
  type    = "A"
  zone_id = data.aws_route53_zone.primary-domain.id

  alias {
    name                   = aws_s3_bucket.website-bucket.website_domain
    zone_id                = aws_s3_bucket.website-bucket.hosted_zone_id
    evaluate_target_health = true
  }
}



resource "aws_s3_bucket" "valheim-bucket" {
  bucket = "valheim-backups.alexlbates.com"
}

resource "aws_s3_bucket_policy" "valheim-backup-policy" {
  bucket = aws_s3_bucket.valheim-bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource = [
          aws_s3_bucket.valheim-bucket.arn,
          "${aws_s3_bucket.valheim-bucket.arn}/*",
        ]
      },
    ]
  })
}

resource "aws_s3_bucket_cors_configuration" "valheim-bucket-cors" {
  bucket = aws_s3_bucket.valheim-bucket.bucket

  cors_rule {
    allowed_methods = ["GET"]
    allowed_origins = ["*"]
  }
}


resource "aws_s3_bucket_website_configuration" "valheim-website-access-config" {
  bucket = aws_s3_bucket.valheim-bucket.bucket

  index_document {
    suffix = "valheim-backups.html"
  }
}


resource "aws_s3_bucket_policy" "valheim-website-policy" {
  bucket = aws_s3_bucket.valheim-bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource = [
          aws_s3_bucket.valheim-bucket.arn,
          "${aws_s3_bucket.valheim-bucket.arn}/*",
        ]
      },
    ]
  })
}
