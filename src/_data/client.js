module.exports = {
    "name": "Chokdee Thai Therapy",
    "email": "chokdeethaitherapy@gmail.com",
    "phoneForTel": "+447958229813",
    "phoneFormatted": "07958 229813",
    "openingHours": "Mon-Fri: 10am-7pm, Sat: 3.30pm-7pm",
    "onlineBooking": "https://chokdeethaitherapy.setmore.com/",
    "address": {
        "lineOne": "77 Queen St",
        "lineTwo": "",
        "city": "Normanton",
        "state": "West Yorkshire",
        "zip": "WF6 1AF",
        "country": "United Kingdom",
        "mapLink": "https://maps.app.goo.gl/866FWxeEERejDbR8A"
    },
    "socials": {
        "facebook": "",
        "instagram": "",
        "googleReview": "https://g.page/r/Carswx-vZttxEBM/review",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    "domain": "https://www.chokdeethaitherapy.co.uk",
    "schema": {
        "business": {
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://www.chokdeethaitherapy.co.uk/#business",
            "name": "Chokdee Thai Therapy",
            "image": "https://www.chokdeethaitherapy.co.uk/assets/svgs/logo-pink2.svg",
            "url": "https://www.chokdeethaitherapy.co.uk",
            "telephone": "+447958229813",
            "email": "chokdeethaitherapy@gmail.com",
            "priceRange": "££",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "77 Queen St",
                "addressLocality": "Normanton",
                "addressRegion": "West Yorkshire",
                "postalCode": "WF6 1AF",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "url": "https://maps.app.goo.gl/866FWxeEERejDbR8A"
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "10:00",
                    "closes": "19:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "15:30",
                    "closes": "19:00"
                }
            ]
        },
        "website": {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.chokdeethaitherapy.co.uk/#website",
            "url": "https://www.chokdeethaitherapy.co.uk",
            "name": "Chokdee Thai Therapy",
            "publisher": {
                "@id": "https://www.chokdeethaitherapy.co.uk/#business"
            }
        }
    }
};
