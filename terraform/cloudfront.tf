resource "aws_cloudfront_distribution" "website-routing" {
  comment = "Personal website distribution"
  enabled = true # an alias directly relates to any alternate CNAME records that should be used.
  aliases = ["alexlbates.com", "www.alexlbates.com"]
  default_root_object = "index.html"

  price_class = "PriceClass_100"

  # S3 destination
  origin {
    origin_id   = "website-bucket"
    domain_name =  aws_s3_bucket.website-bucket.website_endpoint # dont mix this up with 'website_endpoint'

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only" # s3 bucket websites work in HTTP only.
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  # This isn't like... the perfect way to handle this.
  # But all the other ways i've tried to do it really just aren't worth the effort.
#  custom_error_response {
#    error_code = 404
#    error_caching_min_ttl = 30
#    response_page_path = "/index.html"
#    response_code = 200
#  }

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
