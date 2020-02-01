# personal-site
A repo for liyangguang.com.

- Express backend
- Vue frontend app
- VuePress blog

```
├── src (Vue app code)
├── public (Vue app public code)
├── dist (Vue app output)
├── blog
│   ├── .vuepress
│   │   ├── config.js
│   │   ├── dist/**/*.html (VuePress output)
│   ├── **/*.md (blog markdowns)
├── server.js (Node Express code)
```

## Install
```bash
npm i  # Install dependencies of this project
npm i -g @vue/cli forever nodemon  # Intall tools used by this project
```

## Developement
```bash
npm run fe:dev    # Run vue app with auto refresh
npm run blog:dev  # Run blog with auto refresh
npm run be:dev    # Run express server with auto refresh
```

## Production
```bash
npm run fe:build    # Compile vue app code
npm run blog:build  # Compile vuePress blog
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
