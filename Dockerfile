FROM node:8

RUN mkdir /dir

WORKDIR /dir

COPY . /dir

RUN git clone https://github.com/marfuzzi/ya_git ya-git

WORKDIR /dir/ya-git

# Подтянуть все веточки
RUN for branch in $(git branch --all | grep '^\s*remotes' | egrep --invert-match '(:?HEAD|master)$'); do git branch --track "${branch##*/}" "$branch"; done

WORKDIR /dir

RUN npm install

EXPOSE 3000

CMD npm start
