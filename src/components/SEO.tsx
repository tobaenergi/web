import React, { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  publishedTime?: string;
  author?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export const DOMAIN = 'https://tobaenergi.com';
export const DEFAULT_TITLE = 'Toba Energi Nusajaya | Solusi Panel Surya Terpercaya';
export const DEFAULT_DESC =
  'PT Toba Energi Nusajaya adalah penyedia layanan pemasangan Panel Surya (PLTS) end-to-end terpercaya untuk rumah, bisnis, dan industri di Bogor, Jabodetabek, dan seluruh Indonesia.';
export const DEFAULT_IMAGE = `${DOMAIN}/images/logo.png`;

export const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESC,
  keywords = 'Toba Energi, PLTS, Panel Surya, Jasa Pasang Panel Surya, Bogor, Jabodetabek, Listrik Tenaga Surya, Transisi Energi, Instalasi Panel Surya, EPC Solar Panel Indonesia',
  canonicalPath = '',
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  publishedTime,
  author,
  schema,
}) => {
  const fullTitle = title ? `${title} | Toba Energi Nusajaya` : DEFAULT_TITLE;
  const canonicalUrl = `${DOMAIN}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const setMeta = (nameAttr: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('name', 'robots', 'index, follow');

    // 3. Canonical Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Open Graph Tags
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:site_name', 'PT Toba Energi Nusajaya');
    setMeta('property', 'og:locale', 'id_ID');

    if (publishedTime) {
      setMeta('property', 'article:published_time', publishedTime);
    }
    if (author) {
      setMeta('property', 'article:author', author);
    }

    // 5. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // 6. JSON-LD Schema Markup
    let schemaScript = document.getElementById('schema-jsonld') as HTMLScriptElement | null;
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'schema-jsonld';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [fullTitle, description, keywords, canonicalUrl, ogType, ogImage, publishedTime, author, schema]);

  return null;
};
