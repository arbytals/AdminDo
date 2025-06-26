import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
      auth: {
        persistSession: false,
      },
      db: {
        schema: "public",
      },
    }
  );

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Define public routes that don't require authentication
    const publicRoutes = [
      "/", // Home page
      "/login", // Login page
      "/signup", // Signup page
      "/about", // About page
      "/pricing", // Pricing page
      "/calls", // Calls page
      "/email", // Email page
      "/social-media", // Social media page
      "/features", // Features page
      "/privacy", // Privacy policy
      "/terms", // Terms of service
      "/contact", // Contact page
      "/faq", // FAQ page
      "/support", // Support page
      "/blog", // Blog section
      "/api/retell/webhook", // Retell webhook
    ];

    // Check if this is an auth callback
    const isAuthCallback =
      request.nextUrl.pathname.startsWith("/auth/callback");
    if (isAuthCallback) {
      return response;
    }

    const isPublicRoute = publicRoutes.some(
      (route) =>
        request.nextUrl.pathname === route ||
        request.nextUrl.pathname.startsWith(`${route}/`)
    );

    // If user is authenticated and trying to access a public route, redirect to dashboard
    if (user && isPublicRoute) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // If user is not authenticated and trying to access a protected route, redirect to login
    if (!user && !isPublicRoute) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return response;
  } catch (error) {
    // If there's an error, allow the request to proceed
    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
