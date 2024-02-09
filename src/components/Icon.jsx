import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faPlus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const Icon = () => {
  const [liked, setLiked] = React.useState(false);
  const [disliked, setDisliked] = React.useState(false);
  const [added, setAdded] = React.useState(false);
  const [favorited, setFavorited] = React.useState(false);

  const handleLike = () => {
    setLiked(!liked);
    // Your like logic here
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    // Your dislike logic here
  };

  const handleAdd = () => {
    setAdded(!added);
    // Your add to list logic here
  };

  const handleFavorite = () => {
    setFavorited(!favorited);
    // Your favorite logic here
  };

  const iconsData = [
    {
      iconName: faThumbsUp,
      iconState: liked,
      onClickHandler: handleLike,
    },
    {
      iconName: faThumbsDown,
      iconState: disliked,
      onClickHandler: handleDislike,
    },
    {
      iconName: faPlus,
      iconState: added,
      onClickHandler: handleAdd,
    },
    {
      iconName: faHeart,
      iconState: favorited,
      onClickHandler: handleFavorite,
    },
  ];

  return (
    <>
      {iconsData.map((icon) => {
        return (
          <div className="text-xl w-9 h-9 lg:text-2xl lg:w-12 lg:h-12 bg-blue-950 bg-opacity-80 flex items-center justify-center rounded-full ">
            <button onClick={icon.onClickHandler}>
              <FontAwesomeIcon
                icon={icon.iconName}
                color={icon.iconState ? "#ab5462" : "#e0bcbc"}
              />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Icon;
