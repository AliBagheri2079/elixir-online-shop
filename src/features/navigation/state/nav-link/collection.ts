import {
  Icon3dCubeSphere,
  IconBrandBehance,
  IconCamera,
  IconCurrencyBitcoin,
  IconDevicesPc,
  IconGridDots,
  IconHeartHandshake,
  IconItalic,
  IconMessage,
  IconMovie,
  IconPencil,
  IconReload,
  IconReportAnalytics,
  IconSchool,
} from '@tabler/icons-react';

import { getDictionary } from '@/lib';
import type { Locale, NavLinkProps } from '@/types';

export async function getNavLinkCollection(lang: Locale) {
  const { navigation } = await getDictionary(lang);

  const collection: NavLinkProps[] = [
    {
      category: navigation.apps.category,
      label: navigation.apps.home,
      href: '/',
      icon: IconGridDots,
    },
    {
      category: navigation.apps.category,
      label: navigation.apps.updates,
      href: '/updates',
      icon: IconReload,
      badge: 3,
    },
    {
      category: navigation.categories.category,
      label: navigation.categories.photography,
      href: '/photography',
      icon: IconCamera,
    },
    {
      category: navigation.categories.category,
      label: navigation.categories.graphic_design,
      href: '/graphic-design',
      icon: IconHeartHandshake,
    },
    {
      category: navigation.categories.category,
      label: navigation.categories.video,
      href: '/video',
      icon: IconMovie,
    },
    {
      category: navigation.categories.category,
      label: navigation.categories.illustrations,
      href: '/illustrations',
      icon: IconPencil,
    },
    {
      category: navigation.categories.category,
      label: navigation.categories.ui_ux,
      href: '/ui-ux',
      icon: IconDevicesPc,
    },
    {
      category: navigation.categories.category,
      label: navigation.categories['3d_ar'],
      href: '/3d-ar',
      icon: Icon3dCubeSphere,
    },
    {
      category: navigation.fonts.category,
      label: navigation.fonts.manage_fonts,
      href: '/manage-fonts',
      icon: IconItalic,
    },
    {
      category: navigation.resource_links.category,
      label: navigation.resource_links.stock,
      href: '/stock',
      icon: IconCurrencyBitcoin,
    },
    {
      category: navigation.resource_links.category,
      label: navigation.resource_links.tutorials,
      href: '/tutorials',
      icon: IconSchool,
    },
    {
      category: navigation.resource_links.category,
      label: navigation.resource_links.portfolio,
      href: '/portfolio',
      icon: IconReportAnalytics,
    },
    {
      category: navigation.resource_links.category,
      label: navigation.resource_links.behance,
      href: '/behance',
      icon: IconBrandBehance,
    },
    {
      category: navigation.resource_links.category,
      label: navigation.resource_links.social_forum,
      href: '/social-forum',
      icon: IconMessage,
    },
  ];
  return collection;
}
