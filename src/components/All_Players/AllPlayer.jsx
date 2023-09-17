import { useLoaderData } from "react-router-dom";
import Player from "./Player/Player";

const AllPlayer = () => {
  const Players = useLoaderData();
  //   console.log(Players);

  return (
    <div>
      <h2>All Player: {Players.length}</h2>
      <div>
        {Players.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default AllPlayer;
