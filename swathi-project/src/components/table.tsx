import {
  Container,
  HorizontalLine,
  Table,
  TableContainer,
  TableData,
  TableHeaders,
} from "@/styles/styledcomponent";

// interface TableData {
//   request: string;
//   commits: number;
//   status: string;
//   coding_time: string;
//   cycle_time: string;
//   created: string;
//   assignees: string;
// }
// interface Data {
//   studentid: number;
//   studentname: string;
//   courseid: number;
//   coursename: string;
//   facultyid: number;
// }
interface JsonData {
  data: Array<any>;
  NameOfTheTables: Array<string>;
  NameOfTheColumns: Array<string>;
  PrimaryTable: string;
  countOftables: number;
}
const CustomeTable = () => {
  const dataObject = {
    data: {
      data: [
        {
          studentid: 4,
          studentname: "Bob Brown",
          courseid: 101,
          coursename: "Computer Science",
          facultyid: 201,
        },
        {
          studentid: 1,
          studentname: "John Doe",
          courseid: 101,
          coursename: "Computer Science",
          facultyid: 201,
        },
        {
          studentid: 5,
          studentname: "Emily Davis",
          courseid: 102,
          coursename: "Mathematics",
          facultyid: 202,
        },
        {
          studentid: 2,
          studentname: "Jane Smith",
          courseid: 102,
          coursename: "Mathematics",
          facultyid: 202,
        },
        {
          studentid: 3,
          studentname: "Alice Johnson",
          courseid: 103,
          coursename: "Physics",
          facultyid: 203,
        },
      ],
      NameOfTheTables: ["student", "course", "course_faculty"],
      NameOfTheColumns: [
        "student.studentid",
        "student.courseid",
        "student.studentname",
        "course.courseid",
        "course.facultyid",
        "course.coursename",
        "course_faculty.courseid",
        "course_faculty.facultyid",
      ],
      PrimaryTable: "student",
      countOfTables: 3,
    },
    message: "Success",
    status: true,
  };
  const headers1 = dataObject.data.NameOfTheColumns;
  console.log(headers1);
  const convertedColumns = new Set(
    headers1.map((column) => column.split(".")[1])
  );
  const ColumnsList = Array.from(convertedColumns);
  function capitalizeFirstLetter(name: string) {
    return { [name]: name.charAt(0).toUpperCase() + name.slice(1) };
  }
  const FinalColumnsList = ColumnsList.map((char) =>
    capitalizeFirstLetter(char)
  );

  console.log(FinalColumnsList);
  const data2 = dataObject.data.data;
  //   const headers = [
  //     "REQUEST",
  //     "COMMITS",
  //     "STATUS",
  //     "CODING TIME",
  //     "CYCLE TIME",
  //     "CREATED",
  //     "ASSIGNEES",
  //   ];
  //   const data: TableData[] = [
  //     {
  //       request: "Feature/Do-120",
  //       commits: 14,
  //       status: "Review Pending",
  //       coding_time: "24d",
  //       cycle_time: "10d",
  //       created: "01/09/2024",
  //       assignees: "Swathi",
  //     },
  //     {
  //       request: "Feature/Do-120",
  //       commits: 14,
  //       status: "Review Pending",
  //       coding_time: "17d",
  //       cycle_time: "15d",
  //       created: "03/09/2024",
  //       assignees: "Swathi",
  //     },
  //     {
  //       request: "Feature/Do-120",
  //       commits: 14,
  //       status: "Review Pending",
  //       coding_time: "22d",
  //       cycle_time: "11d",
  //       created: "06/09/2024",
  //       assignees: "Swathi",
  //     },
  //     {
  //       request: "Feature/Do-120",
  //       commits: 14,
  //       status: "Review Pending",
  //       coding_time: "2d",
  //       cycle_time: "1d",
  //       created: "10/09/2024",
  //       assignees: "Swathi",
  //     },
  //     {
  //       request: "Feature/Do-120",
  //       commits: 14,
  //       status: "Review Pending",
  //       coding_time: "14d",
  //       cycle_time: "6d",
  //       created: "11/09/2024",
  //       assignees: "Swathi",
  //     },
  //   ];

  return (
    <Container>
      <TableContainer>
        <h1 style={{ padding: "2rem" }}>Pull Request - Review Pending</h1>
        <Table>
          <thead>
            {FinalColumnsList.map((head: Object) => (
              <TableHeaders>{Object.values(head)}</TableHeaders>
            ))}
          </thead>
          <tbody>
            {data2.map((data: any, index) => (
              <tr key={index}>
                {FinalColumnsList.map((head: Object) => {
                  const columnName = Object.keys(head)[0];
                  console.log(columnName);

                  return <TableData>{data[columnName]}</TableData>;
                })}
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default CustomeTable;
