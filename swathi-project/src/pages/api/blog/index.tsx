import { NextApiRequest, NextApiResponse } from "next";
import { dataObject } from "./data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(dataObject);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    const newComment = {
      studentid: "E05",
      studentname: "Emily Davis",
      courseid: 102,
      coursename: "Mathematics",
      facultyid: 202,
    };
    dataObject.data.data.push(newComment);
  }
}
