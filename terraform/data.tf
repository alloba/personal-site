data "aws_route53_zone" "primary-domain" {
  name = "alexlbates.com"
  private_zone = false
}

data "aws_acm_certificate" "acm_wildcard" {
  domain   = "alexlbates.com"
  statuses = ["ISSUED"]
  types = ["AMAZON_ISSUED"]
}
