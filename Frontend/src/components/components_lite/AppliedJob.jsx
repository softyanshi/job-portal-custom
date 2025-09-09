import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { useSelector } from "react-redux";

const AppliedJob = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);
  return (
    <div className="overflow-x-auto">
      <Table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <TableCaption className="text-gray-600 dark:text-gray-400">Recent Applied Jobs</TableCaption>
        <TableHeader className="bg-gray-100 dark:bg-gray-800" >
          <TableRow>
            <TableHead  className="text-gray-900 dark:text-gray-100">Date</TableHead>
            <TableHead  className="text-gray-900 dark:text-gray-100">Job Title</TableHead>
            <TableHead  className="text-gray-900 dark:text-gray-100">Company</TableHead>
            <TableHead className="text-right text-gray-900 dark:text-gray-100">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length <= 0 ? (
             <TableRow>
              <TableCell colSpan={4} className="text-center py-4 text-gray-500 dark:text-gray-400">
                You have not applied to any job yet.
              </TableCell>
            </TableRow>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob._id}  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <TableCell className="text-gray-700 dark:text-gray-300">{appliedJob?.createdAt.split("T")[0]}</TableCell>
                <TableCell className="text-gray-700 dark:text-gray-300">{appliedJob.job?.title}</TableCell>
                <TableCell className="text-gray-700 dark:text-gray-300">{appliedJob.job?.company.name}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={`text-white px-2 py-1 rounded-md  ${
                      appliedJob?.status === "rejected"
                        ? "bg-red-500"
                        : appliedJob?.status === "accepted"
                        ? "bg-green-600"
                        : "bg-gray-500"
                    }`}
                  >
                    {" "}
                    {appliedJob?.status}
                  </Badge>{" "}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJob;
