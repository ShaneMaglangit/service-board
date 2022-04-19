const services = [
    {
        "id": "xI1G7ZKUYQHCAy1YGBcx",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "Furniture Repair",
        "category": "Repair",
        "description": "Specify your needs and we'll make it for you",
        "rating": 5,
        "estimatedCost": 175,
        "isHourly": false,
        "location": "Cebu City",
        "provider": "Hanzo Kobayashi",
        "providerId": "hW6Rg8xSKqSvWIC8ZrDcKZEdzhm1"
    },
    {
        "id": "w8KHP6PrHkUPdGMi21wN",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "Cellphone Repair",
        "category": "Repair",
        "description": "Install Screen Protector, Battery, Repair shattered screen",
        "rating": 5,
        "estimatedCost": 75,
        "isHourly": false,
        "location": "Antipolo",
        "provider": "Joseph",
        "providerId": "jyp4y3rvQ2PJgMenWVDXAGcfxD12"
    },
    {
        "id": "WlZPnBzrW7ufDrtoNeel",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "Make-up Artist",
        "category": "Grooming",
        "description": " We do polished makeup application on various skin types.",
        "rating": 5,
        "estimatedCost": 125,
        "isHourly": true,
        "location": "Makati City",
        "provider": "Eden",
        "providerId": "PNFkc0kCeBfdQP9nNRZUmFP3lTi2"
    },
    {
        "id": "3fLgzmuDoonuon0tGHFI",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "Haircut",
        "category": "Grooming",
        "description": "Services includes hair cutting, styling, and treatments.",
        "rating": 5,
        "estimatedCost": 80,
        "isHourly": true,
        "location": "Sampaloc, Manila",
        "provider": "Shane Maglangit",
        "providerId": "dhw3vM5bwoZk13EgwyISRFU6zOh1"
    },
    {
        "id": "aV0Ju7dGgX3s8IJNVV7K",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "Tutor",
        "category": "Education",
        "description": "Teaches English or Math",
        "rating": 4,
        "estimatedCost": 75,
        "isHourly": true,
        "location": "Pasay City",
        "provider": "Joseph",
        "providerId": "jyp4y3rvQ2PJgMenWVDXAGcfxD12"
    },
    {
        "id": "FKwNmt33KFriszx9g0GA",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "Manicure",
        "category": "Grooming",
        "description": "Includes trimming, shaping, filing, and buffing your nails.",
        "rating": 4,
        "estimatedCost": 40,
        "isHourly": true,
        "location": "Quezon City, Ph",
        "provider": "Hanzo Kobayashi",
        "providerId": "hW6Rg8xSKqSvWIC8ZrDcKZEdzhm1"
    },
    {
        "id": "AnBKianiUASEqe40qz8n",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "Laundry",
        "category": "Cleaning",
        "description": "Washing, Drying, and Folding",
        "rating": 4,
        "estimatedCost": 35,
        "isHourly": true,
        "location": "Baguio City",
        "provider": "Drake Law",
        "providerId": "3MCjjDhSQPWiHsqyPUo5NxEJ91E2"
    },
    {
        "id": "lnz0eWx5Zk4S5IKs6KEa",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "Roof Repair",
        "category": "Home Improvements",
        "description": "Provides re-installing of roofs or gutters, and patching on leaks",
        "rating": 3,
        "estimatedCost": 200,
        "isHourly": false,
        "location": "Antipolo, Rizal",
        "provider": "Hanzo Kobayashi",
        "providerId": "hW6Rg8xSKqSvWIC8ZrDcKZEdzhm1"
    },
    {
        "id": "2lSHG7NYgTwx41ZuHFH3",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "Full Body Massage",
        "category": "Lifestyle",
        "description": "Imagine having a spa in your own bedroom. We offer different kind of massages and relaxation therapy.",
        "rating": 3,
        "estimatedCost": 30,
        "isHourly": true,
        "location": "Quezon City",
        "provider": "Drake Law",
        "providerId": "3MCjjDhSQPWiHsqyPUo5NxEJ91E2"
    },
    {
        "id": "x5Kunn0VmZJUcciD3gQh",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "General Home Cleaning",
        "category": "Cleaning",
        "description": "You've just spent almost the whole year in your home. Let us help you keep it clean and comfortable.",
        "rating": 0,
        "estimatedCost": 800,
        "isHourly": false,
        "location": "Metro Manila",
        "provider": "Home Eco",
        "providerId": "XHPa8calCwQCqHHq4B9jz36ToN63"
    },
    {
        "id": "vN32SKNCl2MjmENLCLfk",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "Hair Treatment",
        "category": "Grooming",
        "description": "Get the perfect hair with out special in-home hair treatment services!",
        "rating": 0,
        "estimatedCost": 1000,
        "isHourly": false,
        "location": "Metro Manila",
        "provider": "David Salon",
        "providerId": "L9XSahvIeHPZvOctj2qVS8E9Sw23"
    },
    {
        "id": "tciDHqsNremVp5g10tgq",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "Hair Cutting and Styling",
        "category": "Grooming",
        "description": "Stay sharp and neat with out in-home hair cutting and styling services.",
        "rating": 0,
        "estimatedCost": 300,
        "isHourly": false,
        "location": "Metro Manila",
        "provider": "David Salon",
        "providerId": "L9XSahvIeHPZvOctj2qVS8E9Sw23"
    },
    {
        "id": "euh5wCPDAlbIKprnVtPN",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "Swab Testing",
        "category": "Healthcare",
        "description": "Perform swab testing for the COVID-19 virus.",
        "rating": 0,
        "estimatedCost": 2500,
        "isHourly": false,
        "location": "Metro Manila",
        "provider": "Doc Kho",
        "providerId": "xOqGrtQ9NqcrSgvMwEWJqJdFbCH2"
    },
    {
        "id": "d8lmcB4betieYUVRJNRV",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "English Tutor",
        "category": "Education",
        "description": "Helping young children in learning and being competitive in the English language.",
        "rating": 0,
        "estimatedCost": 150,
        "isHourly": false,
        "location": "Bulacan",
        "provider": "Shane Maglangit",
        "providerId": "dhw3vM5bwoZk13EgwyISRFU6zOh1"
    },
    {
        "id": "aGB6ayZQQW5dn2IrxZs7",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "In-Home Health Consultation",
        "category": "Healthcare",
        "description": "Experiencing medical issues but afraid of going to hospitals? Our health professionals can help you with that.",
        "rating": 0,
        "estimatedCost": 1200,
        "isHourly": false,
        "location": "Metro Manila",
        "provider": "Doc Jess",
        "providerId": "eBH5Nl4fZxRJRWCe2lQh83A7uQu2"
    },
    {
        "id": "YmYV5NE2m2NR87Q7V2nM",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "Tutor",
        "category": "Tutor",
        "description": "Includes cleaning of the interior and exterior of the car",
        "rating": 0,
        "estimatedCost": 125,
        "isHourly": false,
        "location": "Valenzuela",
        "provider": "Jessica Nicole Dela Cruz",
        "providerId": "eq24ZesA1ifDCu0qv2CwA1fFrb92"
    },
    {
        "id": "VhMfprUVEmAf0UbicuWg",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "Car Wash",
        "category": "Cleaning",
        "description": "Includes cleaning of the interior and exterior of the car",
        "rating": 0,
        "estimatedCost": 50,
        "isHourly": false,
        "location": "Taguig City",
        "provider": "Eden",
        "providerId": "PNFkc0kCeBfdQP9nNRZUmFP3lTi2"
    },
    {
        "id": "OugMQwmvDTzpGx2PxKDc",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "In-Home Checkup",
        "category": "Healthcare",
        "description": "Receive health consultation by experts within your doorsteps",
        "rating": 0,
        "estimatedCost": 1200,
        "isHourly": false,
        "location": "Angeles, Pampanga",
        "provider": "Doc Kho",
        "providerId": "xOqGrtQ9NqcrSgvMwEWJqJdFbCH2"
    },
    {
        "id": "KbgyrajBNstureFJamuG",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "Learning Module Tutor",
        "category": "Education",
        "description": "We will assist your children with their learning modules so you won't have to.",
        "rating": 0,
        "estimatedCost": 150,
        "isHourly": false,
        "location": "Angeles, Pampanga",
        "provider": "Aling Amir",
        "providerId": "PXC054j9clfCQJXvLXwbVjGOO7t2"
    },
    {
        "id": "9UoLuNt5NM1HglEqOY9y",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "Traditional Hilot",
        "category": "Lifestyle",
        "description": "Get rid of your body pains with the traditional Filipino hilot.",
        "rating": 0,
        "estimatedCost": 100,
        "isHourly": false,
        "location": "Sampaloc, Manila",
        "provider": "Aling Amir",
        "providerId": "PXC054j9clfCQJXvLXwbVjGOO7t2"
    },
    {
        "id": "5uqm3VzZOOFMLOdbPuuq",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "Personal Driver",
        "category": "Transportation",
        "description": "Need to travel somewhere but don't have a vehicle? We got you covered with our personal drivers.",
        "rating": 0,
        "estimatedCost": 3000,
        "isHourly": false,
        "location": "Metro Manila",
        "provider": "Doc Kho",
        "providerId": "xOqGrtQ9NqcrSgvMwEWJqJdFbCH2"
    },
    {
        "id": "5f2b3wHOMwPCz2HSwRix",
        "thumbnail": "https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "title": "In-Home Psychotherapy",
        "category": "Emotional Aid",
        "description": "We provided in-home psychotherapy sessions with licensed Psychologist and Psychometrician",
        "rating": 0,
        "estimatedCost": 2000,
        "isHourly": false,
        "location": "Metro Manila",
        "provider": "Joko Mang",
        "providerId": "qKRJ6fEOumNexaEiFiNk8JIwdOA3"
    }
]

export default services