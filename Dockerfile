FROM node:8

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN git clone https://github.com/marfuzzi/md2xliff.git test-git

WORKDIR /app/test-git

# Подтянуть все веточки
RUN for branch in $(git branch --all | grep '^\s*remotes' | egrep --invert-match '(:?HEAD|master)$'); do git branch --track "${branch##*/}" "$branch"; done

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD npm start
