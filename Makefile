SHELL := /bin/bash
CWD := $(shell pwd)
NAME := $(shell node -e "console.log(require('./package.json').name)")
PATH := ${CWD}/node_modules/.bin:${PATH}
VERSION:= $(shell node -e "console.log(require('./package.json').version)")

version:
	@echo ${NAME}@${VERSION}

install:
	@yarn install
	@yarn outdated

lint: install
	@eslint --fix .

release: unused
	@standard-version
	@git push --follow-tags origin master
	@npm publish

unused: lint
	@eslint-find-rules --unused
