# Define AWS provider
provider "aws" {
  region = "us-west-2"  # Change this to your desired region
}

# Create an EKS cluster
module "eks" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "my-cluster"
  cluster_version = "1.21"

  subnets = module.vpc.private_subnets

  vpc_id = module.vpc.vpc_id

  worker_groups = {
    eks_nodes = {
      desired_capacity = 2
      max_capacity     = 2
      min_capacity     = 1

      instance_type = "t2.micro"
    }
  }
}

output "kubeconfig" {
  value = module.eks.kubeconfig
}

