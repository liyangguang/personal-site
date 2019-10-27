# personal-site
A repo for liyangguang.com. Express backend and Vue frontend.

## Install
```bash
npm i  # Install dependencies of this project
npm i @vue/cli forever nodemon -g  # Intall tools used by this project
```

## Developement
```bash
npm run serve-fe  # Run Vue frontend locally
npm run serve-be  # Run express backend locally
```

## Production
```bash
npm run prod  # Serving the site using forever
npm run stop  # Stop serving
npm run renew-cert  # Renew https cert
```

## Auto start up

Add `@reboot /home/liyangguang/liyangguang.com/run.sh` to `crontab -e`
