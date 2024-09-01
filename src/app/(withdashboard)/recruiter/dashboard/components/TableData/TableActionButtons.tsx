import { TJob } from "@/types";
import { Button, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

type TProps = {
  job: TJob;
};

const TableActionButtons = ({ job }: TProps) => {
  return (
    <div className="relative flex items-center gap-x-6">
      <Tooltip content="Details">
        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
          <Button size="md" isIconOnly>
            <Link href={`/recruiter/dashboard/job_details/${job._id}`}>
              <FaRegEye className="text-lg" />
            </Link>
          </Button>
        </span>
      </Tooltip>
      <Tooltip content="Edit user">
        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
          <Button size="md" isIconOnly>
            <AiOutlineEdit className="text-lg" />
          </Button>
        </span>
      </Tooltip>
      <Tooltip color="danger" content="Delete user">
        <span className="text-lg text-danger cursor-pointer active:opacity-50">
          <Button size="md" isIconOnly color="danger">
            <RiDeleteBin5Line className="text-lg" />
          </Button>
        </span>
      </Tooltip>
    </div>
  );
};

export default TableActionButtons;
