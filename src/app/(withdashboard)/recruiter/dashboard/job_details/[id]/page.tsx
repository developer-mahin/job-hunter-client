"use client";

import Spinners from "@/app/components/Shared/Spinners";
import { useGetSingleJobQuery } from "@/redux/api/Features/Job/jobApi";
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
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const JobDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: job, isLoading } = useGetSingleJobQuery(id);

  if (isLoading) {
    return <Spinners />;
  }

  return (
    <div className="flex flex-col gap-3">
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
                      className="size-20 rounded-full"
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
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-x-4">
                    <div>
                      <PhotoViewer
                        src={item?.jobId?.companyLogo}
                        className="size-20 rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">
                        Job Title: {item?.jobId?.jobTitle}
                      </p>
                      <p>Company Name: {item?.jobId?.companyName}</p>
                    </div>
                  </div>
                  <div className="">
                    <p>Notice Period: {item?.noticePeriod}</p>
                    <p>Experience: {item?.experience}</p>
                    <p>Expected Salary: {item?.expectedSalary}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-x-2">
                  <Button color="primary">
                    <a href={item?.resume} target="_blank">
                      Resume
                    </a>
                  </Button>
                  <Button color="success">Select</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default JobDetailsPage;
