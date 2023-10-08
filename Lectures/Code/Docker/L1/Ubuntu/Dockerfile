FROM ubuntu 
LABEL "os.name"="Ubuntu Test"
LABEL "os.email"="vitalii.y.polovyi@lpnu.ua"

RUN apt-get update 
RUN apt-get install -y nginx 
#CMD ["echo", "Image created"] 

CMD ["nginx", "-g", "daemon off;"]