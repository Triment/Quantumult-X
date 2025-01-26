/******************************

脚本功能：问真八字——解锁VIP
下载地址：https://is.gd/ZZmmnx
软件版本：2.1.0
脚本作者：彭于晏💞
更新时间：2023-2-21
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/bzpp2\.iwzbz\.com\/api\/v1\.1\/user\/getpw2_v url script-response-body https://raw.githubusercontent.com/Triment/Quantumult-X/main/ycdz/wzbz.js

[mitm] 

hostname = bzpp2.iwzbz.com

*******************************/


var body = $response.body.replace(/vipLevel": 0/g,'vipLevel": 3')
.replace(/expires": "1970-01-01 00:00:00"/g,'expires": "2099-01-01 00:00:00"')
.replace(/vipTipsType": -1/g,'vipTipsType": 0')
.replace(/show_vip_func": 0/g,'show_vip_func": 1')
.replace(/show_vip_day": 0/g,'show_vip_day": 1000')
.replace(/showcalendar": 0/g,'showcalendar": 1')
.replace(/popreview": 0/g,'popreview": 1')
.replace(/popviptips": 0/g,'popviptips": 1')
.replace(/popadtype": 0/g,'popadtype": 1')
$done({ body });
