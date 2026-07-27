import { createFileRoute } from "@tanstack/react-router";
import AdminDashboard from "@/components/AdminDashboard";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "أدوات الرفع والإدارة — محفظة العملاء" },
      {
        name: "description",
        content: "رفع ملفات المحفظة والطلبات وإدارة النسخ الاحتياطية.",
      },
      { property: "og:title", content: "أدوات الرفع والإدارة" },
      {
        property: "og:description",
        content: "رفع ملفات المحفظة والطلبات وإدارة النسخ الاحتياطية.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  return (
    <>
      <AdminDashboard />
      <Toaster position="top-center" richColors />
    </>
  );
}
