SHELL = /bin/bash
PATH := node_modules/.bin:${PATH}
INDEX = index lint release unused

.PHONY: ${INDEX}

index:
	@echo ${INDEX}

lint:
	@eslint --fix .

release: unused
	@standard-version
	@git push --follow-tags origin master
	@npm publish

unused: lint
	@eslint-find-rules --unused
