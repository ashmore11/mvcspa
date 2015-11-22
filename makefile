setup:
	git config core.fileMode false
	npm install

watch:
	NODE_ENV=development gulp

release:
	NODE_ENV=production gulp build

view:
	node cli/index --view

delete:
	node cli/index --delete