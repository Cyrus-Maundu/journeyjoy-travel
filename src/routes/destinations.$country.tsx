import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/destinations/$country")({
  component: CountryLayout,
});

function CountryLayout() {
  return <Outlet />;
}