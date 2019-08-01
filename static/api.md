# 说明

一言网(hitokoto.cn)创立于 2016 年，隶属于萌创 Team，目前网站主要提供一句话服务。
  
动漫也好、小说也好、网络也好，不论在哪里，我们总会看到有那么一两个句子能穿透你的心。我们把这些句子汇聚起来，形成一言网络，以传递更多的感动。如果可以，我们希望我们没有停止服务的那一天。
  
简单来说，一言指的就是一句话，可以是动漫中的台词，也可以是网络上的各种小段子。
或是感动，或是开心，有或是单纯的回忆。来到这里，留下你所喜欢的那一句句话，与大家分享，这就是一言存在的目的。

# 关于

这是一个接口更新计划表:
  
|       时间       	| 发布版本 	|                影响接口               	|                                                                  调整                                                                 	|
|:----------------:	|:-----:	|:-------------------------------------:	|:-------------------------------------------------------------------------------------------------------------------------------------:	|
| 2018 年 6 月 	| 测试   	| api.hitokoto.cn 和 sslapi.hitokoto.cn 	| 将在 6 月份之前以切换解析的方式合并到 v1 接口中。也就意味着调整之后请求此接口无异于请求 v1 接口。调整后此接口的稳定性将不再受到维护。 	|
| 2018 年 7 月 	| v1   	|             v1.hitokoto.cn            	| v1 接口发布最终版本（功能锁定）， 接口将持续维护至 v2 上线后一年。                                          	|
| 预计 2021 年 	| v2   	|                  未知                 	| 上线 v2 接口                                                                                                                          	|
  
**目前 v1 接口已进入功能锁定阶段。 如果你有什么想法或建议， 可以在 [功能申请表](https://github.com/freejishu/hitokoto_tell/issues/2) 中提出。**
  
> 由于一言目前属于公益性运营，为了保证资源的公平利用和不过度消耗公益资金，我们会定期的屏蔽某些大流量的站点。若您的站点的流量较大，您需要提前联系我们获得授权后再开始使用。对于超过阈值的站点，我们有可能会通过一定途径（例如邮件）等方式联系您，若 24 小时无回应则域名将暂时进入黑名单。
  
考虑到大家的实际应用需求，我们在 [爱发电](https://afdian.net/@hitokoto) 上架了一个可以提高请求限制的赞助选项，有需要可以前往了解。
  
接口的动态加速服务目前由 Dogecloud 提供。在此表示感谢。

# 接口

## 请求地址

<div class="overflow-table">

| 请求地址 	| 协议 	| 方式 	| QPS 限制 	| 线路 	| 备注 	|
|:----------------------------:	|:----------------------:	|:----:	|:--------:	|:----:	|:---------------------------------------------:	|
| v1.hitokoto.cn 	| https; tls=1.1,1.2 	| Any 	| 10 	| 全球 	| 已启用 HSTS， 并已加入 HSTS Preload List 计划 	|
| international.v1.hitokoto.cn 	| https; tls=1.1,1.2,1.3 	| Any 	| 25 	| 海外 	| 已启用 HSTS， 并已加入 HSTS Preload List 计划 	|

</div>

![PnYeR8.png](https://piccdn.freejishu.com/images/2019/07/21/PnYeR8.png)

## 返回格式 (JSON)

| 返回参数名称 	  | 描述                                                                         	|
|--------------	|------------------------------------------------------------------------------	|
| id           	| 本条一言的标识。 可以链接到 https://hitokoto.cn?id=[id] 查看这个一言的完整信息 	|
| hitokoto     	| 一言正文。编码方式unicode。使用utf-8。                                       	|
| type         	| 类型。请参考第三节参数的表格。                                               	|
| from         	| 一言的出处。                                                                 	|
| creator      	| 添加者。                                                                     	|
| created_at   	| 添加时间。                                                                   	|

## 示例

[https://v1.hitokoto.cn/](https://v1.hitokoto.cn/)（从7种分类中随机抽取）  
[https://v1.hitokoto.cn/?c=b](https://v1.hitokoto.cn/?c=b) （请求获得一个分类是漫画的句子）  
[https://v1.hitokoto.cn/?c=f&encode=text](https://v1.hitokoto.cn/?c=f&encode=text) （请求获得一个来自网络的句子，并以纯文本格式输出）

### 网页使用示例

```html
<p id="hitokoto">:D 获取中...</p>
<!-- 以下写法，选取一种即可 -->

<!-- 现代写法，推荐(不支持 IE) -->
<script>
  fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      var hitokoto = document.getElementById('hitokoto');
      hitokoto.innerText = data.hitokoto;
    })
    .catch(err => console.error);
</script>

<!-- 如果你的站点使用了 jQuery(如果是 JQ 3.x 以及更新的版本， 你得使用完整版的 JQ)， 那么你可以... -->
<script>
  $.ajax({
    type: 'GET',
    url: 'https://v1.hitokoto.cn',
    dataType: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'hitokoto',
    success: function(data) {
      $('#hitokoto').text(data.hitokoto);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // 错误信息处理
      console.error(textStatus, errorThrown)
    }
  });
</script>
<!-- P.S 我们依然不推荐使用 jQuery Ajax。 推荐使用 fetch Api 或者 axios.js-->

<!-- 老式写法，兼容性最忧; 支持 IE -->
<script>
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://v1.hitokoto.cn');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText);
      var hitokoto = document.getElementById('hitokoto');
      hitokoto.innerText = data.hitokoto;
    }
  }
  xhr.send();
</script>

<!-- 新 API 方法， 十分简洁 -->
<script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
```
  
## 网易云接口使用示例

```javascript
// 本示例需要浏览器支持 Promise 以及 fetch。
function fetch163Playlist(playlist_id) {
  return new Promise((ok, err) => {
    fetch("https://v1.hitokoto.cn/nm/playlist/" + playlist_id)
      .then(response => response.json())
      .then(data => {
        var arr = [];
        data.playlist.tracks.map(function (value) {
          arr.push(value.id);
        });
        return arr;
      })
      .then(ids => {
        return fetch163Songs(ids);
      })
      .then(data => ok)
      .catch(e => err);
  });
}

function fetch163Songs(IDS) {
  return new Promise(function (ok, err) {
    var ids;
    switch (typeof IDS) {
      case 'number':
        ids = [IDS];
        break;
      case 'object':
        if (!Array.isArray(IDS)) {
          err(new Error('Please enter array or number'));
        }
        ids = IDS;
        break;
      default:
        err(new Error('Please enter array or number'));
        break;
    }  
    fetch(`https://v1.hitokoto.cn/nm/summary/${ids.join(',')}?lyric=true&common=true`)
      .then(response => response.json())
      .then(data => {
        var songs = [];
        data.songs.map(function (song) {
          songs.push({
            name: song.name,
            url: song.url,
            artist: song.artists.join('/'),
            album: song.album.name,
            pic: song.album.picture,
            lrc: song.lyric
          });
        });
        return songs;
      })
      .then(result => ok)
      .catch(e => err);
  });
}

// 使用测试
fetch163Playlist(2158283120)
  .then(data => console.log)
  .catch(err => console.error);

fetch163Songs([28391863, 22640061])
  .then(data => console.log)
  .catch(err => console.error);
```

## 扩展

网易云 API， 目前文档尚未制作，可以先参考 [Github](https://github.com/a632079/teng-koa/blob/master/netease.md)
