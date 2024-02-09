import config from "../config/config";
import avatar from "../assets/avatar.png";

const Cast = ({ data }) => {
  const { imageUrl } = config;

  return (
    <div className="cast">
      <div className="sectionHeading text-3xl font-bold mt-5 mb-5">
        Top Cast
      </div>
      <div className="flex overflow-hidden overflow-x-scroll py-5 rounded-md mt-5">
        <div className="flex gap-5">
          {data?.map((item) => {
            let imgUrl = item.profile_path
              ? imageUrl + item.profile_path
              : avatar;
            return (
              <div key={item.id} className=" flex-col shadow-lg rounded-md">
                <div
                  className={`profileImg w-32 h-36 bg-slate-300 rounded-md `}
                >
                  <img
                    src={imgUrl}
                    alt="Cast profile image"
                    className={`w-full h-full object-cover object-center rounded-md`}
                  />
                </div>
                <div className="name text-black font-bold">{item.name}</div>
                <div className="character w-full text-black">
                  {item.character}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cast;
