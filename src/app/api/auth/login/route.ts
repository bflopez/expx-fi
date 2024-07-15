import {NextRequest, NextResponse} from "next/server";
import {jwtGenrator} from "@/utils/jwt";
import {cookies} from "next/headers";

export async function POST(req: NextRequest) {
    const userInfo = {
        "id": 5301,
        "username": "test user",
        "contracts": [
            {
                id: "000301",
                symbol: "eth_lido",
                holding: 325.1
            }
        ]
    }
    try{
        const {username, password} = await req.json()
        if(!username || !password){
            return NextResponse.json(
                { message: "Email or Password is missing" },
                { status: 400 }
            )
        }
        const isMatch = username === 'user@expx.fi' && password === 'Br98PKe*js76QaF@1OdX'
        if(!isMatch){
            return new NextResponse(JSON.stringify({error: "Invalid Credentials"}), {
                status: 401,
            })
        }
        const token = await jwtGenrator({payload: userInfo})
        cookies().set("token", token, {
            secure: true,
            httpOnly: true,
            expires: Date.now() + 24 * 60 * 60 * 1000 * 3,
            path: "/",
            sameSite: "strict",
        });
        return Response.json({ userInfo: userInfo }, {status: 200});
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}