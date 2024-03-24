export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Rental Sathi - A Web Based Vehicle Rental System",
  description: "Rental Sathi is a web based vehicle rental system that allows users to rent vehicles from vehicle owners.",
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
