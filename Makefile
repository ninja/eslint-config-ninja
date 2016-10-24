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

unused: lint
	@eslint-find-rules --unused
