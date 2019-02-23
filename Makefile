NODE_BIN := node
NPM_MOD_DIR := $(CURDIR)/node_modules
NPM_BIN_DIR := $(NPM_MOD_DIR)/.bin

SRC_DIR := $(CURDIR)/src

.PHONY: build
build:
	${NPM_BIN_DIR}/parcel -p 3000 ${SRC_DIR}/index.html
