export async function GET() {
    return Response.json({
        message: "Welcome to NextJS /api/v1/",
        endpoints: ['mongodb']
    })
}

