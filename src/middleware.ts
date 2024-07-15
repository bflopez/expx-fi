import {NextRequest, NextResponse} from "next/server";
import {jwtVerifier} from "@/utils/jwt";
import {cookies} from "next/headers";
import {JOSEError} from "jose/errors";

export async function middleware(request: NextRequest){
    const token = cookies().get("token");
    if (!token) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    try {
        const payload = await jwtVerifier(token.value);
    } catch (e){
        console.log('e', e)
        if((e as JOSEError).code == "ERR_JWS_INVALID"){
            console.log('ERR_JWS_INVALID')
            return NextResponse.redirect(new URL("/", request.url));
        }
    }
}
export const config = {
    matcher: ["/dashboard", "/api/eth_lido"],
};