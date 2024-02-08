export const idlFactory = ({ IDL }) => {
  const CanisterIds = IDL.Record({
    'minter_canister' : IDL.Principal,
    'asset_canister' : IDL.Principal,
  });
  const Result = IDL.Variant({ 'Ok' : CanisterIds, 'Err' : IDL.Text });
  const Status = IDL.Variant({
    'Ended' : IDL.Null,
    'Live' : IDL.Null,
    'Draft' : IDL.Null,
    'Upcoming' : IDL.Null,
  });
  const Result_2 = IDL.Variant({
    'Ok' : IDL.Vec(IDL.Principal),
    'Err' : IDL.Text,
  });
  const Result_6 = IDL.Variant({
    'Ok' : IDL.Vec(CanisterIds),
    'Err' : IDL.Text,
  });
  const Result_5 = IDL.Variant({ 'Ok' : IDL.Text, 'Err' : IDL.Text });
  return IDL.Service({
    'all_canister_create' : IDL.Func([IDL.Text, IDL.Text], [Result], []),
    'filter_status' : IDL.Func([Status], [Result_2], []),
    'get_all_canisters' : IDL.Func([], [Result_6], ['query']),
    'get_all_minter_canisters' : IDL.Func([], [Result_2], []),
    'grant_commit_permission' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [Result_5],
        [],
      ),
    'revoke_commit_permission' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [Result_5],
        [],
      ),
    'test_auth_user' : IDL.Func([], [Result_2], []),
  });
};
export const init = ({ IDL }) => { return []; };
