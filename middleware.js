export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/", "/activities/:path*", "/resources/:path*", "/training/:path*"],
};
