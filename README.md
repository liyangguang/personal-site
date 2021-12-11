# personal-site
A repo for liyangguang.com.

- Express backend
- Vue frontend app
- VuePress blog

```
├── src (Vue app code)
├── public (Vue app public code)
├── blog
│   ├── .vuepress
│   │   ├── config.js
│   │   ├── dist/**/*.html (VuePress output)
│   ├── _posts (Blog content)
├── dist (Vue app output)
├── server (Node Express code)
```

## Install
```bash
nvm use 14  # node-sass is 4.14+, which only support node 14.
npm ci  # Install dependencies of this project
npm i -g @vue/cli forever  # Intall tools used by this project
```

## Developement
```bash
npm run dev:fe    # Run vue app with auto refresh
npm run dev:blog  # Run blog with auto refresh
npm run dev:be    # Run express server with auto refresh
```

## Production
```bash
npm run build:all / build:fe / build: blog    # Compile all/FE/blog
npm run prod        # Serving the site using forever
npm run stop        # Stop serving
npm run renew-cert  # Renew https cert
```

## Cron jobs

Restart the site when reboot

```
@reboot /home/liyangguang/liyangguang.com/run.sh start
```

Renew https cert quarterly
```
28 9 10 */3 * /home/liyangguang/liyangguang.com/run.sh renew-cert
```
