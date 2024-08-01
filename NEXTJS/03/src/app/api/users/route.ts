// HTTP
// GET, POST, PUT, DELETE
// API Route Handler
// React.JS 자체적으로 REST API Route Handler를 제공합니다.
// REST API = url 주소를 의미 있게 표현해서 API 경로를 지정하는 것

// http://localhost:3000/api -> GET
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams.get('gender'));

  return Response.json({ message: 'Hello world' });
}

export async function POST(request: Request) {
  const res = await request.json();

  // body 데이터 확인
  // 로직 처리
  return Response.json({ res });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log('_______', params.id);
  const res = await request.json();
  return Response.json({ res });
}
