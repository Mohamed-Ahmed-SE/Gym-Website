export const memberships = [
    {
        id: "basic",
        name: "Basic",
        price: 29,
        period: "/month",
        features: [
            "Access to gym floor",
            "Locker room access",
            "Free WiFi",
            "1 Guest pass per month"
        ],
        recommended: false
    },
    {
        id: "pro",
        name: "Pro Athlete",
        price: 59,
        period: "/month",
        features: [
            "All Basic features",
            "Unlimited group classes",
            "Sauna access",
            "Personal training: 1 session",
            "Nutrition plan"
        ],
        recommended: true
    },
    {
        id: "elite",
        name: "Elite",
        price: 99,
        period: "/month",
        features: [
            "All Pro features",
            "Unlimited personal training",
            "Private locker",
            "Towel service",
            "Recovery lounge access"
        ],
        recommended: false
    }
];
