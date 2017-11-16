

# w800



## Usage



## Developing



### Tools

## Deployment
using nginx, add 3 location settings to config file:

location ~* ^\/mini\-taixiu\-wap\/(.*)images\/((.+\/)*)((.+)\.(jpe?g|png|gif|ico))$ {
    root /var/www/html;
    try_files $uri /mini-taixiu-wap/images/$2$4;
}

location ~* ^\/mini\-taixiu\-wap\/(.*)css\/((.+\/)*)((.+)\.css)$ {
    root /var/www/html;
    try_files $uri /mini-taixiu-wap/css/$2$4;
}

location /-taixi-wap {
    charset utf-8;
    default_type text/html;
    root /var/www/html;
    try_files $uri /mini-taixiu-wap/$request_basename /mini-taixiu-wap/index.html;
}
