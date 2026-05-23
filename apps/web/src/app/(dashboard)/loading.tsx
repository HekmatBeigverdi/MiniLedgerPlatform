import { PageLoadingState } from "@/components/shared/page-loading-state";

export default function DashboardLoading() {
  return (
    <div className="p-6">
      <PageLoadingState />
    </div>
  );
}