FROM python:alpine

WORKDIR /usr/src/app

COPY ./ /usr/src/app/

ENV email=''
ENV senha=''
ENV TWILIO_ACCOUNT_SID=''
ENV TWILIO_AUTH_TOKEN=''
ENV NUMBER=''

RUN pip install Flask pymongo twilio
RUN pip install python-dotenv

EXPOSE 5000

CMD [ "python", "app.py" ]
