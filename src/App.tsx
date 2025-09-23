import { Routes, Route, Navigate } from "react-router-dom";
import { AdminLogin } from "./routes/AdminLogin";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { AdminShell } from "./components/admin/AdminShell";
import { Overview } from "./components/admin/overview/Overview";
import { BlogManager } from "./components/admin/BlogManager";
import BlogPublic from "./routes/BlogPublic";
// Public site pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import AllProjects from "./pages/AllProjects";
import Careers from "./pages/Careers";
import Learn from "./pages/Learn";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Sitemap from "./pages/Sitemap";
// Placeholder stubs for Users/Audit pages in routes form
const Users = () => <div className="p-2">Users — coming soon</div>;
const Audit = () => <div className="p-2">Audit — coming soon</div>;

export default function App() {
  return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
        <ScrollToTop />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminShell title="Overview">
                  <Overview />
                </AdminShell>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute>
                <AdminShell title="Users">
                  <Users />
                </AdminShell>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/audit"
            element={
              <ProtectedRoute>
                <AdminShell title="Audit">
                  <Audit />
                </AdminShell>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/blog"
            element={
              <ProtectedRoute>
                <AdminShell title="Blog">
                  <BlogManager />
                </AdminShell>
              </ProtectedRoute>
            }
          />
          {/* Public blog post preview */}
          <Route path="/blog/:slug" element={<BlogPublic />} />

          {/* Fallback to home for unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

// Scroll to top on route change
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}
