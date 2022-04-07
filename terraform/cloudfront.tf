resource "aws_cloudfront_distribution" "website-routing" {
  comment = "Personal website distribution"
  enabled = true # an alias directly relates to any alternate CNAME records that should be used.
  aliases = ["alexlbates.com"]
  default_root_object = "index.html"

  price_class = "PriceClass_100"

  # S3 destination
  origin {
    origin_id   = "website-bucket"
    domain_name =  aws_s3_bucket.website-bucket.bucket_regional_domain_name # dont mix this up with 'website_endpoint'

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only" # s3 bucket websites work in HTTP only.
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  # Default routing logic. When no other defined behaviors match, this one is used.
  default_cache_behavior {
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "website-bucket"
    viewer_protocol_policy = "redirect-to-https" # preserve ability to call the http url, but use https internally

    min_ttl                = 0
    default_ttl            = 60
    max_ttl                = 120

    forwarded_values {
      query_string = true
      headers = []
      cookies {
        forward = "all"
      }
    }

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.page-redirect.arn
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations = ["US"]
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = false
    acm_certificate_arn = data.aws_acm_certificate.acm_wildcard.arn
    ssl_support_method = "sni-only" # DO NOT USE VIP. expensivo.
  }
}

resource "aws_cloudfront_function" "page-redirect" {
  code    = file("${path.module}/cf-functions/personal-site-uri-redirect.js")
  name    = "personal-site-redirect"
  runtime = "cloudfront-js-1.0"
  publish = true
}


