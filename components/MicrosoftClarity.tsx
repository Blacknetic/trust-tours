import Script from "next/script";

// Microsoft Clarity — free heatmaps + session recordings. Lets us watch how
// visitors actually use the landing/tour pages (where they scroll, click,
// hesitate and drop off) to diagnose conversion, not just count traffic.
// The project id is a public client-side token, safe to inline; an env var can
// override it (or set it to "" to disable). Loaded afterInteractive so it never
// blocks first paint.
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? "y00vg5qobz";

export default function MicrosoftClarity() {
  if (!CLARITY_ID) return null;
  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${CLARITY_ID}");`}
    </Script>
  );
}
