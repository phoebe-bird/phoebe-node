# Changelog

## 0.6.2 (2025-07-18)

Full Changelog: [v0.6.1...v0.6.2](https://github.com/phoebe-bird/phoebe-node/compare/v0.6.1...v0.6.2)

### Bug Fixes

* **mcp:** include required section for top-level properties and support naming transformations ([1ef3267](https://github.com/phoebe-bird/phoebe-node/commit/1ef3267f99eea1885f639dafdbaa1a3b7ec5a496))


### Chores

* **mcp:** formatting ([51b87b8](https://github.com/phoebe-bird/phoebe-node/commit/51b87b8bfc0142663bcb9b6075e00f3bec8de4fb))
* **mcp:** rework imports in tools ([9d7301f](https://github.com/phoebe-bird/phoebe-node/commit/9d7301ff9f45a63e6c369835312a44827755ffdb))
* **ts:** reorder package.json imports ([abab014](https://github.com/phoebe-bird/phoebe-node/commit/abab014645f6f2975a0cc0fe8ff5b6601011bcf0))

## 0.6.1 (2025-07-16)

Full Changelog: [v0.6.0...v0.6.1](https://github.com/phoebe-bird/phoebe-node/compare/v0.6.0...v0.6.1)

### Bug Fixes

* **mcp:** support jq filtering on cloudflare workers ([1f631fe](https://github.com/phoebe-bird/phoebe-node/commit/1f631fee6fc0ff43507d7dd1ea22e77d3fd87cbe))

## 0.6.0 (2025-07-11)

Full Changelog: [v0.5.1...v0.6.0](https://github.com/phoebe-bird/phoebe-node/compare/v0.5.1...v0.6.0)

### Features

* **mcp:** support filtering tool results by a jq expression ([5f4197f](https://github.com/phoebe-bird/phoebe-node/commit/5f4197f9e4931b51c7dee996ea8c43509990f127))


### Bug Fixes

* **mcp:** relax input type for asTextContextResult ([b604005](https://github.com/phoebe-bird/phoebe-node/commit/b6040055506ebd95a3d25c7652c093aa4399b51f))


### Chores

* add docs to RequestOptions type ([ea8173e](https://github.com/phoebe-bird/phoebe-node/commit/ea8173e516b7bb34ae4e505dca7f077bb044107a))
* **ci:** only run for pushes and fork pull requests ([0c6c976](https://github.com/phoebe-bird/phoebe-node/commit/0c6c9766f3661ca440c098f975299d5a02d23ff4))
* **client:** improve path param validation ([aee7ca9](https://github.com/phoebe-bird/phoebe-node/commit/aee7ca9177517ef88c922508fe8ce63e506014a9))
* make some internal functions async ([da22c40](https://github.com/phoebe-bird/phoebe-node/commit/da22c407f03c236484ff0074344fda3ba2f0eaa8))

## 0.5.1 (2025-06-27)

Full Changelog: [v0.5.0...v0.5.1](https://github.com/phoebe-bird/phoebe-node/compare/v0.5.0...v0.5.1)

### Bug Fixes

* **ci:** release-doctor — report correct token name ([00ed1a4](https://github.com/phoebe-bird/phoebe-node/commit/00ed1a4ed2cba6270ddcd94da02f15f3b67270de))
* **client:** get fetchOptions type more reliably ([6a05910](https://github.com/phoebe-bird/phoebe-node/commit/6a059105f9f9015935b66f26eece6134ac236bd3))

## 0.5.0 (2025-06-21)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/phoebe-bird/phoebe-node/compare/v0.4.0...v0.5.0)

### Features

* **client:** add support for endpoint-specific base URLs ([054588c](https://github.com/phoebe-bird/phoebe-node/commit/054588cb22c56fbe975c3e33dc91b929ac865a40))
* **mcp:** implement support for binary responses ([da0758e](https://github.com/phoebe-bird/phoebe-node/commit/da0758e3b5aa0c6615ebbc4bc6153cd0eecb16d6))
* **mcp:** set X-Stainless-MCP header ([173d519](https://github.com/phoebe-bird/phoebe-node/commit/173d5197c9d68461d3b1b8eaa52d555c50385ebe))


### Bug Fixes

* **client:** explicitly copy fetch in withOptions ([1ef36f2](https://github.com/phoebe-bird/phoebe-node/commit/1ef36f2cc4ecdcfd83a9a7920aa1c311ab6995ae))
* compat with more runtimes ([f296b57](https://github.com/phoebe-bird/phoebe-node/commit/f296b577bc619535df57a555278e1b46c183fbcb))
* publish script — handle NPM errors correctly ([2d50cbd](https://github.com/phoebe-bird/phoebe-node/commit/2d50cbd59d5bb517e31c97ac2b1f1016e331792b))


### Chores

* adjust eslint.config.mjs ignore pattern ([0cbf0ce](https://github.com/phoebe-bird/phoebe-node/commit/0cbf0ce33530c5ef1076171e8b93680ccbfde42e))
* avoid type error in certain environments ([868085e](https://github.com/phoebe-bird/phoebe-node/commit/868085e80797fd31b428ac572dfb72b198ec3eef))
* **ci:** enable for pull requests ([d93c780](https://github.com/phoebe-bird/phoebe-node/commit/d93c78099cbc03d90a043cb8f8d2ce302e470042))
* **client:** refactor imports ([00adfeb](https://github.com/phoebe-bird/phoebe-node/commit/00adfeb22e584ac5e72dc2be8dbcfbab95417d89))
* **deps:** bump eslint-plugin-prettier ([4dde732](https://github.com/phoebe-bird/phoebe-node/commit/4dde7320d3205f5df17578dad525c4c97830fb3b))
* **docs:** use top-level-await in example snippets ([ccef865](https://github.com/phoebe-bird/phoebe-node/commit/ccef8650abe6d0c27d32a73efdab9d4d87633d36))
* **internal:** add pure annotations, make base APIResource abstract ([ba69ec9](https://github.com/phoebe-bird/phoebe-node/commit/ba69ec9681f201b42c70a009daf20fa2df106f3b))
* **internal:** fix readablestream types in node 20 ([c9c55d7](https://github.com/phoebe-bird/phoebe-node/commit/c9c55d77c6ed026a0abbcf158aa29183b980d3ff))
* **internal:** update jest config ([1a507ef](https://github.com/phoebe-bird/phoebe-node/commit/1a507efb94051b712ed0dd9b19732b47cc8fd823))
* **mcp:** provides high-level initMcpServer function and exports known clients ([f5b7b3c](https://github.com/phoebe-bird/phoebe-node/commit/f5b7b3cc45b2f487908dc16fb81119516aa727be))
* **readme:** update badges ([f7aab69](https://github.com/phoebe-bird/phoebe-node/commit/f7aab69c037af0a25da931be3a0d15397e66139c))
* **readme:** use better example snippet for undocumented params ([e96ce00](https://github.com/phoebe-bird/phoebe-node/commit/e96ce00b183bb74610e261cafc050825bd9a7ee5))

## 0.4.0 (2025-05-29)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/phoebe-bird/phoebe-node/compare/v0.3.0...v0.4.0)

### Features

* **mcp:** include http information in tools ([a322a11](https://github.com/phoebe-bird/phoebe-node/commit/a322a117d8a8b19e7643d49bfd936cbf08875e27))


### Bug Fixes

* **mcp:** fix cursor schema transformation issue with recursive references ([c41b642](https://github.com/phoebe-bird/phoebe-node/commit/c41b64236e35d17f36ebcb7a1771c3660d3ea2ad))
* **mcp:** include description in dynamic tool search ([4f7a356](https://github.com/phoebe-bird/phoebe-node/commit/4f7a356af028d82eb7347fc93ac703d4187b5bd8))


### Chores

* **docs:** grammar improvements ([e8019eb](https://github.com/phoebe-bird/phoebe-node/commit/e8019ebb3a81c76b315d38012235f5fe2b1041ef))
* improve docs for MCP servers ([b690487](https://github.com/phoebe-bird/phoebe-node/commit/b690487a94c6dc7d61f9ac5075df9f101b3f5c2a))
* improve publish-npm script --latest tag logic ([b821660](https://github.com/phoebe-bird/phoebe-node/commit/b821660285069846642421c4af5c08a79cefee23))
* **internal:** codegen related update ([1e11355](https://github.com/phoebe-bird/phoebe-node/commit/1e113557e0bbb62ca2a4528b15e42343d15d73e7))
* **mcp:** remove duplicate assignment ([08e59c4](https://github.com/phoebe-bird/phoebe-node/commit/08e59c44c97d9890f84c9e47cc86c6e1788061dc))

## 0.3.0 (2025-05-13)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/phoebe-bird/phoebe-node/compare/v0.2.0...v0.3.0)

### Features

* **mcp:** support dynamically discovering and invoking tools for APIs with many endpoints ([d3c34c7](https://github.com/phoebe-bird/phoebe-node/commit/d3c34c77364a357e5153d48c6e8f341e93f40073))


### Bug Fixes

* **client:** always overwrite when merging headers ([f1b0587](https://github.com/phoebe-bird/phoebe-node/commit/f1b05876f23a774597d7a224808ee42c0a4fd638))
* **mcp:** explicitly include zod and zod-to-json-schema in package.json ([6d6ee2a](https://github.com/phoebe-bird/phoebe-node/commit/6d6ee2ac41bcbf5217349c516c53262286ff2657))


### Chores

* **build:** automatically build subpackages if present ([1637b6b](https://github.com/phoebe-bird/phoebe-node/commit/1637b6b0bc92a18345065eddafeeba1fb465422c))
* configure new SDK language ([d78e2b4](https://github.com/phoebe-bird/phoebe-node/commit/d78e2b4d59835841589f4e4450d8f393bb21a8b4))
* **internal:** codegen related update ([ea7b65c](https://github.com/phoebe-bird/phoebe-node/commit/ea7b65c6f5b92d4860e327160c8793dc4312353e))
* **package:** remove engines ([cf45430](https://github.com/phoebe-bird/phoebe-node/commit/cf45430f6b2e4528f3a3fc593f145476b4fd0870))
* **tests:** use node 22 for CI tests ([d6076c5](https://github.com/phoebe-bird/phoebe-node/commit/d6076c56488afd5afdd02fdf2d4e98a19c0b2e0e))

## 0.2.0 (2025-05-08)

Full Changelog: [v0.1.7...v0.2.0](https://github.com/phoebe-bird/phoebe-node/compare/v0.1.7...v0.2.0)

### Features

* **api:** actually do this the right way ([ad19a06](https://github.com/phoebe-bird/phoebe-node/commit/ad19a06d3ab489c841f190bb3861d458140a9d06))
* **api:** add MCP server ([0690996](https://github.com/phoebe-bird/phoebe-node/commit/0690996c5393cb3fa9e7da076e6a1a3227388e66))
* **api:** manual updates ([a5a2aa8](https://github.com/phoebe-bird/phoebe-node/commit/a5a2aa83cf0ccb32d50dc78fe86f3e716c0e7710))
* **api:** manual updates ([76cb921](https://github.com/phoebe-bird/phoebe-node/commit/76cb9219a478ba31010ab74591ecad48bb9d7e67))
* **api:** manual updates ([38d6cf5](https://github.com/phoebe-bird/phoebe-node/commit/38d6cf51441e1f933ad159178504d51ad1d98c25))
* **api:** manual updates ([6a190c3](https://github.com/phoebe-bird/phoebe-node/commit/6a190c36a80596083e602e4346e5dc9fefe3987e))


### Chores

* **ci:** add timeout thresholds for CI jobs ([6b5c455](https://github.com/phoebe-bird/phoebe-node/commit/6b5c455fb9c0c74b062cdce0702a8fe78a6a2ea4))
* **ci:** bump node version for release workflows ([57ce92b](https://github.com/phoebe-bird/phoebe-node/commit/57ce92ba0dafda2dc248fec4b4033655c2b15357))
* **ci:** only use depot for staging repos ([a87aa0c](https://github.com/phoebe-bird/phoebe-node/commit/a87aa0cf3879e79ca8294637a8dc0169ac1655a3))
* **docs:** update example script ([115fa9f](https://github.com/phoebe-bird/phoebe-node/commit/115fa9f7c6ea645862db910506f1f0d48d291dc7))
* **internal:** codegen related update ([5a9ac54](https://github.com/phoebe-bird/phoebe-node/commit/5a9ac5410fa0daa1f81010983898bf23354b3b66))


### Documentation

* add examples to tsdocs ([56de77c](https://github.com/phoebe-bird/phoebe-node/commit/56de77c50a690f5f8f58eba58cb81311a497d77d))
* **readme:** fix typo ([84cc4cd](https://github.com/phoebe-bird/phoebe-node/commit/84cc4cd99b11adee21c62b913ee02b17445ba9bb))

## 0.1.7 (2025-04-15)

Full Changelog: [v0.1.6...v0.1.7](https://github.com/phoebe-bird/phoebe-node/compare/v0.1.6...v0.1.7)

### Chores

* **client:** minor internal fixes ([a287c4c](https://github.com/phoebe-bird/phoebe-node/commit/a287c4c7ae2675764b234624a9549e9ed41bbbe2))
* **internal:** reduce CI branch coverage ([33664fc](https://github.com/phoebe-bird/phoebe-node/commit/33664fca6d20dde07dbcc9b540d56d385c63a561))
* **internal:** upload builds and expand CI branch coverage ([a773833](https://github.com/phoebe-bird/phoebe-node/commit/a773833d4efaac48971d02f42289748d699899dd))

## 0.1.6 (2025-04-05)

Full Changelog: [v0.1.5...v0.1.6](https://github.com/phoebe-bird/phoebe-node/compare/v0.1.5...v0.1.6)

### Bug Fixes

* **mcp:** remove unused tools.ts ([#63](https://github.com/phoebe-bird/phoebe-node/issues/63)) ([a976b86](https://github.com/phoebe-bird/phoebe-node/commit/a976b8695a6d1f094592d9382b86d9e67b886dd6))

## 0.1.5 (2025-04-04)

Full Changelog: [v0.1.4...v0.1.5](https://github.com/phoebe-bird/phoebe-node/compare/v0.1.4...v0.1.5)

### Bug Fixes

* **api:** improve type resolution when importing as a package ([#61](https://github.com/phoebe-bird/phoebe-node/issues/61)) ([d818861](https://github.com/phoebe-bird/phoebe-node/commit/d81886113ec57e36466cb08a96487eebe4df0aa0))


### Chores

* **internal:** add aliases for Record and Array ([#59](https://github.com/phoebe-bird/phoebe-node/issues/59)) ([4b55f68](https://github.com/phoebe-bird/phoebe-node/commit/4b55f68e761e55ffb4f230a2022a470b4ea3dd96))

## 0.1.4 (2025-04-03)

Full Changelog: [v0.1.3...v0.1.4](https://github.com/phoebe-bird/phoebe-node/compare/v0.1.3...v0.1.4)

### Bug Fixes

* **client:** send `X-Stainless-Timeout` in seconds ([#56](https://github.com/phoebe-bird/phoebe-node/issues/56)) ([f45f505](https://github.com/phoebe-bird/phoebe-node/commit/f45f505d52a6a6c7a81b311c57fbeed04e7f6795))

## 0.1.3 (2025-03-28)

Full Changelog: [v0.1.2...v0.1.3](https://github.com/phoebe-bird/phoebe-node/compare/v0.1.2...v0.1.3)

### Bug Fixes

* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#53](https://github.com/phoebe-bird/phoebe-node/issues/53)) ([13be885](https://github.com/phoebe-bird/phoebe-node/commit/13be885c4f34fd969e89e8311cf1d65b40677dbd))

## 0.1.2 (2025-03-22)

Full Changelog: [v0.1.1...v0.1.2](https://github.com/phoebe-bird/phoebe-node/compare/v0.1.1...v0.1.2)

### Bug Fixes

* avoid type error in certain environments ([#51](https://github.com/phoebe-bird/phoebe-node/issues/51)) ([e43750f](https://github.com/phoebe-bird/phoebe-node/commit/e43750f5aa16b17c45ef94244b1f5323d026733d))


### Chores

* **exports:** cleaner resource index imports ([#48](https://github.com/phoebe-bird/phoebe-node/issues/48)) ([d1d778a](https://github.com/phoebe-bird/phoebe-node/commit/d1d778a8849957341ab2df241a6ba0ecdf618aea))
* **exports:** stop using path fallbacks ([#50](https://github.com/phoebe-bird/phoebe-node/issues/50)) ([9669d2a](https://github.com/phoebe-bird/phoebe-node/commit/9669d2a6872bc3de617f9eec9e6e6c8767869129))

## 0.1.1 (2025-03-14)

Full Changelog: [v0.1.0...v0.1.1](https://github.com/phoebe-bird/phoebe-node/compare/v0.1.0...v0.1.1)

### Bug Fixes

* **exports:** ensure resource imports don't require /index ([#46](https://github.com/phoebe-bird/phoebe-node/issues/46)) ([4694c3b](https://github.com/phoebe-bird/phoebe-node/commit/4694c3bea791f8d9f7d4fc5f9922121010ae4a89))


### Chores

* **internal:** codegen related update ([#40](https://github.com/phoebe-bird/phoebe-node/issues/40)) ([9eb1447](https://github.com/phoebe-bird/phoebe-node/commit/9eb1447289a2176c2e4fef5ca721129a8d0084b9))
* **internal:** codegen related update ([#44](https://github.com/phoebe-bird/phoebe-node/issues/44)) ([e938230](https://github.com/phoebe-bird/phoebe-node/commit/e93823039d7068c9bcf8a47656e6d0b1964335fe))
* **internal:** fix devcontainers setup ([#42](https://github.com/phoebe-bird/phoebe-node/issues/42)) ([16774e3](https://github.com/phoebe-bird/phoebe-node/commit/16774e3d52e5d2d8ab1a64a53d88a88093bea9da))
* **internal:** remove extra empty newlines ([#45](https://github.com/phoebe-bird/phoebe-node/issues/45)) ([3fe6994](https://github.com/phoebe-bird/phoebe-node/commit/3fe6994be41940fb7691aaadb02766b774ca5146))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#43](https://github.com/phoebe-bird/phoebe-node/issues/43)) ([3b8d19c](https://github.com/phoebe-bird/phoebe-node/commit/3b8d19c8c9336405a7625e10a99709bcb5f783a4))

## 0.1.0 (2025-02-21)

Full Changelog: [v0.1.0-alpha.4...v0.1.0](https://github.com/phoebe-bird/phoebe-node/compare/v0.1.0-alpha.4...v0.1.0)

### Chores

* **internal:** bump cross-spawn to v7.0.6 ([#30](https://github.com/phoebe-bird/phoebe-node/issues/30)) ([51b833c](https://github.com/phoebe-bird/phoebe-node/commit/51b833ca27982a7c83a7aaecd4d0d6b0ce71dad4))
* **internal:** codegen related update ([#31](https://github.com/phoebe-bird/phoebe-node/issues/31)) ([db3b42c](https://github.com/phoebe-bird/phoebe-node/commit/db3b42cd3960bf580348422b303121799166c6d2))
* **internal:** codegen related update ([#32](https://github.com/phoebe-bird/phoebe-node/issues/32)) ([02a3452](https://github.com/phoebe-bird/phoebe-node/commit/02a34520910ef3f187b4b7c7149ecb41f9286b9b))
* **internal:** codegen related update ([#34](https://github.com/phoebe-bird/phoebe-node/issues/34)) ([b3b7e9d](https://github.com/phoebe-bird/phoebe-node/commit/b3b7e9df373c15b8ffbc358349d9c1f88e636d8a))
* **internal:** codegen related update ([#35](https://github.com/phoebe-bird/phoebe-node/issues/35)) ([946982d](https://github.com/phoebe-bird/phoebe-node/commit/946982d451aa1f3b3bac7d88dae9bb3d45784a37))
* **internal:** codegen related update ([#36](https://github.com/phoebe-bird/phoebe-node/issues/36)) ([c835d31](https://github.com/phoebe-bird/phoebe-node/commit/c835d31a3dbeb4e90b5ceae59040a96e3ccf3651))
* **internal:** codegen related update ([#37](https://github.com/phoebe-bird/phoebe-node/issues/37)) ([c61dbcc](https://github.com/phoebe-bird/phoebe-node/commit/c61dbccda5d8dde4dd74c4f829a2ed432dae8c46))
* **internal:** codegen related update ([#38](https://github.com/phoebe-bird/phoebe-node/issues/38)) ([4f7f681](https://github.com/phoebe-bird/phoebe-node/commit/4f7f681dd513d2c8a622238fc0ae9325318e105e))
* **internal:** fix some typos ([#33](https://github.com/phoebe-bird/phoebe-node/issues/33)) ([d2e73ed](https://github.com/phoebe-bird/phoebe-node/commit/d2e73ede9198b6bd5f4e486eebd622506074789b))
* **internal:** remove unnecessary getRequestClient function ([#28](https://github.com/phoebe-bird/phoebe-node/issues/28)) ([ec57150](https://github.com/phoebe-bird/phoebe-node/commit/ec57150c006abc1dec0c4e597b49bff7d93b4acb))

## 0.1.0-alpha.4 (2024-11-28)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/phoebe-bird/phoebe-node/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Bug Fixes

* **api:** get repo clean ([#18](https://github.com/phoebe-bird/phoebe-node/issues/18)) ([16b2155](https://github.com/phoebe-bird/phoebe-node/commit/16b21552163ee7c438fdf47d36311009a095e397))


### Chores

* **internal:** codegen related update ([#26](https://github.com/phoebe-bird/phoebe-node/issues/26)) ([2841ad7](https://github.com/phoebe-bird/phoebe-node/commit/2841ad7ac3c3191a7a3c27138ae360446b3e97c7))
* rebuild project due to codegen change ([#21](https://github.com/phoebe-bird/phoebe-node/issues/21)) ([176f229](https://github.com/phoebe-bird/phoebe-node/commit/176f229054970abe304849d57add9820b46fe975))
* rebuild project due to codegen change ([#22](https://github.com/phoebe-bird/phoebe-node/issues/22)) ([71b8426](https://github.com/phoebe-bird/phoebe-node/commit/71b8426dc2a5a9cdba3ab280f247cdd420cee548))
* rebuild project due to codegen change ([#23](https://github.com/phoebe-bird/phoebe-node/issues/23)) ([dc9c54b](https://github.com/phoebe-bird/phoebe-node/commit/dc9c54b95910c979822e9f02fcb7dc47f3d55426))
* remove redundant word in comment ([#25](https://github.com/phoebe-bird/phoebe-node/issues/25)) ([5a8df14](https://github.com/phoebe-bird/phoebe-node/commit/5a8df14dc92b0ae4f02a6c38bdb1650c180ee9cb))


### Documentation

* remove suggestion to use `npm` call out ([#24](https://github.com/phoebe-bird/phoebe-node/issues/24)) ([047c697](https://github.com/phoebe-bird/phoebe-node/commit/047c6975db61aba20c31375365ae48825d81f25a))

## 0.1.0-alpha.3 (2024-07-07)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/phoebe-bird/phoebe-node/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* fixup! ([da67ca1](https://github.com/phoebe-bird/phoebe-node/commit/da67ca1bd7fc9888f223a166de94a79677c14cc7))

## 0.1.0-alpha.2 (2024-07-07)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/phoebe-bird/phoebe-node/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **docs:** update contact email ([#14](https://github.com/phoebe-bird/phoebe-node/issues/14)) ([c838c46](https://github.com/phoebe-bird/phoebe-node/commit/c838c46b7071a3850631eefa0cc3b292f8db4c34))


### Chores

* update SDK settings ([#12](https://github.com/phoebe-bird/phoebe-node/issues/12)) ([e326c95](https://github.com/phoebe-bird/phoebe-node/commit/e326c958c5a0cec9749090f568eebed9f5404b97))
* update SDK settings ([#15](https://github.com/phoebe-bird/phoebe-node/issues/15)) ([dfb46ae](https://github.com/phoebe-bird/phoebe-node/commit/dfb46aefae04c7d35c60b08ee741c37c0eba0316))

## 0.1.0-alpha.1 (2024-07-05)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/phoebe-bird/phoebe-node/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** manual updates ([a4358c5](https://github.com/phoebe-bird/phoebe-node/commit/a4358c526ce3d1a1cfce8ee6df66ab2a3fc5303d))
* **api:** manual updates ([d3d8906](https://github.com/phoebe-bird/phoebe-node/commit/d3d8906a61ea8a6c5a67df96d47f8d9a81353faf))
* **api:** manual updates ([463edec](https://github.com/phoebe-bird/phoebe-node/commit/463edec18cfce28001f2c3f736ef5bc0c4db624c))
* **api:** manual updates ([e0996d4](https://github.com/phoebe-bird/phoebe-node/commit/e0996d4e5759db11616e434f91cc1edbc7df8403))
* **api:** manual updates ([0fea526](https://github.com/phoebe-bird/phoebe-node/commit/0fea5261680e953baf2d75965d7c4838bf4c8f9c))
* **api:** manual updates ([#2](https://github.com/phoebe-bird/phoebe-node/issues/2)) ([aae71cb](https://github.com/phoebe-bird/phoebe-node/commit/aae71cb879f0963c5832bfd7d92bbf3f7b431cab))
* **api:** manual updates ([#6](https://github.com/phoebe-bird/phoebe-node/issues/6)) ([efec863](https://github.com/phoebe-bird/phoebe-node/commit/efec863e78c6034c6ddd0291a01c5c68c3604e01))
* **api:** manual updates ([#8](https://github.com/phoebe-bird/phoebe-node/issues/8)) ([01e4556](https://github.com/phoebe-bird/phoebe-node/commit/01e4556d010e633ac565f900e6c0220a000025f3))


### Chores

* update SDK settings ([f0438a8](https://github.com/phoebe-bird/phoebe-node/commit/f0438a8438b675b17588f54c6e3f4d36ba8a903e))
* update SDK settings ([81fbc64](https://github.com/phoebe-bird/phoebe-node/commit/81fbc64449e1453b3b6810e9fb3b9d50b6571148))
* update SDK settings ([e826835](https://github.com/phoebe-bird/phoebe-node/commit/e826835d8bca196f40da3fb004c84cf10ef74cb8))
* update SDK settings ([#4](https://github.com/phoebe-bird/phoebe-node/issues/4)) ([bcada40](https://github.com/phoebe-bird/phoebe-node/commit/bcada402d4349e92ff329a84224a9cc4a1f0a155))
* update SDK settings ([#7](https://github.com/phoebe-bird/phoebe-node/issues/7)) ([1bc4bfe](https://github.com/phoebe-bird/phoebe-node/commit/1bc4bfe4812d298cb959622eb21625eaf279accc))
