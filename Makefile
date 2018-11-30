.PHONY: lint
.PHONY: test

setup:
	./bin/setup.sh

start:
	./bin/start.sh

deploy:
	./bin/deploy.sh

test:
	musical-patterns test

push:
	./bin/push.sh

pull:
	./bin/pull.sh

lint:
	musical-patterns lint

snapshot:
	./bin/snapshot.sh

build:
	musical-patterns build "webpack --config webpack.prod.js"
