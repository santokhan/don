export async function GET() {
    return Response.json({
        message: "Welcome to NextJS /api/",
        availableVersions: ['v1']
    })
}

