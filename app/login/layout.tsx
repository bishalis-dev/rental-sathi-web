import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Register",
    template: "%s - Register",
  },
  description: "Register as a user or a vehicle owner to get started",
};
export default function LoginAsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
