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
}