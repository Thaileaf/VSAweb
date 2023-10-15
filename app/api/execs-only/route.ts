import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export async function GET(request: Request) {
  console.log(cookies())
  cookies().set({name: 'vsaaa', value: 'admin', path: '/'})
  return new Response(null, {
    status: 301,
    headers: { Location: 'https://nyuvsa.com/' },
  });
  // return new Response("You now have access. Go to <a>nyuvsa.com</a>")
}