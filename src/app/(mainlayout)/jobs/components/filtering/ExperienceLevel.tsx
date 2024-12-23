import {
  setExperienceLevel,
  setIndustry,
  setLocation,
  setWorkPlaceType,
} from "@/redux/api/Features/Job/jobSlice";
import { useAppDispatch } from "@/redux/hook";
import { Divider } from "@nextui-org/react";
import {
  countryTypes,
  industryTypes,
  jobTypes,
  workPlaceTypes,
} from "../../data/jobSelectInfoData";
import CheckBox from "./CheckBox";

const ExperienceLevel = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="my-3">
        <div className="mb-2">
          <h2 className="text-xl font-medium ">Job Types</h2>
          <Divider />
        </div>
        <CheckBox
          data={jobTypes}
          className="grid-cols-2"
          onChangeFunction={(value) => dispatch(setExperienceLevel(value))}
        />
      </div>

      <div className="my-3">
        <div className="mb-2">
          <h2 className="text-xl font-medium ">Workplace Types</h2>
          <Divider />
        </div>
        <CheckBox
          data={workPlaceTypes}
          className="grid-cols-2"
          onChangeFunction={(value) => dispatch(setWorkPlaceType(value))}
        />
      </div>

      <div className="my-3">
        <div className="mb-2">
          <h2 className="text-xl font-medium ">Industry</h2>
          <Divider />
        </div>
        <CheckBox
          data={industryTypes}
          className="lg:grid-cols-2 grid-cols-1"
          onChangeFunction={(value) => dispatch(setIndustry(value))}
        />
      </div>

      <div className="my-3">
        <div className="mb-2">
          <h2 className="text-xl font-medium ">Country (Location)</h2>
          <Divider />
        </div>
        <CheckBox
          data={countryTypes}
          className="lg:grid-cols-2 grid-cols-1"
          onChangeFunction={(value) => dispatch(setLocation(value))}
        />
      </div>
    </div>
  );
};

export default ExperienceLevel;
