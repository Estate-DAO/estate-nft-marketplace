# Estate Dao Asset Canister

Repository containing the frontend of the estatedao.org DApp.

---

### To Verify frontend build

To get the hash for the `webclient` canister:

- Get the canister ID of the `webclient` from [`canister_ids.json`](https://github.com/estate-dao/estate-nft-marketplace/blob/main/canister_ids.json).
- Get hash using the DFX SDK by running: `dfx canister info <canister-id> --network=ic`.

  (`<canister-id>` for `webclient` is [`wbdy5-yyaaa-aaaap-abysq-cai`](https://github.com/Estate-DAO/estate-nft-marketplace/blob/main/canister_ids.json))

- The output of the above command should contain `Module hash` followed up with the hash value. Example output:

  ```
  $ > dfx canister info wbdy5-yyaaa-aaaap-abysq-cai --network=ic

  Controllers: kgpxk-5owrh-s2qov-h23wc-43n2n-dtvre-ltorw-2xigd-yrl74-pl3b5-2qe rvc55-bqaaa-aaaap-abyba-cai v3mpp-bismc-wjug7-6t6jc-iqu2b-64xh3-rpwld-sw5e2-fsecm-6lfss-aqe
  Module hash: 0x3c86d912ead6de7133b9f787df4ca9feee07bea8835d3ed594b47ee89e6cb730
  ```

To get the hash for `webclient` canister deployment:

- Go to [Github actions deployment runs](https://github.com/Estate-DAO/estate-nft-marketplace/blob/main/.github/workflows/webclient-deploy.yml)
- Open the latest succesful run. ([Click to see an example run](https://github.com/Estate-DAO/estate-nft-marketplace/actions/runs/8388592221/))
- Go to `web-client-deploy-dapp` job. ([Click to see an example job](https://github.com/Estate-DAO/estate-nft-marketplace/actions/runs/8388592221/job/22973101835))
- Open `dfx deploy webclient --network ic --no-wallet` step. You should find the `Module hash` in this step. This value should match the value you got locally. ([Click to see an example step](https://github.com/Estate-DAO/estate-nft-marketplace/actions/runs/8388592221/job/22973101835#step:9:11))

---
