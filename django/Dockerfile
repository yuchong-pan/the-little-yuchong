FROM python:3.4
MAINTAINER Yuchong Pan <panyuchong@gmail.com>

RUN mkdir /code
WORKDIR /code

ADD requirements.txt /code
RUN pip install -r requirements.txt
ADD . /code
