// ==UserScript==
// @ScriptName        哔哩哔哩净化

hostname = -broadcast.chat.bilibili.com, -*cdn*.biliapi.net, -*tracker*.biliapi.net, app.bilibili.com, api.live.bilibili.com, *.bilibili.com, *.bilibili.*, grpc.biliapi.net,*biliapi.net,aisubtitle.hdslb.com,i0.hdslb.com


# ======= BiliJson 播放页处理 ======= #
# ～ BiliBili_哔哩哔哩_屏蔽广告浮窗
^https?:\/\/api\.bilibili\.com\/pgc\/activity\/deliver\/material\/receive url reject-dict
# ～ BiliBili_哔哩哔哩_Material_Ad
^https?:\/\/api\.bilibili\.com\/x\/vip\/ads\/material\/report url reject-dict
# ～ BiliBili_哔哩哔哩_小卡片广告
^https://api.bilibili.com/pgc/season/player/cards url reject-dict
# ～ BiliBili_哔哩哔哩_视频播放下方商品推广
^https?:\/\/api\.bili(api|bili)\.(net|com)\/pgc\/season\/app\/related\/recommend\? url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js


# ======= BiliJson 直播间处理 ======= #
# ～ BiliBili_哔哩哔哩_屏蔽直播间商品广告浮窗[还有一个域名]
^https?:\/\/api\.live\.bilibili\.com\/xlive\/e-commerce-interface\/v\d\/ecommerce-user\/get_shopping_info\? url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_直播去广告
^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js


# ======= BiliJson 开屏及隐私 ======= #
# ～ BiliBili_哔哩哔哩_屏蔽IP请求
^https?:\/\/app\.bilibili\.com\/x\/resource\/ip url reject
# ～ BiliBili_哔哩哔哩_应用开屏去广告
^https://app.bilibili.com/x/v2/splash/show url reject-dict
# ～ BiliBili_哔哩哔哩_应用开屏广告预加载
^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/list url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_1080P高码率+4K画质[番剧和影视除外]
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\? url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_屏蔽直播页顶部轮播图
^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-interface\/v2\/index\/feed url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_推荐去广告
^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_观影页面去广告
^https?:\/\/api\.(bilibili|biliapi)\.(com|net)\/pgc\/page\/cinema\/tab\? url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_标签页处理
^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_热搜发现
^https://app.bilibili.com/x/v2/search/square url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/
# ～ BiliBili_哔哩哔哩_青少年弹窗
^https:\/\/(grpc\.biliapi\.net|app\.bilibili\.com)\/bilibili\.app\.interface\.v1\.Teenagers\/ModeStatus url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto_beta.js
# ～ BiliBili_哔哩哔哩_UP主推荐广告[适配ipad端]
^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.(view|viewunite)\.v1\.View\/(View|TFInfo)$ url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto_beta.js
# ～ BiliBili_哔哩哔哩_动态综合页及视频页去广告
^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.dynamic\.v2\.Dynamic\/Dyn(All|Video)$ url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto_beta.js
# ～ BiliBili_哔哩哔哩_繁体CC字幕转中文简体
;^https?:\/\/.*\.hdslb\.com\/bfs\/subtitle\/.+\.json url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_cc.js
