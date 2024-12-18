"use client";

import { selectUser } from "@/app/(withdashboard)/actions/selectUser";
import Spinners from "@/app/components/Shared/Spinners";
import { useGetSingleJobQuery } from "@/redux/api/Features/Job/jobApi";
import { useSelectCandidateMutation } from "@/redux/api/Features/JobApply/JobApply";
import PhotoViewer from "@/utils/PhotoViewer";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

const JobDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { data, isLoading } = useGetSingleJobQuery(id);

  if (isLoading) {
    return <Spinners />;
  }

  const job = data?.data;

  const handleSelectJob = async (userId: string) => {
    const selectInformation = {
      jobId: id,
      userId: userId,
    };

    try {
      const res = await selectUser(selectInformation);

      if (res.data) {
        toast.success("this user is selected in this role");
        router.refresh();
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {job.length > 0 ? (
        <div className="flex flex-col gap-3 h-screen">
          <Table
            selectionMode="single"
            aria-label="Example static collection table"
          >
            <TableHeader>
              <TableColumn>User Information</TableColumn>
              <TableColumn>Others Info</TableColumn>
              <TableColumn>Resume</TableColumn>
            </TableHeader>
            <TableBody>
              {job?.map((item: any, i: number) => (
                <TableRow key={i}>
                  <TableCell className="py-3">
                    <div className="flex items-center gap-x-2">
                      <div>
                        <PhotoViewer
                          src={item?.candidateId?.photo}
                          className="size-16 rounded-full"
                        />
                      </div>
                      <div className="">
                        <Link
                          className="hover:underline"
                          href={`/user_profile/${item?.candidateId?._id}`}
                        >
                          <p className="text-lg font-medium">
                            {item?.candidateName}
                          </p>
                        </Link>
                        <p className="">{item?.candidateEmail}</p>
                        <p className="">
                          {item?.candidateId?.info?.city}{" "}
                          {item?.candidateId?.info?.country}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="">
                      <p>Notice Period: {item?.noticePeriod}</p>
                      <p>Experience: {item?.experience}</p>
                      <p>Expected Salary: {item?.expectedSalary}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-x-2">
                      <Button color="primary">
                        <a href={item?.resume} target="_blank">
                          Resume
                        </a>
                      </Button>
                      <Button
                        onClick={() => handleSelectJob(item?.candidateId?._id)}
                        color="success"
                      >
                        {item?.jobId?.selectedCandidate ===
                        item?.candidateId?._id
                          ? "You are selected"
                          : "Select"}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <>
          <p className="h-screen flex items-center justify-center text-center font-medium text-xl">
            0 candidate Applied!!{" "}
          </p>
        </>
      )}
    </>
  );
};

export default JobDetailsPage;
