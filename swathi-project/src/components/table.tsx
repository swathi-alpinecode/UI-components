import {
  Container,
  HorizontalLine,
  Table,
  TableContainer,
  TableData,
  TableHeaders,
} from "@/styles/styledcomponent";
import { useEffect, useState } from "react";

// interface TableData {
//   request: string;
//   commits: number;
//   status: string;
//   coding_time: string;
//   cycle_time: string;
//   created: string;
//   assignees: string;
// }
interface Data {
  studentid: number;
  studentname: string;
  courseid: number;
  coursename: string;
  facultyid: number;
}
interface JsonData {
  data: Array<any>;
  NameOfTheTables: Array<string>;
  NameOfTheColumns: Array<string>;
  PrimaryTable: string;
  countOftables: number;
}
interface ResponceJson {
  data: JsonData;
  message: string;
  status: boolean;
}
const CustomeTable = () => {
  const [data1, setData1] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const dataObject = {
    data: {
      data: [
        {
          studentid: "E04",
          studentname: "Bob Brown",
          courseid: 101,
          coursename: "Computer Science",
          facultyid: 201,
        },
        {
          studentid: "E01",
          studentname: "John Doe",
          courseid: 101,
          coursename: "Computer Science",
          facultyid: 201,
        },
        {
          studentid: "E05",
          studentname: "Emily Davis",
          courseid: 102,
          coursename: "Mathematics",
          facultyid: 202,
        },
        {
          studentid: "E02",
          studentname: "Jane Smith",
          courseid: 102,
          coursename: "Mathematics",
          facultyid: 202,
        },
        {
          studentid: "E03",
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

  const FetchData = async () => {
    try {
      const response = await fetch("/api/blog", {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache",
        },
      });
      if (!response.ok) {
        throw new Error("Faild to fetch data");
      }
      const jsonData: ResponceJson = await response.json();
      setData1(jsonData.data.data);
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  };

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
  console.log(data1, "data1");
  if (!data1) {
    return (
      <div>
        <button onClick={FetchData}>click</button>
        <p>Loading....</p>;
      </div>
    );
  } else {
    return (
      <Container>
        <button onClick={FetchData}>click</button>
        <TableContainer>
          <h1 style={{ padding: "2rem" }}>Pull Request - Review Pending</h1>
          <Table>
            <thead>
              <TableHeaders>{"S No"}</TableHeaders>
              {FinalColumnsList.map((head: Object) => (
                <TableHeaders>{Object.values(head)}</TableHeaders>
              ))}
            </thead>
            <tbody>
              {data1.map((data: any, index) => (
                <tr key={index}>
                  <TableData>{index + 1}</TableData>
                  {FinalColumnsList.map((head: Object, index: any) => {
                    const columnName = Object.keys(head)[0];
                    return (
                      <TableData key={index}>{data[columnName]}</TableData>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
};
export default CustomeTable;
