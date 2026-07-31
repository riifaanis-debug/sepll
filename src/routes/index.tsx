import { createFileRoute } from "@tanstack/react-router";
import WalletApp from "@/components/WalletApp";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "إدارة طلبات الإعفاء وإعادة الجدولة" },
      {
        name: "description",
        content: "A web application for managing collections, featuring user authentication, data import/export, and administrative tools.",
      },
      { property: "og:title", content: "إدارة طلبات الإعفاء وإعادة الجدولة" },
      {
        property: "og:description",
        content: "A web application for managing collections, featuring user authentication, data import/export, and administrative tools.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <WalletApp />
      <Toaster position="top-center" richColors />
    </>
  );
}
