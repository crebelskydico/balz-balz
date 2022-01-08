import Script from 'next/script';

const PNEL = () => {
  return (
    <>
      <Script
        src="https://homerun-gmbh.github.io/paynoweatlater-banner/assets/javascripts/paynoweatlater.js"
        strategy="beforeInteractive"
      ></Script>
      <Script id="paynoweatlater" strategy="afterInteractive">
        {`
         paynoweatlater.addBanner('https://www.paynoweatlater.de/at/balz-und-balz-hamburg/');
        `}
      </Script>
    </>
  );
};

export default PNEL;
