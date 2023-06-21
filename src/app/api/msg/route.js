import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import Msg from "../../../../models/msg";

export const GET = async (req) => {
  try {
    await connectDB();
    const data = await Msg.find({});
    return new NextResponse(JSON.stringify(data), {status:200});
  } catch (error) {
    return NextResponse.json({error:"500 Internal Server Error: " + error}, {status:500});
  }
};

export const POST = async (req) => {
  const { name, email, message } = await req.json();

  try {
    await connectDB();

    const newQuery = new Msg({ name, email, message });
    const result = await newQuery.save();

    if (result) {
      return new NextResponse('Message Sent',{ status: 201});
    } else {
      return new NextResponse('Internal Server Error', { status: 500 });
    }

  } catch (error) {
    return NextResponse.json({error:"500 Internal Server Error: " + error}, {status:500});
  }
};
