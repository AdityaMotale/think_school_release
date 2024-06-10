'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3f96f83774491d991a1944e956f99c34",
".git/config": "e70db16f7e8ecb8e386a1735f2b77dd8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7472a58349801d2445660bad2d35e50f",
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
".git/index": "11b4a24fed3280a8338cf4512a845836",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5a3aa68d6fac50ab77042ca4c4eb42b9",
".git/logs/refs/heads/main": "417fa94296e105ae402f825c82dc63aa",
".git/logs/refs/remotes/origin/main": "b96f3ca6b34ec9c8db438aec7c3ac939",
".git/objects/00/16e1f0e5118b2dde826fecf8d8a09aa9968b2f": "84130712ca9fba2e7db776dc615fe380",
".git/objects/00/1b7d487e20f65cb323051474348815969a0b53": "f2acbd86afad8400e8c7d78fba885797",
".git/objects/00/34537840db8be57f4915421aa3c26a8ddb5b4f": "f436254ef5815a662b2691cb6016385f",
".git/objects/00/489a2b342d01db51bb08321e27e0efa93a957c": "bc301cefd1a53e8f5748e672224e4195",
".git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "9cc6800e9a3a8b871a97ce7c48097610",
".git/objects/02/b18d4e81d0e63ef9cfca243ef2b2561d20c656": "82046847be5e5b4439f73531a023e58e",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/08641c61d0f3ce53d24348e9db72dcc1261179": "712a668b589436bcb4d1625893815c8b",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/07/82b723fcb36042d44e81e0fed446732e6c7912": "8a664355d4fff552b9d8538cfebfdbde",
".git/objects/08/d5b30819b69b1ced2e8217b0d81fd367c2ffd0": "ac9e3a8ce0ca74671f977eeedbcd2418",
".git/objects/09/6f31b07e7b767d578a55c7de29b923084ced22": "72c9811a86c3e22076a944b685322849",
".git/objects/09/b8d691ca29948e2db54a5cf4d3341df67ad481": "2ffcbb8254f667549679974834e61972",
".git/objects/0a/692410d803c26d25ddbcf92ecf25ddd2d14a19": "20e446346f618414bb6fbe2e250f6ddb",
".git/objects/0d/1b94da95e3fb43951a329677854da12bdb9db7": "2b507e9f595e6223fc321cf046f622b2",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/824225538a6516288532467e6a2e15748835fb": "51c993e92252f41d6e1172fb150d5477",
".git/objects/10/a135656b410970cf20403349a607786ef92d1e": "6799ba1f1ca9e92a2ec972294e4fd17e",
".git/objects/10/af691c98e3b5a0341dd8a61f1bdc07615c3b30": "1ca743255d69eeb72178975b2eebe2e3",
".git/objects/11/e7164127447cf513d7ba131c754dbdc73321e8": "2172e74c63cb1757679a6ffba670f170",
".git/objects/12/bb3e82a4d905611eeeb7a86df5f5da8405338b": "6f336e14ebd497ff8c85a6390be6e690",
".git/objects/13/6f5f82f04b7b859eb6c932465fe1388331919e": "4f1bd47f04497b4c77035cac461d6e1b",
".git/objects/15/1ebd06108d12caedf5bc83b8b0b5f81f1fdca1": "bd0e80863782355086b7587b63c94ef6",
".git/objects/16/8b9dde0f1f75e889e72a4a5d3df27a8ad49b25": "7672adcd4dec2cfe9a03e093c5301ee0",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1d/7fc25a5fb735abbc5c4b6839e628898a2d5f68": "c8b1c30c567506995cf4b20e7e2378b2",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1d/d86025105852c000c022c01443cef16fb29ea7": "0f5789ff38282318c23dd2f5529d9d64",
".git/objects/1e/e9aabf02fa920c7ef49889a046aac94a6a6122": "502e419919decc76209d37660b86e0d1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/67f136362989d0f9a35699b947b64f43e6e5ca": "b4316bc2e920c40a8ce5d3922d4e30ce",
".git/objects/22/2b07f0f27b74f164fd8b540fb7211b8d7dff58": "2f7b7c5bbdb0e763313dd142dbe8d51c",
".git/objects/22/6db044bb4f62b2012648c1e4290dfa1b09af3d": "c715923365328ea5f988dfeea3fb3fe5",
".git/objects/23/0e7e96e223c83b74d99b366c2a627e9b8926b0": "b79cdb0a369ddf51e3aa353a62637158",
".git/objects/23/783eebe74854ef5a8c10d69db1fc7e8a8a1def": "fb5b668ffc616c159dad44c89995361b",
".git/objects/23/947fe60c430d8fdd89b7b51e900727d14641bb": "e447b2032d6b62b0ec610414159d7bdb",
".git/objects/24/060a4c60ccd76933c6d8bf7b87c3b8a01ec2ce": "1641e5eed28c28d8b3d8a8a0f279ff0a",
".git/objects/25/5db16c4b7ae3f7061ab0a23bc2e4dbd738fe52": "30d25298cc927bac5a488b7fc5e643d2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/6f7d5f7e67fc656ff8ab2a1e6dea872166b324": "b6f06b5566fb599b983ae0ec52746eff",
".git/objects/27/7e9831e9bbaf80a55df80f166f4301d3258478": "30bbf80d68b8261340de951f46d94dc7",
".git/objects/29/d81e6a14c06aed828c03363c6ebff1699a8dc4": "8e39cc292ab3786c41a9ffb1073a623c",
".git/objects/2b/dcd02442229d554829fd66b0515fec4d864329": "33452a3fd7cb49a1ecc28850a9cd8f10",
".git/objects/30/471881cb285d48e1309cee2a1e76cc59bf4627": "165dee245d123a5e13675d2d1400f75f",
".git/objects/32/133003236c15c19c7f8e1b785a5562f33b4834": "ea20733fee57ef859aa1a3fcf8b87316",
".git/objects/42/bc4424641a92d089de2de46ebe6929d781a0a0": "dd4a56ae608c10cc2a201c97372c89ce",
".git/objects/44/4a9525fe5a524d5e020bb80c34e1035e93d304": "de9df2d67551b5f6a29ff624f9af0119",
".git/objects/44/8c9031c541943578b646c710dbb543ab922357": "bc40e287f876b1741047aac5ded06671",
".git/objects/46/347330a407a77d51b2189a9090fa04e04e8e37": "32ffaefea13ac5c37f6052856a01fb08",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/b7bf87efe38a686f473348139f96dff4a2500f": "5bad10e78b93b6835f3cd7294dbacaef",
".git/objects/4a/d97efa54c84687c12d41389dc1bf78d014034c": "75f78cf07af9b1aec6b26fc11f1d52c6",
".git/objects/4d/3a8b3cfb6bfbb4a60c1b5b03b9caa5b422789d": "2d19d6e025f62cb6f2297ef8d3d029bd",
".git/objects/4e/eb97c26cc6aee99d5f5e9a0c721801a1cc544b": "5e7598b51c5645c1fba8d6ab8e7d73a4",
".git/objects/4f/0b382abbc827531cfa1a63fd4c25f578d6359e": "ccc92e68c7bd31e72c183e5af9875985",
".git/objects/51/1c6a33299b03699f18ba075756c76e2290624b": "a4c899fad55d7670a84b1f2da112a22b",
".git/objects/54/81ba677790a61be3ac7bb2a04ccc9b4f69ed94": "23ecf323df3a5c1f362057cdc9ebd641",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/d35d0559adecfbc98dfd07288c5a9c93888afa": "693c772d77318f8f2020ac461e267773",
".git/objects/5b/c72a6fc53f3164d649684d4c7bbde0246944b4": "531be3f7547948d9af048fed2b16564c",
".git/objects/5d/c3ce3806631e1019444f3a275a8e54ae507e1e": "2866bf44003f17f33fbd8d789441a16a",
".git/objects/60/23ccfbed9a95d922019f9f11ac54d56be26d2a": "132698cbdd955042ad2b40be9c55ca3b",
".git/objects/61/304cea609c4229ccb34c72ec3c2563d33770c7": "b0d96bf99a650f1fd734e83193c59c49",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/0ad3552ca406b168c08215b36106a42c95d39e": "38464ef8e18c6cd5c602701c90d0bdbb",
".git/objects/65/a57b7c15c483fe004fb888ca5bba5480224e82": "f3c7b14aa9dcc133e20ba040d9aeafbe",
".git/objects/69/3f87ccc5555867fd8ad582140bc8bc570bd081": "7f7881610709312da5bfaab5a2acbd5e",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/29d7d2a54f392893b6e17c59ec18b6f9e33b0d": "89adb9651d162dc8173b2a272b348964",
".git/objects/6a/3d64bf3b0a38dfcced7b2d5f2d14fe2819eeb5": "82bc105f573815fe6ad598ffdf412d0b",
".git/objects/6a/c1bf4cb47cce6ec3c0483914ffb77983c7e650": "bd083a01f0f1b0baebd79c1d2e5c2d47",
".git/objects/71/254cb0dd9f501a1813ab4d5e2fb8a7f384d1b1": "e37a3c1e8a8d970791775960c76becc1",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/8a7366172f522c59ace37f85de59fb7d4c0516": "10667b9f96aa5e765116d12475cebc81",
".git/objects/72/c25c3233a328b4b5f5e8120e711899df51496c": "2dbb54186c30d9fcda7f72d255188aaa",
".git/objects/74/d18ab64897173f3acfa52e927d76b50d4d1c1e": "4bc321056a1469ba6a31a62a9a258d97",
".git/objects/75/377e040c7689d8c090056f896ebe78a72e6add": "663c59672b40bc151c106050bb987543",
".git/objects/76/122fc7624e1afb5e18ae528f4d4c0e77f964c8": "69a6907f521f2cfdacbb90459678b7d2",
".git/objects/78/2b998cd9168487ce41512743bb7df1c3594bec": "ff0a9986a23acfe0e8f9ec5e262c48e1",
".git/objects/7a/b6249d0cd2162bb095b8597621dc71997726c2": "722adf60e3c019da74d998af31581845",
".git/objects/7b/700f88fcee85fc9fd4fbd67fafb916b3f8d590": "646dcd83bcaa8b7c71f5c48322729f29",
".git/objects/7c/4c026f8c71a113e9cb574e1e6ee82025c3343f": "5b8f906cd147cea74cedb2a7355a251e",
".git/objects/7d/44b663b97c0a892474e3fe33caa3032939835d": "8baf14e2f8029f80beac925560358d61",
".git/objects/7f/c04e7ee3f20965e09487855ce510e3cb9165ec": "13bbdd2cfa693e92c2c75b2c9019877c",
".git/objects/82/c1998a2e4e91b7c0836df7d94367ab6a875fc3": "419fafbba2f26b8d2e9a726580a32490",
".git/objects/83/9a6859cad1c674b90da6d5af910fc04a1eb6a0": "b7a1137b00de403df11c0ca52f490ca7",
".git/objects/83/baea29c1710fce149a4fa015a0e2b36fadda54": "2e3acd56202a8ab86ce28f4b4a7694a1",
".git/objects/84/c7e0d96720c92043198d71c128ac0f1d7db42f": "f65edd7ef794744b70c754cf05d98820",
".git/objects/85/488016b73825018138697f583a23950a6bafd5": "1b6c1ba570c9c379708243302cac9bdb",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/dcf92c3c800f67d92950de2e40ee12751160e5": "d4fa8a05262caf97ac79a0ca278eee90",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b2b17678813db984494cec086cde2f3a82d7e3": "04eb35b52bf692cc07ee257b2f04b173",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c12c4d089df6a842185dccfcf6a6eeda85a6fd": "b3f889abbceaf9d4838e448b2389056c",
".git/objects/8c/0dd8dcd973637c52ddda1fc3ce3cdec7e57705": "b0e00f50e1f8b5ac79cb20d9a5955129",
".git/objects/8e/745d9c3570388ef2e20c0ba30b5793f2e5cfab": "a4812c3c2910569c895f74921620fc9d",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/39165e32925778ac0be18bbb365f0a1fd247f5": "90c43682a5ad061821888d131bcbc3e2",
".git/objects/92/42880ca286a9b056a79284dafea860fde6055f": "be87f1cd2d2a11bb6b7fd14243ed6c1f",
".git/objects/93/504480b63862cb24e53d505a8ceb74deaaa3f0": "7ee2161fcf8362f7fc900134299c01b3",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/d1ae646976d9f5604567f37a46db13ea6dc6f3": "dc6780c0d556618a16f5244232d6b381",
".git/objects/96/33dd381c907111c5741bb3cc1d0e5a18ce7061": "3d0adcb864bb3b17c5169b5035df2aae",
".git/objects/97/4c99c5cbd86ab2cda2bde572a527dfe8d11dbc": "b5390a11d0c81ffb2b00a5dcdf9d2990",
".git/objects/97/4e5f10902c68bee0881c7bfb89ce0a56befc85": "7b4684f657887870181170de05d4fb55",
".git/objects/98/1bcf5b2cb0a1ca43dcee7577015c0bfbdf91fb": "8f3f5d0198c08cbe77a96d4435846361",
".git/objects/9a/7f2e47b4c29e96de5985981c4f72d3d30da8af": "e66ca7e95cc480d84235ba50d9175c6d",
".git/objects/9f/6622a88eba8439d2da405645fbe35007db2f04": "9d003b3cd40176ba06029fb7f67204b6",
".git/objects/a1/1be01f5484b8bde6a820fd70a32e5bb3d111a1": "9f53bd47ddb5d2abc4f948571e09fdf0",
".git/objects/a5/2b9a691d6b84f6c720b577f93038729a126d95": "ec209e74aa4c635bc7d68015b625bd52",
".git/objects/a7/922eec651db6dc1e8faf47e4c715d15f3d3466": "fb677c0e5e267350a0461b224f1698db",
".git/objects/a8/5b26fbf1a9dc270f258cc73afe5a50942d912e": "b768fa1d8f3f4c6134c973d2514b50be",
".git/objects/ac/2e0b4f1f515e641eef994f10227c9565dde597": "20b9a5f2f80622858a2971104321ba97",
".git/objects/ac/3c560bd423a1b93fffa0c447c34effca33b0b9": "45ef645b0a0f412852d1cbfade6de6e7",
".git/objects/ad/32a59958745aa34f6cb26590f2df9621065528": "f13c19d0d087722326f216b25e7055b1",
".git/objects/af/a99f5f5b0adc05ef8bcb5cdea710fdc4b2336a": "bc31fa254214c448aa7650251d555054",
".git/objects/b2/fdcd494bf641b74d1d1a37a644e5bfd6903928": "c7012a4b3439c960aba2a287ef993a0a",
".git/objects/b3/83f3c7d46c38d354f3e4dc5ec910675d2bce8c": "073ed01dd29c402f3e1de5c6ec9bc13f",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/3d558d963c758daee17053349be49f1d55493d": "9a2dee054e8e7730091159ec3d7ad619",
".git/objects/b6/e3a71edb1cdebaf79519888e4fd692b40b1936": "0d902cdd048d1b11d3a32434fa8f935a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5d053e6f1359e4c0b95abe46a5edd50ccbcbac": "70c45077d6583a44024f89a4ed4409b2",
".git/objects/b8/db31692f2c47d4ddc80f5f3c1d4575b761ff0a": "5aec51894299fb09946609fcbe1184d1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/619a56badd73abe3af34b68c0decd70a241089": "12b855e14cbeaf9bbdd91fed205b286c",
".git/objects/bc/967fc78d89ae23d41eeafe6c9d01cb02d7e314": "4dcbb5641794c3489131aaefed6b75bd",
".git/objects/bd/37f72e0b56b5223d12280b808867baadcc2041": "695750870aa940cb54833f417e980cdf",
".git/objects/be/130fe4f2138e6a99c5baae4896fa729a257e39": "31f950c04f5eff7694fae889ac15ec7d",
".git/objects/be/8bf7e922d9ef614ba675c84479ea13389bd369": "117326c5fd0d3ddf6d5485b26b69a9b9",
".git/objects/bf/9877a28d58565aad48f7325bc74a55144325db": "0d27129f95ea834baf28e390c69dcbd4",
".git/objects/c1/7e173343a7f1a9e4c21e360e96dc1b6d322ba8": "6ab2fa5225c59a84f1631851ce2411cc",
".git/objects/c3/106922bff0b94e342ab9498908a07f03c2ace0": "8352977661093c34b427fa4389e0bc66",
".git/objects/c3/ece7361d62f3b49c42979153615b05906e6b31": "a8b65973bb5e63d50b6a6063d0f02161",
".git/objects/c7/ca4b0d2838713f6da1ddb6267bfcab96a4f866": "10be97140758d8bff20c295471fd320b",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/8a73d1e084e72cd88811170b9f95512567272f": "7d93d9ab5c0316bcf4b9dbe466862c0f",
".git/objects/cc/bbe477596f0c54156949ec9fe44be088daf895": "676cbf8fef0ffa974e0c096e02355504",
".git/objects/cf/597b27f77be4d951e6b38e80733d9aa7c934a3": "59d0b44d53cacea39ee1efa39d9b39c0",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/c9b45e0a74657929b16ac0604140c48f7ccfd0": "fb368b9d106af27c96306b54f28ba706",
".git/objects/d4/1bcccd8641696d026ad0baae9ffc1ed902262c": "8023463bebb4baf2570eb34ffcc93c11",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/76a97793d30f38f7b2493809a1e6fc83b11494": "12f0ac3b2c96526327cdff6e0a3ce7a5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c0f15c3f3b7172c06bf6d1dd4d0eca998c50d3": "464f7e80ac39ab935183073f8f289e54",
".git/objects/d7/a364b1b1ba771036e6a3304ffdfb0934ade08d": "abc57ec7a8e8f4066653b88e002f3b31",
".git/objects/dc/0b2a322b8827deb318579ee4ee59868b42c3b6": "d1ceaa524a54fdcd186273489d68c0b8",
".git/objects/dc/713151342eace07db95b8a518f43b91d2cca42": "1c55d94291fddfd0bd0a2b8372fb3c9d",
".git/objects/de/b27eac9498194eb67295d99ba3f027de1c12ec": "b2094e462418dc386d8135254644d507",
".git/objects/e0/3bf72d1a060ec9cf0ab3c814c5eb56942537eb": "889b9648d50ba2d52cfed2b2ddc15933",
".git/objects/e0/5ff2434c78aecd972d389bd2a9608631f49332": "8e104c63dbee51740bc35bc72d55ca7f",
".git/objects/e0/86541093dda1167b8900d811cd215d7e4a4303": "0c8493e8c5e3a2a248aa82b26f1d5cd0",
".git/objects/e2/c65f15a3ea40d8f0da20b3780a53548fb4cecb": "2cf3077123543360ea184ea9a6150041",
".git/objects/e3/e3041bd1236e725e243f81c5f1fd5b26cec8bd": "0669220da82432b79c86fc1151ca9cce",
".git/objects/e6/caca8ded305075c355d70cbd55c9078a6a16ad": "dcb69cbd57e51b146c8747b9e2bf8bca",
".git/objects/e9/970ab0d5860b83a6029db3ffb035795306ea78": "fd666442dedc9cb9fe9434a55b454862",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c24eacee236a98589131c9aad964baf051c323": "fe100f2e69a704d4427ef74c398103eb",
".git/objects/f0/b6ac5fbee7aad954f01d703444f07f606f1fdf": "a4b5129e2d797f7d8ddd28781e0a78b2",
".git/objects/f1/620f4fe27914a4d4b21036a0bf5a8a317af6f9": "5c64983c8715abb14ea7a3f094510870",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/10a8e9a4984bc9dfa5a64ad0fe11fd730a6b39": "1b107bde5a71a5ba51bc01af8abb61a7",
".git/objects/f7/a76e913197b7d4a2be1a51f80e86e873d3fd7d": "57face77500d134ffffc4f6bd234c760",
".git/objects/fa/6a195cc871236706b258f8a571e381d27799c1": "9757fe368e6f492067d65bf0112f5627",
".git/objects/fd/73ef0939dc1dc25e48ba23f5b221f7be35c30c": "a1bc0ba359a737e0948ec62f35b81082",
".git/objects/fd/d84b63d6324b8f11b947f08249dc65a727d029": "80d65edf82620f7b929b86cab5062ce0",
".git/objects/ff/12348c721ff3233c9690f72d7404f660f6c5ac": "2e67945cbf66fcd4de8ef365fa88773c",
".git/ORIG_HEAD": "a03b91f0724eb2ca77b1c7798c7d673b",
".git/refs/heads/main": "293c5e2b5ab52e9d71ac8744f984c9ed",
".git/refs/remotes/origin/main": "293c5e2b5ab52e9d71ac8744f984c9ed",
"assets/AssetManifest.bin": "dbfc388d114dcacaeb698f5c9780c117",
"assets/AssetManifest.bin.json": "f4276356d33d7300ec7f2ccf7d897f70",
"assets/AssetManifest.json": "0a13a4fdd4180e3830bb3419c784953a",
"assets/FontManifest.json": "820fec9cca659cb6317c11da38fa5bee",
"assets/fonts/dm_serif_display_regular.ttf": "25b39681f8cf94ad3cbfc6d25d9c0c4e",
"assets/fonts/MaterialIcons-Regular.otf": "0c4a456ef1becca7bba3d195197670a8",
"assets/fonts/space_grotesk_bold.ttf": "a17e24dc3fccc03e32a6e66100fb05df",
"assets/fonts/space_grotesk_light.ttf": "021142e7734a57a1a48ca495158863cf",
"assets/fonts/space_grotesk_medium.ttf": "705b51b5e52edb8d669adf36eac8f771",
"assets/fonts/space_grotesk_regular.ttf": "7f510d38d1c785c851d73882c0ca58c0",
"assets/NOTICES": "6d44bfba10e6695afcb269aa0ccb0f63",
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
"flutter_bootstrap.js": "32a7ab9e1ea33a211d37cbc319e234bd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "44d14018650b88731347436378bfcf2c",
"/": "44d14018650b88731347436378bfcf2c",
"main.dart.js": "38f71724548658093710400e2e15371a",
"manifest.json": "c98441c640cc7903cf33ee2a8a15ed5f",
"public/icons/books_48.svg": "3446432d6a4da5154ba41ad43efb7b4b",
"public/icons/close_32.svg": "ae1e2154f86db3379c5c352cfe336737",
"public/icons/home_48.svg": "5be8d0ac556b61af9040c1726a4f2b86",
"public/icons/like_48.svg": "48b4bc5477e360bae33a56e5802ef9f9",
"public/icons/play_48.svg": "4732b788583450d97df1b5440893e206",
"public/icons/profile_32.svg": "d26802cc83404ef330354339ffbcb54d",
"public/icons/read_48.svg": "4d22eb3d4fdf9bc3ab767004cfd72588",
"public/icons/save_32.svg": "8d0249b5394c34e9146418ebc36fb3d5",
"public/icons/save_48.svg": "8d5c152fe99249f9ee859c561b2a7a71",
"public/icons/search_32.svg": "33f626fc01b2f67d852ac55c385fedec",
"public/icons/share_32.svg": "78036377e00d4fa8e13a073226d6df1f",
"public/icons/share_48.svg": "a332acc38ca2681b4feb76169bf5d6f4",
"public/images/c_01.png": "8ff125c96f65a6fd5153c53978134c31",
"public/images/c_01_01.png": "5ec3a813220797a996b011cb62cb2cf5",
"public/images/c_01_02.png": "86ce7c089bc5e53ddb2b9b466eef5c23",
"public/images/c_02.png": "6a3984a8f626a3f4bd4e6c482f31632a",
"public/images/c_02_01.png": "0370967fdff1bb0d16bf392eea829263",
"public/images/c_02_02.png": "18c6cae881b3ad738088d8d7f8bb431a",
"public/images/c_03.png": "6a942264b52a21a72051d313f4c0d355",
"public/images/c_03_01.png": "37f737f51474245c4eebce4f7ffc37d3",
"public/images/c_03_02.png": "f1a6dfa9f37cb91befba3f389aa79e26",
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
