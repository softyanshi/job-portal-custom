import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";

const shortlistingStatus = ["Accepted", "Rejected"];
const ApplicantsTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>List of your recent applied Users</TableCaption>
        <TableRow>
          <TableHead>Fullname</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead>Applied On</TableHead>
          <TableHead>Resume</TableHead>
          <TableHead>Job Title</TableHead> 
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
        <TableBody>
          <tr>
            <TableCell>Fullname</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Applied On</TableCell>
            <TableCell>Resume</TableCell>
            <TableCell>Job Title</TableCell> 
            <TableCell className="text-right">
              <Popover>
                <PopoverTrigger>
                  <MoreHorizontal />
                </PopoverTrigger>
                <PopoverContent className="w-32">
                  {shortlistingStatus.map((status, index) => {
                    return (
                      <div key={index}>
                        <input
                          type="radio"
                          name="shortlistingStatus"
                          value={status}
                        />{" "}
                        {status}
                      </div>
                    );
                  })}
                </PopoverContent>
              </Popover>
            </TableCell>
          </tr>
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
