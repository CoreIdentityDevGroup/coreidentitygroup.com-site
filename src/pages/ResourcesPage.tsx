import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

export function ResourcesPage() {
  const navigate = useNavigate();
  useEffect(() => { navigate({ to: "/contact" }); }, []);
  return null;
}
