// tailwindcdn.js

export function injectTailwindCDN() {
    const cdnUrl = 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4';
  
    // Verifica si ya está cargado
    const existingScript = document.querySelector(`script[src="${cdnUrl}"]`);
  
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = cdnUrl;
      script.onload = () => {
        console.log('Tailwind CDN cargado desde @tailwindcss/browser@4');
      };
      document.head.appendChild(script);
    }
  }
  