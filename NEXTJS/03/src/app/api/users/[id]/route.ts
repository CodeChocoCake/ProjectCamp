// HTTP
// GET, POST, PUT, DELETE
// API Route Handler
// React.JS 자체적으로 REST API Route Handler를 제공합니다.
// REST API = url 주소를 의미 있게 표현해서 API 경로를 지정하는 것

// http://localhost:3000/api -> GET
export async function GET(request: Request) {
  return Response.json({ message: 'Hello users' });
}
export async function POST(request: Request) {}
export async function PUT(request: Request) {}
export async function DELETE(request: Request) {}
