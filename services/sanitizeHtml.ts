import DOMPurify from 'isomorphic-dompurify';

const ALLOWED_TAGS = [
  'b',
  'strong',
  'i',
  'em',
  'u',
  's',
  'br',
  'code',
  'span',
  'a',
  'ul',
  'ol',
  'li',
] as const;

const ALLOWED_ATTR = ['href', 'target', 'rel', 'title', 'class'] as const;

export function sanitizeHtml(html: string) {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [...ALLOWED_TAGS],
    ALLOWED_ATTR: [...ALLOWED_ATTR],
    ALLOW_DATA_ATTR: false,
    USE_PROFILES: { html: true },
  });
}

