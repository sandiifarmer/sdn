cd css/
lessc style.less > style.css
echo less2css completed...

cd ../node/
node build
echo build completed...

cd ../
git status
git add -A
git commit -m update
git push origin master
echo Press ENTER to quit...
read