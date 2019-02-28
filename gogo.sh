yarn build
git pull
git add .
git commit -m 'update'
git push
expect expect.sh
# spawn ssh root@39.96.17.235 -p 50022 -t "cd /data/www/wap/wxBox; git pull"
# expect "password:"
# send "hlykj123!@#\r"
# interact
# spawn echo "cd /data/www/wap/wxBox"
# cd /data/www/wap/wxBox
# git pull
# exit
# ssh  root@39.96.17.235 -p 50022
# echo hlykj123!@#
# # sudo -S apt-get update << EOF
