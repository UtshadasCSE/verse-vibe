import { connectDB } from "@/lib/config/db";
const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";
import path from "path";

// call connect database function
const loadDB = async () => {
  await connectDB();
};
loadDB();

// Get data from databse
export async function GET(request) {
  console.log("Blog is hit");
  return NextResponse.json({ message: "Hello Blog" });
}

// Post data in database
// export async function POST(request) {
//   const formData = await request.formData();
//   const timeStamp = Date.now();

//   //   track the image from the formData
//   const image = formData.get("image");
//   const imageByteData = await image.arrayBuffer();
//   const buffer = Buffer.from(imageByteData);
//   const path = `./public/store/${timeStamp}_${image.name}`;
//   await writeFile(path, buffer);
//   const imagUrl = `/${timeStamp}_${image.name}`;
//   console.log(imagUrl);
//   return NextResponse.json({ imagUrl });
// }
export async function POST(request) {
  const formData = await request.formData();
  const timeStamp = Date.now();

  // Track the image from the formData
  const image = formData.get("image");
  if (!image) {
    return NextResponse.json({ error: "No image found" }, { status: 400 });
  }

  try {
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);

    // Use path.join for cross-platform path creation
    const filePath = path.join(
      process.cwd(),
      "public",
      "store",
      `${timeStamp}_${image.name}`
    );
    await writeFile(filePath, buffer);

    const imagUrl = `/store/${timeStamp}_${image.name}`;
    console.log(imagUrl);

    return NextResponse.json({ imagUrl });
  } catch (error) {
    console.error("Error writing file:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}
