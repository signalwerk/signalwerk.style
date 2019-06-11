#!/bin/bash

echo "-- run template"
lead='<!-- page content start-->'
tail='<!-- page content end -->'

## watch -n20 sh build.sh
## npm run md
## npm run build
awk 'NR==FNR{new = new $0 ORS; next} /'"$tail"'/{f=0} !f{print} /'"$lead"'/{printf "%s",new; f=1}' ./dist/text.html ./src/template/index.html > ./dist/index.html
