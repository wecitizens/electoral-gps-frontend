#!/usr/bin/env node

let node_ssh = require('node-ssh')
let ssh = new node_ssh()

ssh.connect({
  host: 'ec2-52-47-66-164.eu-west-3.compute.amazonaws.com',
  username: 'ubuntu',
  privateKey: '.ssh/wecitizens.pem' // Ask to have it
}).then(() => {
  ssh.execCommand('ls', { cwd:'/home/user/web/gps' }).then(function(result) {
    console.log(result.stdout);
  })
});