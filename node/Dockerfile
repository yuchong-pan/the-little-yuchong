FROM node:9.3.0
MAINTAINER Yuchong Pan <panyuchong@gmail.com>

RUN mkdir /code
WORKDIR /code

ADD ./package.json /code
RUN cd /code && npm install
ADD . /code
