import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  name: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const person = { name: "Joe Matune" };

  return res.status(200).json(person);
}
