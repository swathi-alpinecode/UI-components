import {
  Container,
  HorizontalLine,
  Table,
  TableContainer,
  TableData,
  TableHeaders,
} from "@/styles/styledcomponent";

interface TableData {
  request: string;
  commits: number;
  status: string;
  coding_time: string;
  cycle_time: string;
  created: string;
  assignees: string;
}
const CustomeTable = () => {
  const headers = [
    "REQUEST",
    "COMMITS",
    "STATUS",
    "CODING TIME",
    "CYCLE TIME",
    "CREATED",
    "ASSIGNEES",
  ];
  const data: TableData[] = [
    {
      request: "Feature/Do-120",
      commits: 14,
      status: "Review Pending",
      coding_time: "24d",
      cycle_time: "10d",
      created: "01/09/2024",
      assignees: "Swathi",
    },
    {
      request: "Feature/Do-120",
      commits: 14,
      status: "Review Pending",
      coding_time: "17d",
      cycle_time: "15d",
      created: "03/09/2024",
      assignees: "Swathi",
    },
    {
      request: "Feature/Do-120",
      commits: 14,
      status: "Review Pending",
      coding_time: "22d",
      cycle_time: "11d",
      created: "06/09/2024",
      assignees: "Swathi",
    },
    {
      request: "Feature/Do-120",
      commits: 14,
      status: "Review Pending",
      coding_time: "2d",
      cycle_time: "1d",
      created: "10/09/2024",
      assignees: "Swathi",
    },
    {
      request: "Feature/Do-120",
      commits: 14,
      status: "Review Pending",
      coding_time: "14d",
      cycle_time: "6d",
      created: "11/09/2024",
      assignees: "Swathi",
    },
  ];
  return (
    <Container>
      <TableContainer>
        <h1 style={{ padding: "2rem" }}>Pull Request - Review Pending</h1>
        <Table>
          <thead>
            {headers.map((head: string) => (
              <TableHeaders>{head}</TableHeaders>
            ))}
          </thead>
          <tbody>
            {data.map((data: TableData, index) => (
              <tr key={index}>
                <TableData>{data.request}</TableData>
                <TableData>{data.commits}</TableData>
                <TableData>{data.status}</TableData>
                <TableData>{data.coding_time}</TableData>
                <TableData>{data.cycle_time}</TableData>
                <TableData>{data.created}</TableData>
                <TableData>{data.assignees}</TableData>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default CustomeTable;
