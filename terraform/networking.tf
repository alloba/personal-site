resource "aws_route53_record" "primary-website-record" {
  name    = "" # bare record will control base zone url
  type    = "A"
  zone_id = data.aws_route53_zone.primary-domain.id

  ttl = 60
}