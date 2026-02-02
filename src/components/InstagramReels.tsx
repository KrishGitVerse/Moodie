import { useEffect } from 'react';

interface InstagramReelsProps {
  url: string;
}

export default function InstagramReels({ url }: InstagramReelsProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    (window as any).instgrm?.Embeds?.process?.();
  }, [url]);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg p-6">
      <div className="flex justify-center">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '540px',
            minWidth: '326px',
            padding: 0,
            width: 'calc(100% - 2px)'
          }}
        />
      </div>
    </div>
  );
}
