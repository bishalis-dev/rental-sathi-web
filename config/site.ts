export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Register",
      href: "/register",
    },
  ],
  links: {
	register: "/register",
	registerAsOwner: "/register/owner",
	registerAsUser: "/register/user",
	github: "",
  },
};
