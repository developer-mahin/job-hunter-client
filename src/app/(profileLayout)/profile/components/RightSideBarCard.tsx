import { AiOutlinePlus } from "react-icons/ai";

const RightSideBarCard = ({info}) => {

    const { image, name, details } = info;

  return (
    <div className="py-2">
      <div className="flex items-center gap-2">
        <div>
          <img
            src={image}
            width={60}
            height={60}
            className="object-cover"
            alt=""
          />
        </div>
        <div>
          <h6 className="m-0 font-semibold">{name}</h6>
          <div className="mt-1">
            <p className="text-sm m-0">{details}</p>
          </div>
          <div className="mt-2">
            <button className="flex items-center gap-1 border rounded-full px-3 py-1">
              <AiOutlinePlus />
              <span>Follow</span>
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default RightSideBarCard;
