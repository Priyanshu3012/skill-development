import PortalNotice from "@/components/shared/PortalNotice";

export const metadata = { title: "Student Login" };

export default function StudentLoginPage() {
  return (
    <PortalNotice
      icon="ph:user-circle-bold"
      title="Student Portal"
      description="The student login and dashboard (admissions, ID cards, results) is being migrated to our new secure portal. Please check back soon, or contact admissions for account access in the meantime."
    />
  );
}
