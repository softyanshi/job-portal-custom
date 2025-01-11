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
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";

const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>Your recent registed Companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableCell>
            <Avatar>
              <AvatarImage
                src="https://yt3.googleusercontent.com/Kbk6fvLQH3X7q6zGb7I-TLDH_2FFA6WZXoKZty5kjlm7nqHxUcQVgv420shK0Z_qN4sp841RVcY=s900-c-k-c0x00ffffff-no-rj"
                alt="company logo"
              />
            </Avatar>
          </TableCell>
          <TableCell>Sunfire Sensei</TableCell>
          <TableCell>01-01-2025</TableCell>
          <TableCell className="text-right cursor-pointer">
            <Popover>
              <PopoverTrigger>
                {" "}
                <MoreHorizontal />{" "}
              </PopoverTrigger>
              <PopoverContent className="w-32">
                <div className="flex items-center gap-2 w-fit cursor-pointer">
                  <Edit2 className="w-4"/>
                  <span>Edit</span>
                </div>
              </PopoverContent>
            </Popover>
          </TableCell>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
