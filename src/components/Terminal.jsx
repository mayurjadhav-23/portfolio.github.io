import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const commands = [
    {
      command: 'kubectl get pods --all-namespaces',
      output: `NAMESPACE     NAME                          READY   STATUS    RESTARTS
kube-system   coredns-558bd4d5db-xyz123     1/1     Running   0
kube-system   etcd-master                   1/1     Running   0
default       nginx-deployment-abc456       1/1     Running   0
monitoring    prometheus-server-def789      1/1     Running   0`
    },
    {
      command: 'docker ps',
      output: `CONTAINER ID   IMAGE          COMMAND                  STATUS
a1b2c3d4e5f6   nginx:latest   "/docker-entrypoint.…"   Up 2 hours
f6e5d4c3b2a1   redis:alpine   "docker-entrypoint.s…"   Up 1 hour
9876543210ab   postgres:13    "docker-entrypoint.s…"   Up 3 hours`
    },
    {
      command: 'terraform plan',
      output: `Terraform will perform the following actions:

  # aws_instance.web will be created
  + resource "aws_instance" "web" {
      + ami           = "ami-0c55b159cbfafe1d0"
      + instance_type = "t3.micro"
      + tags          = {
          + "Name" = "WebServer"
        }
    }

Plan: 1 to add, 0 to change, 0 to destroy.`
    },
    {
      command: 'aws s3 ls',
      output: `2024-01-15 10:30:45 my-app-backups
2024-01-20 14:22:33 static-website-bucket
2024-02-01 09:15:22 terraform-state-bucket
2024-02-10 16:45:11 logs-archive-bucket`
    },
    {
      command: 'helm list',
      output: `NAME            NAMESPACE   REVISION   STATUS     CHART
prometheus      monitoring  1          deployed   prometheus-15.0.1
grafana         monitoring  1          deployed   grafana-6.21.2
nginx-ingress   ingress     2          deployed   nginx-ingress-4.0.6`
    }
  ];

  useEffect(() => {
    const typeCommand = async () => {
      setIsTyping(true);
      const cmd = commands[currentCommand];
      
      // Type the command
      for (let i = 0; i <= cmd.command.length; i++) {
        setDisplayText(`$ ${cmd.command.slice(0, i)}`);
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      // Wait a bit
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Show output
      setDisplayText(`$ ${cmd.command}\n${cmd.output}`);
      setIsTyping(false);
      
      // Wait before next command
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      setCurrentCommand((prev) => (prev + 1) % commands.length);
    };

    typeCommand();
  }, [currentCommand]);

  return (
    <motion.div
      className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 font-mono text-sm max-w-2xl mx-auto shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700/50">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-400 text-xs ml-2">mayur@devops-terminal</span>
      </div>

      {/* Terminal Content */}
      <div className="min-h-[200px] text-green-400">
        <pre className="whitespace-pre-wrap leading-relaxed">
          {displayText}
          {isTyping && (
            <motion.span
              className="inline-block w-2 h-5 bg-green-400 ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          )}
        </pre>
      </div>

      {/* Terminal Footer */}
      <div className="mt-4 pt-3 border-t border-gray-700/50 flex items-center justify-between text-xs text-gray-500">
        <span>Live DevOps Commands</span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Connected</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;
