import { getDatabase, connectDatabase } from '@/utils/db';

export async function GET() {
    // Fetch data from MongoDB
    await connectDatabase();
    const db = getDatabase();
    // console.log({ db });
    // const collection = db.collection('sales');
    // const result = await collection.find({}).toArray();
    return Response.json({
        message: "mongodb endpoint",
        // data: result
    });
}
