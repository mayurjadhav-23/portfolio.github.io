export const projects = [
  {
    title: "Terraform Infrastructure Automation",
    desc: "Production-ready AWS infrastructure provisioning with Terraform, featuring VPC with public/private subnets, auto-scaling EC2 instances, Application Load Balancer, and security groups. Implements Infrastructure as Code best practices with state management and modular design.",
    tech: ["Terraform", "AWS VPC", "EC2", "ALB", "Apache", "IaC"],
    link: "https://github.com/mayurjadhav-23/terraform-infrastructure-automation",
    highlights: ["Auto-scaling groups", "Multi-AZ deployment", "Security groups", "State management"]
  },
  {
    title: "PC Wakeup Alert System",
    desc: "Serverless AWS solution for real-time system monitoring and notifications. Uses Lambda functions to detect PC wake events and sends instant alerts via SNS. Demonstrates event-driven architecture and serverless computing patterns.",
    tech: ["AWS Lambda", "SNS", "CloudWatch", "Python", "Serverless"],
    link: "https://github.com/mayurjadhav-23/PC-Wakeup-Alert-AWS-Cloud",
    highlights: ["Event-driven architecture", "Real-time notifications", "Cost-effective serverless design"]
  },
  {
    title: "Full-Stack Chat App DevOpsified",
    desc: "Complete DevOps transformation of a React chat application with Kubernetes orchestration, Helm charts for package management, multi-environment CI/CD pipeline, and comprehensive monitoring setup. Showcases modern containerization and deployment strategies.",
    tech: ["Kubernetes", "Helm", "Docker", "CI/CD", "React", "Monitoring"],
    link: "https://github.com/mayurjadhav-23/full-stack-app-devopsified",
    highlights: ["Multi-environment deployment", "Helm package management", "Container orchestration", "Automated testing"]
  },
  {
    title: "End-to-End DevOps Pipeline",
    desc: "Complete CI/CD pipeline for Go web application featuring automated testing, Docker containerization, GitHub Actions workflows, and GitOps deployment with ArgoCD. Implements DevOps best practices from code commit to production deployment.",
    tech: ["Go", "Docker", "GitHub Actions", "ArgoCD", "GitOps", "Kubernetes"],
    link: "https://github.com/mayurjadhav-23/go-web-app",
    highlights: ["GitOps workflow", "Automated testing", "Container security scanning", "Blue-green deployment"]
  },
  {
    title: "Kubernetes Cluster Monitoring Stack",
    desc: "Comprehensive monitoring solution for Kubernetes clusters using Prometheus for metrics collection, Grafana for visualization, and AlertManager for incident response. Includes custom dashboards and alerting rules for production environments.",
    tech: ["Prometheus", "Grafana", "Kubernetes", "AlertManager", "Helm"],
    link: "#",
    highlights: ["Custom dashboards", "Automated alerting", "Multi-cluster monitoring", "SLA tracking"],
    status: "In Development"
  },
  {
    title: "Multi-Cloud Terraform Modules",
    desc: "Reusable Terraform modules for deploying consistent infrastructure across AWS, Azure, and GCP. Features standardized networking, security, and compute resources with environment-specific configurations and cost optimization strategies.",
    tech: ["Terraform", "AWS", "Azure", "GCP", "Multi-Cloud"],
    link: "#",
    highlights: ["Cross-cloud compatibility", "Cost optimization", "Security hardening", "Modular design"],
    status: "Planning"
  }
];
