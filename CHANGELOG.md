# Changelog

## 0.1.0-alpha.1 (2024-06-10)

Full Changelog: [v0.0.1-alpha.1...v0.1.0-alpha.1](https://github.com/stainless-api/github-node/compare/v0.0.1-alpha.1...v0.1.0-alpha.1)

### Features

* support `application/octet-stream` request bodies ([#42](https://github.com/stainless-api/github-node/issues/42)) ([ac91c00](https://github.com/stainless-api/github-node/commit/ac91c00fa441d1289c4c69b78108a671469081c6))


### Bug Fixes

* allow git imports for pnpm ([#39](https://github.com/stainless-api/github-node/issues/39)) ([f159039](https://github.com/stainless-api/github-node/commit/f159039d5c68a4a468a305763563ded2c446014e))
* **client:** correctly send deno version header ([0fb54d4](https://github.com/stainless-api/github-node/commit/0fb54d459dd260beb7d4d872655bbbc3949fe375))
* **docs:** remove trailing space ([52dc8fa](https://github.com/stainless-api/github-node/commit/52dc8fa1e39354ae46c22a15a7ff222618d6b9bf))
* handle process.env being undefined in debug func ([2660a5e](https://github.com/stainless-api/github-node/commit/2660a5ea83a6081173e265040b2884cd29e7c7aa))
* **internal:** make toFile use input file's options ([fb891f4](https://github.com/stainless-api/github-node/commit/fb891f4c37b13175396b5d5265f541f74517dd01))
* **package:** revert recent client file change ([#33](https://github.com/stainless-api/github-node/issues/33)) ([1b95f83](https://github.com/stainless-api/github-node/commit/1b95f83fa296426cf2992207ffbb469b198d4b60))
* **types:** correct index signature type ([#37](https://github.com/stainless-api/github-node/issues/37)) ([0a639b5](https://github.com/stainless-api/github-node/commit/0a639b5a6f5be2e9d1dfe79008a072f71454c30e))


### Chores

* **ci:** update actions/setup-node action to v4 ([#1](https://github.com/stainless-api/github-node/issues/1)) ([f8494bd](https://github.com/stainless-api/github-node/commit/f8494bd21c114252e0a3f78c8b0a94663929d686))
* **deps:** bump yarn to v1.22.22 ([#20](https://github.com/stainless-api/github-node/issues/20)) ([ed43d52](https://github.com/stainless-api/github-node/commit/ed43d52d2017c47154591e18409c3f3244adec9b))
* **deps:** remove unused dependency digest-fetch ([#19](https://github.com/stainless-api/github-node/issues/19)) ([0e1144f](https://github.com/stainless-api/github-node/commit/0e1144fdce05b1e00dd25009fbca19ecb9507531))
* **docs:** add SECURITY.md ([#35](https://github.com/stainless-api/github-node/issues/35)) ([409fda8](https://github.com/stainless-api/github-node/commit/409fda827c8152016e8fdb8d6120ea326983af84))
* **docs:** mention install from git repo ([#6](https://github.com/stainless-api/github-node/issues/6)) ([2957961](https://github.com/stainless-api/github-node/commit/29579614bb57649457787d9e8313c73eb5af2ef8))
* fix error handler in readme ([#7](https://github.com/stainless-api/github-node/issues/7)) ([77a6afa](https://github.com/stainless-api/github-node/commit/77a6afa70d0768ed7979333d88277f60f58cfad4))
* initial setup ([19c5e75](https://github.com/stainless-api/github-node/commit/19c5e75e2ec529573afffcd01cd6d1e95743e1dc))
* **internal:** add link to openapi spec ([#29](https://github.com/stainless-api/github-node/issues/29)) ([a002745](https://github.com/stainless-api/github-node/commit/a0027457c02fd91bf37b7f6aec2b813cdc4fbbf1))
* **internal:** add scripts/test and scripts/mock ([#27](https://github.com/stainless-api/github-node/issues/27)) ([bce3947](https://github.com/stainless-api/github-node/commit/bce3947cb2d7af24a67345f60e587a02842c10d0))
* **internal:** add scripts/test, scripts/mock and add ci job ([#30](https://github.com/stainless-api/github-node/issues/30)) ([8ad55ee](https://github.com/stainless-api/github-node/commit/8ad55ee407b7f7d8788054944050936280cf3fab))
* **internal:** add slightly better logging to scripts ([#36](https://github.com/stainless-api/github-node/issues/36)) ([c794dad](https://github.com/stainless-api/github-node/commit/c794dad9290d3fc2e694bab579f56453c39722a7))
* **internal:** formatting ([#23](https://github.com/stainless-api/github-node/issues/23)) ([4e118af](https://github.com/stainless-api/github-node/commit/4e118afef39919589a56994da1d3e64705d4ddfe))
* **internal:** forward arguments in scripts/test ([#31](https://github.com/stainless-api/github-node/issues/31)) ([bd5641e](https://github.com/stainless-api/github-node/commit/bd5641ee790a8e56078679f0df9303df1d0fc70c))
* **internal:** move client class to separate file ([#32](https://github.com/stainless-api/github-node/issues/32)) ([dbc8f5d](https://github.com/stainless-api/github-node/commit/dbc8f5d00ab05418d897cbc992ffe5d3a49ceb0d))
* **internal:** refactor scripts ([#28](https://github.com/stainless-api/github-node/issues/28)) ([3bb249f](https://github.com/stainless-api/github-node/commit/3bb249ff6a133c0645fb9bcf3dced2d9a94267f1))
* **internal:** update deps ([#3](https://github.com/stainless-api/github-node/issues/3)) ([1b2281a](https://github.com/stainless-api/github-node/commit/1b2281a625121c7f2fe073c921860438945b0b74))
* **internal:** update generated pragma comment ([a34bf1a](https://github.com/stainless-api/github-node/commit/a34bf1af0179de0ce26cdc5ce884ce63de8c62a7))
* **internal:** update gitignore ([#21](https://github.com/stainless-api/github-node/issues/21)) ([794dbd8](https://github.com/stainless-api/github-node/commit/794dbd841eaad0cfae1f41c465c4753641a4e0f3))
* **internal:** use @swc/jest for running tests ([#25](https://github.com/stainless-api/github-node/issues/25)) ([40bf580](https://github.com/stainless-api/github-node/commit/40bf5804683e80b6db3073293ed0276b02a3b363))
* **internal:** use actions/checkout@v4 for codeflow ([#26](https://github.com/stainless-api/github-node/issues/26)) ([dc0bfa5](https://github.com/stainless-api/github-node/commit/dc0bfa53b23753f21e51b6bd5af76264fa4bc9bd))


### Documentation

* **contributing:** improve wording ([#4](https://github.com/stainless-api/github-node/issues/4)) ([e67f727](https://github.com/stainless-api/github-node/commit/e67f727a07d39fd80f68d0d207eeabed7ee1f575))
* fix typo in CONTRIBUTING.md ([badab98](https://github.com/stainless-api/github-node/commit/badab982e1f8658366ac35e1f0ef0cb887d75794))
* **readme:** add bundle size badge ([#38](https://github.com/stainless-api/github-node/issues/38)) ([b984ffe](https://github.com/stainless-api/github-node/commit/b984ffe7ac5c65a4331469a4813176debb21bdd5))
* **readme:** change undocumented params wording ([#18](https://github.com/stainless-api/github-node/issues/18)) ([8fecb23](https://github.com/stainless-api/github-node/commit/8fecb23706ae75cee77bac336c8e47472a1c85c3))
* **readme:** consistent use of sentence case in headings ([fa004ab](https://github.com/stainless-api/github-node/commit/fa004abd8e254d39828d5b8fc0ff6de261554bf1))
* **readme:** document how to make undocumented requests ([cfc0873](https://github.com/stainless-api/github-node/commit/cfc0873483c4bdeb3ee42d3bd39249ff9a12754a))
* **readme:** fix https proxy example ([#8](https://github.com/stainless-api/github-node/issues/8)) ([7ffc9be](https://github.com/stainless-api/github-node/commit/7ffc9be6e08044dfe7be1fcaad22ac6bc355bcac))
* **readme:** fix typo in custom fetch implementation ([#5](https://github.com/stainless-api/github-node/issues/5)) ([9c12e5a](https://github.com/stainless-api/github-node/commit/9c12e5a1cb0da40b4df677ea0fcf8f3c5d48a1d9))
* remove extraneous --save and yarn install instructions ([ce240ab](https://github.com/stainless-api/github-node/commit/ce240abf3dec3d0162df3a9553d6f0431086ee60))


### Build System

* configure UTF-8 locale in devcontainer ([#24](https://github.com/stainless-api/github-node/issues/24)) ([417c203](https://github.com/stainless-api/github-node/commit/417c203c011397f08fa7b0553b2a70f4f2075b15))

## 0.0.1-alpha.1 (2024-04-02)

Full Changelog: [v0.0.1-alpha.0...v0.0.1-alpha.1](https://github.com/stainless-api/github-node/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)

### Bug Fixes

* **client:** correctly send deno version header ([#17](https://github.com/stainless-api/github-node/issues/17)) ([2d3db1a](https://github.com/stainless-api/github-node/commit/2d3db1a6ff2200b0f07f5f0a9f947c3a1379a38d))
* handle process.env being undefined in debug func ([#15](https://github.com/stainless-api/github-node/issues/15)) ([34a2f8d](https://github.com/stainless-api/github-node/commit/34a2f8db931b47ba6d147b909bde7042de492ecb))
* **internal:** make toFile use input file's options ([#12](https://github.com/stainless-api/github-node/issues/12)) ([3207dda](https://github.com/stainless-api/github-node/commit/3207ddaa57bc2661499c8565fdf7235ea026428c))


### Chores

* **ci:** update actions/setup-node action to v4 ([#1](https://github.com/stainless-api/github-node/issues/1)) ([f8494bd](https://github.com/stainless-api/github-node/commit/f8494bd21c114252e0a3f78c8b0a94663929d686))
* **deps:** bump yarn to v1.22.22 ([#20](https://github.com/stainless-api/github-node/issues/20)) ([14d610d](https://github.com/stainless-api/github-node/commit/14d610dcac6855636d9d729c65c31ab0b7c212e8))
* **deps:** remove unused dependency digest-fetch ([#19](https://github.com/stainless-api/github-node/issues/19)) ([f42c77a](https://github.com/stainless-api/github-node/commit/f42c77a88a30e565c0f2f595ca0e0b0d45c76758))
* **docs:** mention install from git repo ([#6](https://github.com/stainless-api/github-node/issues/6)) ([2957961](https://github.com/stainless-api/github-node/commit/29579614bb57649457787d9e8313c73eb5af2ef8))
* fix error handler in readme ([#7](https://github.com/stainless-api/github-node/issues/7)) ([77a6afa](https://github.com/stainless-api/github-node/commit/77a6afa70d0768ed7979333d88277f60f58cfad4))
* initial setup ([19c5e75](https://github.com/stainless-api/github-node/commit/19c5e75e2ec529573afffcd01cd6d1e95743e1dc))
* **internal:** update deps ([#3](https://github.com/stainless-api/github-node/issues/3)) ([1b2281a](https://github.com/stainless-api/github-node/commit/1b2281a625121c7f2fe073c921860438945b0b74))
* **internal:** update generated pragma comment ([#11](https://github.com/stainless-api/github-node/issues/11)) ([122bb7e](https://github.com/stainless-api/github-node/commit/122bb7ebd70b58dd2fd66eaa0733d394565564dd))


### Documentation

* **contributing:** improve wording ([#4](https://github.com/stainless-api/github-node/issues/4)) ([e67f727](https://github.com/stainless-api/github-node/commit/e67f727a07d39fd80f68d0d207eeabed7ee1f575))
* fix typo in CONTRIBUTING.md ([#10](https://github.com/stainless-api/github-node/issues/10)) ([47e47a6](https://github.com/stainless-api/github-node/commit/47e47a6f7ceb43505ab3cbae82eeaa065e1e9b74))
* **readme:** change undocumented params wording ([#18](https://github.com/stainless-api/github-node/issues/18)) ([36d4a70](https://github.com/stainless-api/github-node/commit/36d4a70cadb7eb98e56675d70f18ddc372fba7e5))
* **readme:** consistent use of sentence case in headings ([#13](https://github.com/stainless-api/github-node/issues/13)) ([7e4e56a](https://github.com/stainless-api/github-node/commit/7e4e56aab796b4fc8346319ac97ffb390605e782))
* **readme:** document how to make undocumented requests ([#14](https://github.com/stainless-api/github-node/issues/14)) ([1633fa9](https://github.com/stainless-api/github-node/commit/1633fa959d8b96abb35c274e4ae5e0f0f3a9be7b))
* **readme:** fix https proxy example ([#8](https://github.com/stainless-api/github-node/issues/8)) ([7ffc9be](https://github.com/stainless-api/github-node/commit/7ffc9be6e08044dfe7be1fcaad22ac6bc355bcac))
* **readme:** fix typo in custom fetch implementation ([#5](https://github.com/stainless-api/github-node/issues/5)) ([9c12e5a](https://github.com/stainless-api/github-node/commit/9c12e5a1cb0da40b4df677ea0fcf8f3c5d48a1d9))
* **readme:** update package description ([#16](https://github.com/stainless-api/github-node/issues/16)) ([7e45500](https://github.com/stainless-api/github-node/commit/7e45500989a3fe7e4018d41095612b070af3c93c))
* remove extraneous --save and yarn install instructions ([#9](https://github.com/stainless-api/github-node/issues/9)) ([f67a846](https://github.com/stainless-api/github-node/commit/f67a8460f3e3daadb2e00966f062e2cad19ec725))
