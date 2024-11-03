type TShowFollowingAndFollowers = {
  user: any;
};

const ShowFollowingAndFollowers: React.FC<TShowFollowingAndFollowers> = ({
  user,
}) => {
  console.log(user);

  return (
    <div>
      <h2>Welcome to the ShowFollowingAndFollowers page</h2>
    </div>
  );
};

export default ShowFollowingAndFollowers;
