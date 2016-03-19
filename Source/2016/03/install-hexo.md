Install Hexo
---

### Create a GitHub Account

Create a new Repository name: "username.github.io" 

username must same as account name


### Install Node.js

	npm install hexo -g
	npm init Blog
	cd Blog

npm install

	npm install hexo-generator-index --save
	npm install hexo-generator-archive --save
	npm install hexo-generator-category --save
	npm install hexo-generator-tag --save
	npm install hexo-server --save
	npm install hexo-deployer-git --save
	npm install hexo-deployer-heroku --save
	npm install hexo-deployer-rsync --save
	npm install hexo-deployer-openshift --save
	npm install hexo-renderer-marked@0.2 --save
	npm install hexo-renderer-stylus@0.2 --save
	npm install hexo-generator-feed@1 --save
	npm install hexo-generator-sitemap@1 --save
	npm install hexo-tag-bootstrap --save
	npm install hexo-generator-search --save


Process the following command, and visit localhost:4000 to see the result

	hexo server


The Following command that generate public folder, you can deploy it to your target site folder.

	hexo g

Modify _config.yml file in Blog Folder

	deploy:
	  type: git
  	  repo: https://github.com/username/username.github.io.git
  	  branch: master

Deploy to GitHub command

	hexo d -g

Other

	hexo n #Generate articles，or source\_posts manually edit/create md file
	hexo s #deploy preview result

Update Hexo
 
	npm update -g

	
Install Other Theme

	git clone https://github.com/MOxFIVE/hexo-theme-yelee.git themes/yelee		


Modify themes/yelee/_config.yml
	


