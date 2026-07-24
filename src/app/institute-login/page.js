import PortalNotice from "@/components/shared/PortalNotice";

export const metadata = { title: "Institute Login" };

export default function InstituteLoginPage() {
  return (
    <PortalNotice
      icon="ph:bank-bold"
      title="Institute Portal"
      description="The institute login and dashboard (student admissions, profile management) is being migrated to our new secure portal. Please check back soon, or contact us for support in the meantime."
    />
  );
}
