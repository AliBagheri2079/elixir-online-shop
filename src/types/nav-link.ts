import type { TablerIconsProps } from '@tabler/icons-react';

export type NavLinkProps = {
  category: string;
  label: string;
  href: string;
  icon: (props: TablerIconsProps) => JSX.Element;
  badge?: React.ReactNode;
};
