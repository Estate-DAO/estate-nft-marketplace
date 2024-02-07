export const idlFactory = ({ IDL }) => {
  const CanisterIds = IDL.Record({
    'minter_canister' : IDL.Principal,
    'asset_canister' : IDL.Principal,
  });
  const Result = IDL.Variant({ 'Ok' : CanisterIds, 'Err' : IDL.Text });
  const PropDetails = IDL.Record({
    'year_built' : IDL.Opt(IDL.Nat16),
    'purchase_price' : IDL.Opt(IDL.Nat16),
    'yields' : IDL.Opt(IDL.Float32),
    'projected_rent' : IDL.Opt(IDL.Nat16),
    'min_investment' : IDL.Opt(IDL.Float32),
  });
  const Result_3 = IDL.Variant({ 'Ok' : IDL.Vec(IDL.Text), 'Err' : IDL.Text });
  const Result_1 = IDL.Variant({ 'Ok' : IDL.Principal, 'Err' : IDL.Text });
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
  return IDL.Service({
    'all_canister_create' : IDL.Func([IDL.Text, IDL.Text], [Result], []),
    'call_update_prop' : IDL.Func([IDL.Principal, PropDetails], [Result_3], []),
    'create_new_canister' : IDL.Func([], [Result_1], []),
    'filter_status' : IDL.Func([Status], [Result_2], []),
    'get_all_canisters' : IDL.Func([], [Result_6], ['query']),
    'get_all_minter_canisters' : IDL.Func([], [Result_2], []),
    'grant_commit_permission' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [IDL.Text],
        [],
      ),
    'revoke_commit_permission' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [IDL.Text],
        [],
      ),
    'test_auth_user' : IDL.Func([], [Result_2], []),
  });
};
export const init = ({ IDL }) => { return []; };
