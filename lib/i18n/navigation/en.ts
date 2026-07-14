import {
  FOOTER_LINKS as BASE_FOOTER_LINKS,
  NAVIGATION as BASE_NAVIGATION,
  type NavItem,
} from "../../navigation";

export type { NavColumn, NavItem, NavLink } from "../../navigation";

const company: NavItem = {
  label: "Company",
  href: "/about",
};

export const NAVIGATION: NavItem[] = BASE_NAVIGATION.map((item) =>
  item.href === "/experience" ? company : item,
);

export const FOOTER_LINKS = [
  ...BASE_FOOTER_LINKS.map((group) =>
    group.title === "Company"
      ? {
          ...group,
          links: [
            { label: "Company", href: "/about" },
            ...group.links,
          ],
        }
      : group,
  ),
  {
    title: "Legal",
    links: [
      { label: "Privacy Notice", href: "/privacy" },
      { label: "Legal Notice", href: "/legal" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];
