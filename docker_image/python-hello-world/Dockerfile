FROM python:3.8-alpine
#image tag is used to reduce and instal the type of image we want in dockerfile

WORKDIR /tree

ADD . .

#we can use COPY source dest also
# this takes all the directoy in the the file

#ADD names.txt . 
#we can do above too but it's not a good pratcie so we use something else.


ENTRYPOINT [ "python" ]

CMD [ "app.py" ] 

#ADD app.py /files/app.py

#CMD [ "python", "app.py" ]

# When using  abolute  path. ADD . .

#CMD [ "python", "/tree/app.py"]