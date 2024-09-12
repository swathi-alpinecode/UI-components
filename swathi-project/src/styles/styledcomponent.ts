import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const Container = styled.section`
  background-color: #e5e6e6;
  color: #000000;
  padding: 1em;
  font-family: Helvetica;
`;
export const TableContainer = styled.section`
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #d9dcdc;
  border-radius: 30px;
`;
export const Table = styled.table`
  margin-top: 10px;
  font-family: "Arial";
  border-collapse: separate;
  border-spacing: 0;
  margin: 15px;
  border: 1px solid #d9dcdc;
  border-radius: 30px;

  tr:first-child td:first-child {
    border-top-left-radius: 30px;
  }

  tr:first-child td:last-child {
    border-top-right-radius: 30px;
  }

  tr:last-child td:first-child {
    border-bottom-left-radius: 30px;
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: 30px;
  }

  tr:nth-child(n) {
    border-bottom: 1px solid #d9dcdc;
  }
`;

export const TableHeaders = styled.th`
  color: #d9dcdc;
  font-size: 14px;
  text-align: left;
  height: 10px;
  padding: 2rem;
`;

export const TableData = styled.td`
  color: #000000;
  font-family: serif;
  font-size: 17px;
  width: 10%;
  height: 3em;
  padding: 2rem;
`;
export const HorizontalLine = styled.hr`
  border-bottom: 0.5px solid #d9dcdc;
  width: 100%;
`;
