resource "aws_route53_record" "primary-website-record" {
  name            = ""
  zone_id         = data.aws_route53_zone.primary-domain.id
  type            = "A"

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.website-routing.domain_name
    zone_id                = aws_cloudfront_distribution.website-routing.hosted_zone_id
  }
}

resource "aws_route53_record" "www" {
  name    = "www" # bare record will control base zone url
  type    = "A"
  zone_id = data.aws_route53_zone.primary-domain.id

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.website-routing.domain_name
    zone_id                = aws_cloudfront_distribution.website-routing.hosted_zone_id
  }
}
