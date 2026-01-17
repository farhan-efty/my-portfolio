import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const defaultTitle = "Farhan Muhib Efty | VLSI & Semiconductor Engineer";
    const defaultDescription = "Portfolio of Farhan Muhib Efty, a VLSI Design Verification and Semiconductor Engineer based in Dhaka, Bangladesh. Explore experience, projects, and skills.";
    const defaultKeywords = "Farhan, Muhib, Efty, Farhan Muhib, Farhan Muhib Efty, VLSI, Semiconductor, Engineer, Portfolio, Design Verification, SystemVerilog, UVM";
    const defaultImage = "https://drive.google.com/thumbnail?id=1PEbPfvPBWrJUMMM-XpUcxc_jycTA0uik&sz=w1200"; // Using the image ID found in history
    const defaultUrl = "https://farhan-efty.github.io/my-portfolio/";

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        keywords: keywords || defaultKeywords,
        image: image || defaultImage,
        url: url || defaultUrl,
        type: "website"
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Farhan Muhib Efty",
        "givenName": "Farhan Muhib",
        "familyName": "Efty",
        "url": seo.url,
        "image": seo.image,
        "jobTitle": "VLSI Design Verification Engineer",
        "worksFor": {
            "@type": "Organization",
            "name": "ADN SEMICONDUCTORS"
        },
        "email": "farhanmuhibefty@gmail.com",
        "telephone": "+880 1521-561607",
        "sameAs": [
            "https://www.linkedin.com/in/farhanmuhibefty/",
            "https://github.com/farhan-efty",
            "https://www.facebook.com/fmefty/",
            "https://www.instagram.com/farhan__muhib/"
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "169 North Kunipara, Shanti Niketon, Tejgaon I/A",
            "addressLocality": "Dhaka",
            "postalCode": "1208",
            "addressCountry": "BD"
        },
        "description": seo.description
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />
            <meta name="author" content="Farhan Muhib Efty" />
            <link rel="canonical" href={seo.url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={seo.type} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
