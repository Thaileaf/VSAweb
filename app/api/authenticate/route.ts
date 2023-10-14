import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export async function GET(request: Request) {
  console.log(cookies())
  cookies().set({name: 'vsaaa', value: 'admin', path: '/'})
  // return new Response("You now have access", {
  //   status: 200,
  //   headers: { 'Set-Cookie': `vsaaa=admin` },
  // });
  return new Response("You now have access")
}