import type { ReactNode } from "react";

type AffiliateTag = "amazon" | "generic";

interface AffiliateLinkProps {
  href: string;
  tag: AffiliateTag;
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper for affiliate links. Applies proper rel attributes and
 * appends tracking params when configured. Drop into MDX content like:
 *
 *   <AffiliateLink href="https://amazon.com/dp/..." tag="amazon">
 *     Product Name
 *   </AffiliateLink>
 *
 * To configure tracking tags, set env vars:
 *   NEXT_PUBLIC_AFFILIATE_TAG_AMAZON  -- your Amazon Associates tag
 */

const TRACKING_PARAMS: Record<AffiliateTag, () => string | null> = {
  amazon: () => process.env.NEXT_PUBLIC_AFFILIATE_TAG_AMAZON ?? null,
  generic: () => null,
};

function buildHref(href: string, tag: AffiliateTag): string {
  const trackingTag = TRACKING_PARAMS[tag]();
  if (!trackingTag) return href;

  try {
    const url = new URL(href);
    if (tag === "amazon") {
      url.searchParams.set("tag", trackingTag);
    }
    return url.toString();
  } catch {
    return href;
  }
}

export default function AffiliateLink({ href, tag, children, className }: AffiliateLinkProps) {
  const resolvedHref = buildHref(href, tag);

  return (
    <a
      href={resolvedHref}
      target="_blank"
      rel="nofollow noopener sponsored noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
