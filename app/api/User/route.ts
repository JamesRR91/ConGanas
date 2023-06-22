import { NextResponse } from "next/server";

export async function GET() {
    const userData = {
        id: 1,
        firstName: "Chris",
        lastName: "Saballos",
        email: 'chrissaballos@example.com',
    }

    return NextResponse.json({data: userData}, {status: 200});

}
export async function PUT(request: Request) {
    const {firstName, lastName, email} = await request.json();

    updateUser(id, firstName, lastName, email);

    const updatedUserData = {
        id,
        firstName,
        lastName,
        email,
    };

    return NextResponse.json({data:updatedUserData});
}

function updateUser(id, firstName, lastName, email) {
    
}
