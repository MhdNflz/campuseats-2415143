const vendors = [
    {
        id: 'my-restaurant',
        name: 'Republic of Ayam Gepuk',
        location: 'Mahallah Salahuddin, Ground Floor',
        openHours: '10:30 am - 10:00 pm',
        isOpen: true,
        menu: [
            {id: 'roag-1', name: 'Set A - Ayam Gepuk', description: 'White rice with fried chicken serve with sambal gepuk, cashew sambal and raw cabbage', 
            price: 8, category: "Food", available: true},
            {id: 'roag-2', name: 'Set B - Ayam Gepuk', description: 'White rice with fried chicken serve with sambal gepuk, cashew sambal, fried cabbage and tempe', 
            price: 12, category: "Food", available: true},
            {id: 'roag-3', name: 'Air Sirap', description: 'tea with ice', 
            price: 1.50, category: "Drinks", available: true},
        ],
    },
    {
        id: 'kafe-salahuddin',
        name: 'Kafe Mahallah Salahuddin',
        location: 'Mahallah Salahuddin, Ground Floor',
        openHours: '7:30 am - 10:00 pm',
        isOpen: true,
        menu: [
            {id: 'sal-1', name: 'Nasi Ayam Goreng', description: 'White rice with fried chicken', 
            price: 8, category: "Food", available: true},
            {id: 'sal-2', name: 'Teh O ais', description: 'tea with ice', 
            price: 2, category: "Drinks", available: true},
        ],
    },
]

export default vendors