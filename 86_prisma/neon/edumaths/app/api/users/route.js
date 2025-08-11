
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const users = await prisma.user.findMany();
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (err) {
    console.error('DB Error:', err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function POST(request) {
  const body = await request.json();
  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        // add other fields if needed
      },
    });
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (err) {
    console.error('DB Error:', err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}