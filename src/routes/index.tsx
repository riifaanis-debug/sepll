import { createFileRoute } from "@tanstack/react-router";
import WalletApp from "@/components/WalletApp";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "إدارة محفظة العملاء — مايو 2026" },
      {
        name: "description",
        content: "تطبيق فردي لإدارة محفظة العملاء والتواصل معهم عبر الاتصال والواتساب.",
      },
      { property: "og:title", content: "إدارة محفظة العملاء" },
      {
        property: "og:description",
        content: "تطبيق فردي لإدارة محفظة العملاء ومتابعة التحصيل.",
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
