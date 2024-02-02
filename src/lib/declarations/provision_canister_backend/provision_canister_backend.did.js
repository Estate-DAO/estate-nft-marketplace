export const idlFactory = ({ IDL }) => {
  const CanisterIds = IDL.Record({
    'minter_canister' : IDL.Principal,
    'asset_canister' : IDL.Principal,
  });
  const Result = IDL.Variant({ 'Ok' : CanisterIds, 'Err' : IDL.Text });
  const Result_1 = IDL.Variant({ 'Ok' : IDL.Principal, 'Err' : IDL.Text });
  const Result_2 = IDL.Variant({
    'Ok' : IDL.Vec(IDL.Principal),
    'Err' : IDL.Text,
  });
  const Result_5 = IDL.Variant({ 'Ok' : IDL.Text, 'Err' : IDL.Text });
  return IDL.Service({
    'all_canister_create' : IDL.Func([IDL.Text, IDL.Text], [Result], []),
    'create_new_canister' : IDL.Func([], [Result_1], []),
    'filter_status' : IDL.Func([], [Result_2], []),
    'get_all_minter_canisters' : IDL.Func([], [Result_2], []),
    'grant_commit_permission' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [IDL.Text],
        [],
      ),
    'init_collection' : IDL.Func([IDL.Principal], [Result_5], []),
    'mint_NFT' : IDL.Func([IDL.Principal, IDL.Text, IDL.Text], [Result_5], []),
    'revoke_commit_permission' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [IDL.Text],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
