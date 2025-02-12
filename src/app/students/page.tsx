"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Student {
  name: string;
  username: string;
  status: string;
  phone: string;
  parents: string;
  gender: string;
  birthday: string;
  address: string;
}

export default function StudentsTable() {
  const [students, setStudents] = useState<Student[]>([
    {
      name: "Jack Smith",
      username: "@student",
      status: "Inactive",
      phone: "+998 (99) 222-22-22",
      parents: "Aliev Muhammad",
      gender: "Male",
      birthday: "June 04, 1996",
      address: "Tashkent, Uzbekistan",
    },
    {
      name: "Jack Smith",
      username: "@student",
      status: "Inactive",
      phone: "+998 (99) 222-22-22",
      parents: "Aliev Muhammad",
      gender: "Male",
      birthday: "June 04, 1996",
      address: "Tashkent, Uzbekistan",
    },

    {
      name: "Jack Smith",
      username: "@student",
      status: "Inactive",
      phone: "+998 (99) 222-22-22",
      parents: "Aliev Muhammad",
      gender: "Male",
      birthday: "June 04, 1996",
      address: "Tashkent, Uzbekistan",
    },

    {
      name: "Jack Smith",
      username: "@student",
      status: "Inactive",
      phone: "+998 (99) 222-22-22",
      parents: "Aliev Muhammad",
      gender: "Male",
      birthday: "June 04, 1996",
      address: "Tashkent, Uzbekistan",
    },

    {
      name: "Jack Smith",
      username: "@student",
      status: "Inactive",
      phone: "+998 (99) 222-22-22",
      parents: "Aliev Muhammad",
      gender: "Male",
      birthday: "June 04, 1996",
      address: "Tashkent, Uzbekistan",
    },
    {
      name: "Jack Smith",
      username: "@student",
      status: "Inactive",
      phone: "+998 (99) 222-22-22",
      parents: "Aliev Muhammad",
      gender: "Male",
      birthday: "June 04, 1996",
      address: "Tashkent, Uzbekistan",
    },

    {
      name: "Jack Smith",
      username: "@student",
      status: "Inactive",
      phone: "+998 (99) 222-22-22",
      parents: "Aliev Muhammad",
      gender: "Male",
      birthday: "June 04, 1996",
      address: "Tashkent, Uzbekistan",
    },
    {
      name: "Jack Smith",
      username: "@student",
      status: "Inactive",
      phone: "+998 (99) 222-22-22",
      parents: "Aliev Muhammad",
      gender: "Male",
      birthday: "June 04, 1996",
      address: "Tashkent, Uzbekistan",
    },
    {
      name: "Jack Smith",
      username: "@student",
      status: "Inactive",
      phone: "+998 (99) 222-22-22",
      parents: "Aliev Muhammad",
      gender: "Male",
      birthday: "June 04, 1996",
      address: "Tashkent, Uzbekistan",
    },
    {
      name: "Jack Smith",
      username: "@student",
      status: "Inactive",
      phone: "+998 (99) 222-22-22",
      parents: "Aliev Muhammad",
      gender: "Male",
      birthday: "June 04, 1996",
      address: "Tashkent, Uzbekistan",
    },

    {
      name: "Jack Smith",
      username: "@student",
      status: "Inactive",
      phone: "+998 (99) 222-22-22",
      parents: "Aliev Muhammad",
      gender: "Male",
      birthday: "June 04, 1996",
      address: "Tashkent, Uzbekistan",
    },

    {
      name: "Jack Smith",
      username: "@student",
      status: "Inactive",
      phone: "+998 (99) 222-22-22",
      parents: "Aliev Muhammad",
      gender: "Male",
      birthday: "June 04, 1996",
      address: "Tashkent, Uzbekistan",
    },

    {
      name: "Jack Smith",
      username: "@student",
      status: "Inactive",
      phone: "+998 (99) 222-22-22",
      parents: "Aliev Muhammad",
      gender: "Male",
      birthday: "June 04, 1996",
      address: "Tashkent, Uzbekistan",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newStudent, setNewStudent] = useState<Student>({
    name: "",
    username: "",
    status: "Inactive",
    phone: "",
    parents: "",
    gender: "",
    birthday: "",
    address: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredStudents = students.filter((student) =>
    Object.values(student).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleAddStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudent({
      name: "",
      username: "",
      status: "Inactive",
      phone: "",
      parents: "",
      gender: "",
      birthday: "",
      address: "",
    });
    setIsDialogOpen(false);
  };

  return (
    <div className="bg-[#000] text-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Students</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Add Student</Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-800 text-white">
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Input
                name="name"
                placeholder="Full Name"
                onChange={handleInputChange}
                className="bg-gray-700"
              />
              <Input
                name="username"
                placeholder="Username"
                onChange={handleInputChange}
                className="bg-gray-700"
              />
              <Input
                name="phone"
                placeholder="Phone Number"
                onChange={handleInputChange}
                className="bg-gray-700"
              />
              <Input
                name="parents"
                placeholder="Parents"
                onChange={handleInputChange}
                className="bg-gray-700"
              />
              <Input
                name="gender"
                placeholder="Gender"
                onChange={handleInputChange}
                className="bg-gray-700"
              />
              <Input
                name="birthday"
                placeholder="Birthday"
                onChange={handleInputChange}
                className="bg-gray-700"
              />
              <Input
                name="address"
                placeholder="Address"
                onChange={handleInputChange}
                className="bg-gray-700"
              />
            </div>
            <Button onClick={handleAddStudent}>Add Student</Button>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search students..."
          className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-y-auto max-h-[calc(100vh-150px)] rounded-lg">
        <Table className="min-w-full table-auto border-separate border-spacing-y-3">
          <TableHeader className="bg-gray-800 sticky top-0">
            <TableRow>
              <TableHead className="py-3 px-4 text-left">Full Name</TableHead>
              <TableHead className="py-3 px-4 text-left">Status</TableHead>
              <TableHead className="py-3 px-4 text-left">
                Phone Number
              </TableHead>
              <TableHead className="py-3 px-4 text-left">Parents</TableHead>
              <TableHead className="py-3 px-4 text-left">Gender</TableHead>
              <TableHead className="py-3 px-4 text-left">Birthday</TableHead>
              <TableHead className="py-3 px-4 text-left">Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.map((student, index) => (
              <TableRow
                key={index}
                className="hover:bg-gray-900 transition duration-200"
              >
                <TableCell className="py-3 px-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={`https://picsum.photos/seed/${index}/40/40`}
                      alt={`${student.name}'s avatar`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-gray-400">
                        {student.username}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-3 px-4">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      student.status === "Inactive"
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {student.status}
                  </span>
                </TableCell>
                <TableCell className="py-3 px-4">{student.phone}</TableCell>
                <TableCell className="py-3 px-4">{student.parents}</TableCell>
                <TableCell className="py-3 px-4">{student.gender}</TableCell>
                <TableCell className="py-3 px-4">{student.birthday}</TableCell>
                <TableCell className="py-3 px-4">{student.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
