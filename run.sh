# This file is called in cron job.

if [ "$1" = "start" ]; then
    echo "Starting the site..."
    npm run prod --prefix /home/liyangguang/liyangguang.com
elif [ "$1" = "renew-cert" ]; then
    echo "Renewing https certification..."
    npm run renew-cert --prefix /home/liyangguang/liyangguang.com
else
    echo "No command found"
fi

