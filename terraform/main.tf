terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }

  backend "s3" {
    bucket = "alloba-terraform-state-files"
    key = "personal-landing-site"
    region = "us-east-1"
  }
}

provider "aws" {
  default_tags {
    tags = {
      project = "personal-landing-site"
      managedBy = "Terraform"
      environment = terraform.workspace
    }
  }
  region = "us-east-1"
}

#TODO would prefer to centralize this module
module "personal-site" {
  source = "./cloudfront-s3-site"

  acm_certificate_domain = "alexlbates.com"
  cloudfront_distribution_description = "Main landing site for my online presence."
  route_53_record_names = ["alexlbates.com","www.alexlbates.com"]
  route_53_zone_name = "alexlbates.com"
  s3_bucket_name = "alexlbates.com"
}
