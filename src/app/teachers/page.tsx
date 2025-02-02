import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

export default function StudentsTable() {
  const students = [
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
  ];

  return (
    <div className=" bg-[#000] text-white">
      <h2 className="text-2xl font-bold mb-4">Teachers</h2>
      <div className="overflow-y-auto max-h-[calc(100vh-170px)]  rounded-lg">
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
            {students.map((student, index) => (
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
