# Estate Dao Asset Canister

Repository containing the frontend of the estatedao.org DApp.

---

### To Verify frontend build

To get the hash for the `webclient` canister:

- Get the canister ID of the `webclient` from [`canister_ids.json`](https://github.com/estate-dao/estate-nft-marketplace/blob/main/canister_ids.json).
- Get hash using the DFX SDK by running: `dfx canister info <canister-id> --network=ic`.

  (`<canister-id>` for `webclient` is [`bpnbm-4iaaa-aaaam-acxha-cai`](https://github.com/Estate-DAO/estate-nft-marketplace/blob/main/canister_ids.json))

- The output of the above command should contain `Module hash` followed up with the hash value. Example output:

  ```
  $ > dfx canister info wbdy5-yyaaa-aaaap-abysq-cai --network=ic

  Module hash: 0x32e92f1190d8321e97f8d8f3e793019e4fd2812bfc595345d46d2c23f74c1ab5
  ```

To get the hash for `webclient` canister deployment:

- Go to [Github actions deployment runs](https://github.com/Estate-DAO/estate-nft-marketplace/blob/main/.github/workflows/webclient-deploy.yml)
- Open the latest succesful run. ([Click to see an example run](https://github.com/Estate-DAO/estate-nft-marketplace/actions/runs/8388592221/))
- Go to `web-client-deploy-dapp` job. ([Click to see an example job](https://github.com/Estate-DAO/estate-nft-marketplace/actions/runs/8388592221/job/22973101835))
- Open `dfx deploy webclient --network ic --no-wallet` step. You should find the `Module hash` in this step. This value should match the value you got locally. ([Click to see an example step](https://github.com/Estate-DAO/estate-nft-marketplace/actions/runs/8388592221/job/22973101835#step:9:11))

---
