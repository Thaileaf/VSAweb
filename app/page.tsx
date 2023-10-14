
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import HomePage from "@/app/page_render";


export default function Home() {

  const cook = cookies().get('vsaaa')
  // @ts-ignore
  if(cook == undefined || cook.value != "admin") {
    redirect('https://www.google.com/');
  }

  return (
    <HomePage/>
  )
}
