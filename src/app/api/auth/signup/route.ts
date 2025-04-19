import { NextResponse } from "next/server";
// Import prisma client - commented out for now to prevent build errors
// import { prisma } from "@/lib/db";
// import { hash } from "bcrypt";

export async function POST(req: Request) {
    try {
        const { name, email, mobile, password } = await req.json();

        // Validate input
        if (!name || !email || !mobile || !password) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Commented out database operations to prevent build errors
        // Will be uncommented when ready to connect to database
        /*
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        mobile,
        password: hashedPassword,
      },
    });
    */

        // For now, just return success
        return NextResponse.json(
            { message: "User registration successful" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Signup error:", error);
        return NextResponse.json(
            { error: "An error occurred during registration" },
            { status: 500 }
        );
    }
}
