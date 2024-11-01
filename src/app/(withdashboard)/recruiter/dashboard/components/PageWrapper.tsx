"use client";

import PaginationSoluation from "@/app/components/Shared/PaginationSoluation";
import Spinners from "@/app/components/Shared/Spinners";
import { useGetMyJobsQuery } from "@/redux/api/Features/Job/jobApi";
import { TJob } from "@/types";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import TableActionButtons from "./TableData/TableActionButtons";
import { columns } from "./TableData/tableColumns";

const PageWrapper = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(6);
  const { data: jobs, isLoading } = useGetMyJobsQuery([
    {
      name: "limit",
      value: limit,
    },
    {
      name: "page",
      value: currentPage,
    },
    {
      name: "searchTerm",
      value: searchTerm,
    },
  ]);

  if (isLoading) {
    return <Spinners />;
  }

  return (
    <div>
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

      <div>
        <PaginationSoluation
          data={jobs?.length}
          currentPage={currentPage}
          setLimit={setLimit}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default PageWrapper;
