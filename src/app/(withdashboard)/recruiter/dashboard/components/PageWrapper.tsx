"use client";

import { useGetMyJobsQuery } from "@/redux/api/Features/Job/jobApi";
import {
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { columns } from "./TableData/tableColumns";
import { TJob } from "@/types";
import Spinners from "@/app/components/Shared/Spinners";
import Image from "next/image";
import TableActionButtons from "./TableData/TableActionButtons";

const PageWrapper = () => {
  const { data: jobs, isLoading } = useGetMyJobsQuery({});

  if (isLoading) {
    return <Spinners />;
  }

  return (
    <Table isStriped aria-label="Example static collection table">
      <TableHeader>
        {columns.map((item: string, i: number) => (
          <TableColumn key={i}>{item}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {jobs?.map((item: TJob, i: number) => (
          <TableRow key={i} className="border-b">
            <TableCell className="py-4">
              <div className="flex items-center gap-x-2">
                <Image
                  src={item?.companyLogo}
                  alt=""
                  width={500}
                  height={200}
                  className="size-16 rounded-full"
                />
                <div>
                  <p className="font-medium text-lg">{item?.jobTitle}</p>
                  <a
                    className="text-blue-600 hover:underline"
                    href={item?.website}
                    target="_blank"
                  >
                    {item?.website}
                  </a>
                  <p>{item.location}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <p>{item?.companyName}</p>
              <p>{item?.candidate?.length} Candidate apply in this job</p>
            </TableCell>
            <TableCell>
              <Button size="sm" className="py-0">
                {item?.workPlaceType}
              </Button>
            </TableCell>
            <TableCell>
              <Button size="sm" className="py-0">
                {item?.jobType}
              </Button>
            </TableCell>
            <TableCell>
              <TableActionButtons job={item} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PageWrapper;
