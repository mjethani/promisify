all: build

build: babel_flags += -s

build:
	babel $(babel_flags) -d build src

.npmignore: .gitignore
	sort -ru .gitignore | grep -v '^build$$' > .npmignore
	echo '.gitignore .npmignore Makefile' | tr ' ' '\n' >> .npmignore

publish: build .npmignore
	npm publish

clean:
	rm -rf build .npmignore

.PHONY: clean build publish

