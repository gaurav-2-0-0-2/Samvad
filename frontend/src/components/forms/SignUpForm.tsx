import { Button } from "../../components/ui/button";
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpForm() {
  return (
    <Card className="w-[350px] m-auto mt-44">
      <CardHeader>
        <CardTitle>SignUp</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input className="outline-none" id="email" placeholder="Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input className="outline-none" id="password" placeholder="Password" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Confirm Password</Label>
              <Input className="outline-none" id="password" placeholder="Confirm Password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center gap-5">
	      <Link href={'/login'}><Button variant="outline">Login</Button></Link>
        <Button>SignUp</Button>
      </CardFooter>
    </Card>
  );
}
