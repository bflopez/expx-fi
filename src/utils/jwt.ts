import {SignJWT, jwtVerify, JWTPayload} from "jose";

const jwtGenrator = async ({ payload }: {payload: JWTPayload}) => {
    const alg = "HS256";
    return await new SignJWT(payload)
        .setProtectedHeader({ alg })
        .setExpirationTime("72h")
        .setIssuedAt()
        .sign(new TextEncoder().encode("A-JWT-SECRET-KEY"));
};

const jwtVerifier = async (token:string) => {
    const {payload} = await jwtVerify(
        token,
        new TextEncoder().encode("A-JWT-SECRET-KEY")
    );
    return payload;
};

export { jwtGenrator, jwtVerifier };