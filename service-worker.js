/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f397ac881bb005cf991cccf1ac4e5ff6"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.2f2003c8.js",
    "revision": "a5ccc1ee114b38d98965cf28f7c8a4f0"
  },
  {
    "url": "assets/js/10.33f76f26.js",
    "revision": "220f65ea638281da19c0b0a7cdd4a305"
  },
  {
    "url": "assets/js/11.25089477.js",
    "revision": "4ef4bceb3f3fbc91dbae4f1f03563e71"
  },
  {
    "url": "assets/js/12.8daec512.js",
    "revision": "abef476360cee8a93e81ce167e48015d"
  },
  {
    "url": "assets/js/13.9422b4fc.js",
    "revision": "db1d989744ef17f4d6e062658e9f4508"
  },
  {
    "url": "assets/js/14.795a1ecc.js",
    "revision": "fadbf5bb18a68e25d3e4ad57655eb146"
  },
  {
    "url": "assets/js/15.6ff5bfa8.js",
    "revision": "63a1157a67f9588bcc18ea4d3ac865b9"
  },
  {
    "url": "assets/js/16.b4126a68.js",
    "revision": "49bd3bfe51d19e41b4e1572f74d5cd9d"
  },
  {
    "url": "assets/js/17.51d35a3e.js",
    "revision": "55481fc8883194f5debcff1a4647ed4a"
  },
  {
    "url": "assets/js/18.0dcebe79.js",
    "revision": "5d3da8e42f8901487960079e1f92d613"
  },
  {
    "url": "assets/js/4.134d72d0.js",
    "revision": "c026ea6cc971d554f4321bf7de725e62"
  },
  {
    "url": "assets/js/5.6c0250f5.js",
    "revision": "9b9cb82a6d53d3683a2ebbff85546d54"
  },
  {
    "url": "assets/js/6.425224d3.js",
    "revision": "f18fd80e5f56592edbe12939cb258275"
  },
  {
    "url": "assets/js/7.d51dfeed.js",
    "revision": "0c87ed99af5b16be211472c8f40f98cd"
  },
  {
    "url": "assets/js/8.c32581b2.js",
    "revision": "75bbb0b04f31e38bddf06c1e7f804ec4"
  },
  {
    "url": "assets/js/9.e3ab4b27.js",
    "revision": "191efa8a41a08a4cb0bcebed53f83171"
  },
  {
    "url": "assets/js/app.e3d993ba.js",
    "revision": "a334b4bcde845b61191f26ab41364e13"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.c6937b0c.js",
    "revision": "81ef84d370addbda5a2e08aa6861f5f8"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "d6c21550027d5d1f3a9cf491677cfa07"
  },
  {
    "url": "categories/java/index.html",
    "revision": "548c550c2a46cdff4f0bf8451426a09a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "e35ef229eb26be963b15c975dc225756"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ca2ff3cfd7c44fc7b051a7d696ae9607"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "a4b24ecbf8753eea80d2353c9144ab5c"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "6f511ebab2832e72ff0d3b385688551e"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "fe2795ab795bc095743d02b9b31f58e7"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "e802a21f91d282847f6a984b8c470918"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "6d37e5f52d1d73904c184ad8d88af86e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "5ee315b731845e786e69a5d2f9080328"
  },
  {
    "url": "tags/js/index.html",
    "revision": "01238af501e017625621328936ece0a4"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "ed8c35255a6bd7ad0578ea852f878f40"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "7c0f7ba2ab4cf9b9b71ee13883d1fe41"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ad27e1846369b13150487cebbc90e2da"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "c42302e1e6c9b081404be4785f781c9f"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "c6acc07cd97e477dba9cfeb7e11eeaae"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "2fa52df0753413129148139bb4de3d90"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "d1571cc9e4fe8ef6d474a9c1f0964dc5"
  },
  {
    "url": "timeline/index.html",
    "revision": "a645b16878765486ba3853204e53a816"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "9b7a64285f9daf442ea9c1659bda279b"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "2636694c62e60ca73486d800602c69ae"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "eebb088390099b8acc5b2f64c9e33279"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "4fe25ba9db3ba2fdcc49edfa7b250bd9"
  },
  {
    "url": "生活分享/life.html",
    "revision": "ea8f60aa5093d92baff69799138a84d4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
