import PropTypes from "prop-types";

const Player = ({ player }) => {
  const { নাম, office, id, play_role, jersy_name } = player;

  console.log(player);
  return (
    <div className="m-10 grid grid-cols-6 border-2 p-5 font-semibold">
      <h2>{id}</h2>
      <h2>{নাম}</h2>
      <h3>{office}</h3>
      <p>{play_role}</p>
      <p>{jersy_name}</p>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object,
};

export default Player;
