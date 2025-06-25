echo "Start"

yarn || exit
npx tsc --outDir temp || exit

if [ ! -d "temp" ]; then
  echo '\033[31m temp Directory not exists!\033[0m'  
  exit 1;
fi

rm -rf dist
mv temp dist

# pm2 delete WebsiteChecker
# pm2 start yarn --name WebsiteChecker -- start
pm2 restart WebsiteChecker

echo "Done"