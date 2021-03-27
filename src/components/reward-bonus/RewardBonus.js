import RewardItem from "../reward-item/RewardItem";

const RewardBonus = (props) => {
  const receipts = props.data;
  const state = receipts[receipts.length - 1]
  return (
    <>
      <RewardItem account={state.rewardAccount}  total={state.total} oldBonus={state.rewardAmount} />
    </>
  );
};

export default RewardBonus;
