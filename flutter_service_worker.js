'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "999414ee7969ab236debf439ed5bf778",
".git/config": "e70db16f7e8ecb8e386a1735f2b77dd8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "58a0c1d45c30aa20e6d4113bef4c143d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "11e0f6436deb3c5c9b56c6ab22629705",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5e9d74570655befe4e067a632c0670e2",
".git/logs/refs/heads/main": "1e9558871887cc3781d5ce5ace3cbaf7",
".git/logs/refs/remotes/origin/main": "f9b7dcf760998fe639c1aaa1ed4416b3",
".git/objects/00/34537840db8be57f4915421aa3c26a8ddb5b4f": "f436254ef5815a662b2691cb6016385f",
".git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "9cc6800e9a3a8b871a97ce7c48097610",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/82b723fcb36042d44e81e0fed446732e6c7912": "8a664355d4fff552b9d8538cfebfdbde",
".git/objects/08/d5b30819b69b1ced2e8217b0d81fd367c2ffd0": "ac9e3a8ce0ca74671f977eeedbcd2418",
".git/objects/0a/692410d803c26d25ddbcf92ecf25ddd2d14a19": "20e446346f618414bb6fbe2e250f6ddb",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/e7164127447cf513d7ba131c754dbdc73321e8": "2172e74c63cb1757679a6ffba670f170",
".git/objects/15/1ebd06108d12caedf5bc83b8b0b5f81f1fdca1": "bd0e80863782355086b7587b63c94ef6",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1d/7fc25a5fb735abbc5c4b6839e628898a2d5f68": "c8b1c30c567506995cf4b20e7e2378b2",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/67f136362989d0f9a35699b947b64f43e6e5ca": "b4316bc2e920c40a8ce5d3922d4e30ce",
".git/objects/22/2b07f0f27b74f164fd8b540fb7211b8d7dff58": "2f7b7c5bbdb0e763313dd142dbe8d51c",
".git/objects/24/060a4c60ccd76933c6d8bf7b87c3b8a01ec2ce": "1641e5eed28c28d8b3d8a8a0f279ff0a",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/7e9831e9bbaf80a55df80f166f4301d3258478": "30bbf80d68b8261340de951f46d94dc7",
".git/objects/30/471881cb285d48e1309cee2a1e76cc59bf4627": "165dee245d123a5e13675d2d1400f75f",
".git/objects/42/bc4424641a92d089de2de46ebe6929d781a0a0": "dd4a56ae608c10cc2a201c97372c89ce",
".git/objects/44/4a9525fe5a524d5e020bb80c34e1035e93d304": "de9df2d67551b5f6a29ff624f9af0119",
".git/objects/46/347330a407a77d51b2189a9090fa04e04e8e37": "32ffaefea13ac5c37f6052856a01fb08",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/d97efa54c84687c12d41389dc1bf78d014034c": "75f78cf07af9b1aec6b26fc11f1d52c6",
".git/objects/4d/3a8b3cfb6bfbb4a60c1b5b03b9caa5b422789d": "2d19d6e025f62cb6f2297ef8d3d029bd",
".git/objects/4f/0b382abbc827531cfa1a63fd4c25f578d6359e": "ccc92e68c7bd31e72c183e5af9875985",
".git/objects/54/81ba677790a61be3ac7bb2a04ccc9b4f69ed94": "23ecf323df3a5c1f362057cdc9ebd641",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/60/23ccfbed9a95d922019f9f11ac54d56be26d2a": "132698cbdd955042ad2b40be9c55ca3b",
".git/objects/61/304cea609c4229ccb34c72ec3c2563d33770c7": "b0d96bf99a650f1fd734e83193c59c49",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/69/3f87ccc5555867fd8ad582140bc8bc570bd081": "7f7881610709312da5bfaab5a2acbd5e",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/71/254cb0dd9f501a1813ab4d5e2fb8a7f384d1b1": "e37a3c1e8a8d970791775960c76becc1",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/c25c3233a328b4b5f5e8120e711899df51496c": "2dbb54186c30d9fcda7f72d255188aaa",
".git/objects/74/d18ab64897173f3acfa52e927d76b50d4d1c1e": "4bc321056a1469ba6a31a62a9a258d97",
".git/objects/75/377e040c7689d8c090056f896ebe78a72e6add": "663c59672b40bc151c106050bb987543",
".git/objects/76/122fc7624e1afb5e18ae528f4d4c0e77f964c8": "69a6907f521f2cfdacbb90459678b7d2",
".git/objects/78/2b998cd9168487ce41512743bb7df1c3594bec": "ff0a9986a23acfe0e8f9ec5e262c48e1",
".git/objects/7c/4c026f8c71a113e9cb574e1e6ee82025c3343f": "5b8f906cd147cea74cedb2a7355a251e",
".git/objects/83/9a6859cad1c674b90da6d5af910fc04a1eb6a0": "b7a1137b00de403df11c0ca52f490ca7",
".git/objects/83/baea29c1710fce149a4fa015a0e2b36fadda54": "2e3acd56202a8ab86ce28f4b4a7694a1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/dcf92c3c800f67d92950de2e40ee12751160e5": "d4fa8a05262caf97ac79a0ca278eee90",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b2b17678813db984494cec086cde2f3a82d7e3": "04eb35b52bf692cc07ee257b2f04b173",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/745d9c3570388ef2e20c0ba30b5793f2e5cfab": "a4812c3c2910569c895f74921620fc9d",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/93/504480b63862cb24e53d505a8ceb74deaaa3f0": "7ee2161fcf8362f7fc900134299c01b3",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9f/6622a88eba8439d2da405645fbe35007db2f04": "9d003b3cd40176ba06029fb7f67204b6",
".git/objects/a5/2b9a691d6b84f6c720b577f93038729a126d95": "ec209e74aa4c635bc7d68015b625bd52",
".git/objects/a7/922eec651db6dc1e8faf47e4c715d15f3d3466": "fb677c0e5e267350a0461b224f1698db",
".git/objects/a8/5b26fbf1a9dc270f258cc73afe5a50942d912e": "b768fa1d8f3f4c6134c973d2514b50be",
".git/objects/ad/32a59958745aa34f6cb26590f2df9621065528": "f13c19d0d087722326f216b25e7055b1",
".git/objects/af/a99f5f5b0adc05ef8bcb5cdea710fdc4b2336a": "bc31fa254214c448aa7650251d555054",
".git/objects/b2/fdcd494bf641b74d1d1a37a644e5bfd6903928": "c7012a4b3439c960aba2a287ef993a0a",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/619a56badd73abe3af34b68c0decd70a241089": "12b855e14cbeaf9bbdd91fed205b286c",
".git/objects/bd/37f72e0b56b5223d12280b808867baadcc2041": "695750870aa940cb54833f417e980cdf",
".git/objects/be/8bf7e922d9ef614ba675c84479ea13389bd369": "117326c5fd0d3ddf6d5485b26b69a9b9",
".git/objects/bf/9877a28d58565aad48f7325bc74a55144325db": "0d27129f95ea834baf28e390c69dcbd4",
".git/objects/c1/7e173343a7f1a9e4c21e360e96dc1b6d322ba8": "6ab2fa5225c59a84f1631851ce2411cc",
".git/objects/c7/ca4b0d2838713f6da1ddb6267bfcab96a4f866": "10be97140758d8bff20c295471fd320b",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/bbe477596f0c54156949ec9fe44be088daf895": "676cbf8fef0ffa974e0c096e02355504",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/76a97793d30f38f7b2493809a1e6fc83b11494": "12f0ac3b2c96526327cdff6e0a3ce7a5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c0f15c3f3b7172c06bf6d1dd4d0eca998c50d3": "464f7e80ac39ab935183073f8f289e54",
".git/objects/dc/713151342eace07db95b8a518f43b91d2cca42": "1c55d94291fddfd0bd0a2b8372fb3c9d",
".git/objects/e0/86541093dda1167b8900d811cd215d7e4a4303": "0c8493e8c5e3a2a248aa82b26f1d5cd0",
".git/objects/e2/c65f15a3ea40d8f0da20b3780a53548fb4cecb": "2cf3077123543360ea184ea9a6150041",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c24eacee236a98589131c9aad964baf051c323": "fe100f2e69a704d4427ef74c398103eb",
".git/objects/f0/b6ac5fbee7aad954f01d703444f07f606f1fdf": "a4b5129e2d797f7d8ddd28781e0a78b2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/10a8e9a4984bc9dfa5a64ad0fe11fd730a6b39": "1b107bde5a71a5ba51bc01af8abb61a7",
".git/objects/fd/73ef0939dc1dc25e48ba23f5b221f7be35c30c": "a1bc0ba359a737e0948ec62f35b81082",
".git/objects/ff/12348c721ff3233c9690f72d7404f660f6c5ac": "2e67945cbf66fcd4de8ef365fa88773c",
".git/ORIG_HEAD": "c062d0ac887c03d45c45b42dbc3b4749",
".git/refs/heads/main": "c58b2c944485d8aded7dc15852f53b90",
".git/refs/remotes/origin/main": "c58b2c944485d8aded7dc15852f53b90",
"assets/AssetManifest.bin": "dbfc388d114dcacaeb698f5c9780c117",
"assets/AssetManifest.bin.json": "f4276356d33d7300ec7f2ccf7d897f70",
"assets/AssetManifest.json": "0a13a4fdd4180e3830bb3419c784953a",
"assets/FontManifest.json": "820fec9cca659cb6317c11da38fa5bee",
"assets/fonts/dm_serif_display_regular.ttf": "25b39681f8cf94ad3cbfc6d25d9c0c4e",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/fonts/space_grotesk_bold.ttf": "a17e24dc3fccc03e32a6e66100fb05df",
"assets/fonts/space_grotesk_light.ttf": "021142e7734a57a1a48ca495158863cf",
"assets/fonts/space_grotesk_medium.ttf": "705b51b5e52edb8d669adf36eac8f771",
"assets/fonts/space_grotesk_regular.ttf": "7f510d38d1c785c851d73882c0ca58c0",
"assets/NOTICES": "8fa09686bee822abe2c06447a91121e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "d1744272e70e82b3c6b106e9774d9621",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "61f1525b98aee5b8560a6f342297c33d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "00be22435561bfee9eba85ada2280849",
"/": "00be22435561bfee9eba85ada2280849",
"main.dart.js": "b9071569f54961611e309cad5f292cd4",
"main.dart.mjs": "bb51ea12cbbfd589fe99c6d7c923c375",
"main.dart.wasm": "2f2d7ae9dbe81e4efdd19b522ca188ef",
"manifest.json": "c98441c640cc7903cf33ee2a8a15ed5f",
"public/icons/books_48.svg": "f4f5f2e36054f16f1a46652231c0b1d4",
"public/icons/close_32.svg": "9f31313aa4881492544d7bcd6310c2e9",
"public/icons/home_48.svg": "75bf8598c43c69b1def90b3f217da386",
"public/icons/like_48.svg": "2d024d721ffbf7f422e1551822340e1b",
"public/icons/play_48.svg": "9879c52533de112c7e8bd2286422e807",
"public/icons/profile_32.svg": "d9a6bd29adc57209f2fdd8420f4a289c",
"public/icons/read_48.svg": "d7bffdf54072b0088a28c12940ea1a90",
"public/icons/save_32.svg": "15a657036a59677b171735136250e1fd",
"public/icons/save_48.svg": "deca7c7158323a557f645af6d39f5e22",
"public/icons/search_32.svg": "7d34dd6be0a751dc3eb9ebb71f59dd17",
"public/icons/share_32.svg": "8c5c890eac3dab3049ecefbe241f878d",
"public/icons/share_48.svg": "a2f6479404d85728fffddd1b6f53f121",
"public/images/c_01.png": "8ff125c96f65a6fd5153c53978134c31",
"public/images/c_02.png": "6a3984a8f626a3f4bd4e6c482f31632a",
"public/images/c_03.png": "6a942264b52a21a72051d313f4c0d355",
"public/images/logo.png": "0be2b22c59740fa776cf49ee266b9893",
"public/images/s_01.png": "5b8dfd36e046994876d125f23b223c5f",
"public/images/s_02.png": "8966b945ef4eb6edff6251887c5bbaa7",
"public/images/s_03.png": "53e87add6f036fc37838749b898b1eb8",
"public/videos/s_01.mp4": "045d53f2d0452adcfc5a797a6423b484",
"public/videos/s_02.mp4": "10db164d2afe4264bff5f199763f6b64",
"public/videos/s_03.mp4": "2a35d82ca95ac80fc75ebe3db1bd7467",
"version.json": "c6dd483d721ac835e411b580c609a781"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
