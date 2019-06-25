# personal-site
A repo for liyangguang.com

## Run dev
```bash
npm run dev
```

## Run prod (keep alive)
```bash
npm run prod
```

## Stop prod
```bash
npm run stop
```

## Renew https certificate
```bash
npm run renew-cert
```

## Setup auto start up
```bash
sudo crontab -e
```

Add `@reboot /home/liyangguang/liyangguang.com/run.sh`

- Use sudo here, since the run.sh (i.e. the forever command) requires sudo.
- Use full path here, since it's run with the user root.
