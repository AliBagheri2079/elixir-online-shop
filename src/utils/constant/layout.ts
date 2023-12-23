export const PUBLIC_LAYOUT_MAX_HEIGHT = '100dvh';

export const PUBLIC_LAYOUT_BLOCK_MARGIN = 'calc(var(--mantine-spacing-xl) * 2)';

export const PUBLIC_LAYOUT_HEADER_MIN_SIZE =
  'calc(var(--mantine-scale) * 3.125rem)';

export const PUBLIC_LAYOUT_CONTENT_MAX_SIZE = `calc(${PUBLIC_LAYOUT_MAX_HEIGHT} - calc(${PUBLIC_LAYOUT_BLOCK_MARGIN} * 2) - ${PUBLIC_LAYOUT_HEADER_MIN_SIZE})`;

export const PUBLIC_LAYOUT_CONTENT_BLOCK_PADDING = 'var(--mantine-spacing-md)';
