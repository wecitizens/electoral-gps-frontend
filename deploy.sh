#!/usr/bin/env bash

rsync -azP dist ubuntu@ec2-52-47-66-164.eu-west-3.compute.amazonaws.com:/home/user/web/gps/

rsync -azP api ubuntu@ec2-52-47-66-164.eu-west-3.compute.amazonaws.com:/home/user/web/

# Force to put correct access right
ssh -i ".ssh/wecitizens.pem" ubuntu@ec2-52-47-66-164.eu-west-3.compute.amazonaws.com 'sudo chmod -R 777 /home/user/web/gps/dist/'