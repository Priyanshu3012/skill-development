import PortalNotice from "@/components/shared/PortalNotice";

export const metadata = { title: "Result" };

export default function ResultPage() {
  return (
    <PortalNotice
      icon="ph:exam-bold"
      title="Result Portal"
      description="Online result lookup is being migrated to our new secure portal. Please check back soon, or contact your center for your result in the meantime."
    />
  );
}
