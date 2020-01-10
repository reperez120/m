module.exports = {
  apps : [{
    name: 'm',
    script: './index.js'
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-52-14-72-95.us-east-2.compute.amazonaws.com',
      key  : '~/.ssh/m.pem',
      ref  : 'origin/master',
      repo : 'https://github.com/reperez120/m.git',
      path : '/home/ubuntu/m',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
