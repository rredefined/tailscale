import React, { Suspense, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/About";
import PartnersPage from "./pages/Partners";
import CareersPage from "./pages/Careers";
import LegalTabs from "./pages/Legal";
import { Home, ArrowLeft } from "lucide-react";

const HomePage = React.lazy(() => import("./pages/Home"));
const GamingServers = React.lazy(() => import("./pages/Games"));
const VpsPage = React.lazy(() => import("./pages/VPS"));
const CpanelHosting = React.lazy(() => import("./pages/CPanel"));
const SupportPage = React.lazy(() => import("./pages/Support"));
const MinecraftPage = React.lazy(() => import("./pages/Minecraft"));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);
  return null;
};

const PageLoader = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
  </div>
);

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center">
      <div className="space-y-6 max-w-2xl">
        <h1 className="text-8xl font-bold text-yellow-400">404</h1>
        <h2 className="text-3xl font-semibold">Page Not Found</h2>
        <p className="text-lg text-slate-300">
          Oops! The page you're looking for seems to have vanished into the
          digital void.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg transition-colors duration-200"
          >
            <Home className="w-5 h-5" />
            Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

const PageWrapper = ({ children }) => (
  <>
    <ScrollToTop />
    <Suspense fallback={<PageLoader />}>{children}</Suspense>
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <PageWrapper>
            <HomePage />
          </PageWrapper>
        ),
      },
      {
        path: "gaming-servers",
        element: (
          <PageWrapper>
            <GamingServers />
          </PageWrapper>
        ),
      },
      {
        path: "vps",
        element: (
          <PageWrapper>
            <VpsPage />
          </PageWrapper>
        ),
      },
      {
        path: "cpanel-hosting",
        element: (
          <PageWrapper>
            <CpanelHosting />
          </PageWrapper>
        ),
      },
      {
        path: "support",
        element: (
          <PageWrapper>
            <SupportPage />
          </PageWrapper>
        ),
      },
      {
        path: "minecraft",
        element: (
          <PageWrapper>
            <MinecraftPage />
          </PageWrapper>
        ),
      },
      {
        path: "about",
        element: (
          <PageWrapper>
            <AboutPage />
          </PageWrapper>
        ),
      },
      {
        path: "partners",
        element: (
          <PageWrapper>
            <PartnersPage />
          </PageWrapper>
        ),
      },
      {
        path: "careers",
        element: (
          <PageWrapper>
            <CareersPage />
          </PageWrapper>
        ),
      },
      {
        path: "legal",
        element: (
          <PageWrapper>
            <LegalTabs />
          </PageWrapper>
        ),
      },
      {
        path: "*",
        element: (
          <PageWrapper>
            <NotFoundPage />
          </PageWrapper>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
