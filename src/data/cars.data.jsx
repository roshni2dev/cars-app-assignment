const CARS_DATA = [
    {
        id:'1',
        name: 'Toyota RAV4',
        model: 2021,
        features: [
            {
                allowedPeople: 4,
                limit: '6.1km/1-litre',
                isAutomatic: true,
                isHybrid: true
            }
        ],
        price: 440,
        imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=road-car-vehicle-170811.jpg&fm=jpg',
    },
    {
        id:'2',
        name: 'BMW 3 Series',
        model: 2019,
        features: [
            {
                allowedPeople: 4,
                limit: '8.2km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 350,
        imageUrl: 'https://th.bing.com/th/id/R.b6ced9e3b947d818161117d5ed03b14d?rik=fLjFTA7395Q0oQ&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f291814-Lamborghini_Huracan_LP580-2-car-simple_background.jpg&ehk=%2few8%2fwAJIGl9KFPzHbpt2JI%2bSoWOJsZAa%2faD7806K30%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        id:'3',
        name: 'Volkswagen T-Cross',
        model: 2020,
        features: [
            {
                allowedPeople: 4,
                limit: '5.3km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 400,
        imageUrl: 'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?cs=srgb&dl=alloy-asphalt-auto-241316.jpg&fm=jpg',
    },
    {
        id:'4',
        name: 'Cadillac Escalade',
        model: 2020,
        features: [
            {
                allowedPeople: 4,
                limit: '7.7km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 620,
        imageUrl: 'https://mediapool.bmwgroup.com/cache/P9/201404/P90147840/P90147840-bmw-i8-with-exclusive-full-equipment-package-pure-impulse-04-2014-2247px.jpg'
    },
    {
        id:'5',
        name: 'BMW 4 Series GTI',
        model: 2021,
        features: [
            {
                allowedPeople: 4,
                limit: '7.6km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 530,
        imageUrl: 'https://th.bing.com/th/id/OIP.VvNwHI_XbYNl_c2lN0a-wgHaEK?pid=ImgDet&rs=1',
    },
    {
        id:'6',
        name: 'VBMW 4 Series',
        model: 2019,
        features: [
            {
                allowedPeople: 4,
                limit: '7.2km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 490,
        imageUrl: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/04/cars-to-modify.jpg',
    },
    {
        id:'7',
        name: 'Toyota RAV4',
        model: 2021,
        features: [
            {
                allowedPeople: 4,
                limit: '6.1km/1-litre',
                isAutomatic: true,
                isHybrid: true
            }
        ],
        price: 440,
        imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=road-car-vehicle-170811.jpg&fm=jpg',
    },
    {
        id:'8',
        name: 'BMW 3 Series',
        model: 2019,
        features: [
            {
                allowedPeople: 4,
                limit: '8.2km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 350,
        imageUrl: 'https://th.bing.com/th/id/R.b6ced9e3b947d818161117d5ed03b14d?rik=fLjFTA7395Q0oQ&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f291814-Lamborghini_Huracan_LP580-2-car-simple_background.jpg&ehk=%2few8%2fwAJIGl9KFPzHbpt2JI%2bSoWOJsZAa%2faD7806K30%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        id:'9',
        name: 'Volkswagen T-Cross',
        model: 2020,
        features: [
            {
                allowedPeople: 4,
                limit: '5.3km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 400,
        imageUrl: 'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?cs=srgb&dl=alloy-asphalt-auto-241316.jpg&fm=jpg',
    },
    {
        id:'10',
        name: 'Cadillac Escalade',
        model: 2020,
        features: [
            {
                allowedPeople: 4,
                limit: '7.7km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 620,
        imageUrl: 'https://mediapool.bmwgroup.com/cache/P9/201404/P90147840/P90147840-bmw-i8-with-exclusive-full-equipment-package-pure-impulse-04-2014-2247px.jpg'
    },


  
    {
        id:'11',
        name: 'VBMW 4 Series',
        model: 2019,
        features: [
            {
                allowedPeople: 4,
                limit: '7.2km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 490,
        imageUrl: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/04/cars-to-modify.jpg',
    },
    {
        id:'12',
        name: 'Cadillac Escalade',
        model: 2020,
        features: [
            {
                allowedPeople: 4,
                limit: '7.7km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 620,
        imageUrl: 'https://mediapool.bmwgroup.com/cache/P9/201404/P90147840/P90147840-bmw-i8-with-exclusive-full-equipment-package-pure-impulse-04-2014-2247px.jpg'
    },
    {
        id:'13',
        name: 'BMW 4 Series GTI',
        model: 2021,
        features: [
            {
                allowedPeople: 4,
                limit: '7.6km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 530,
        imageUrl: 'https://th.bing.com/th/id/OIP.VvNwHI_XbYNl_c2lN0a-wgHaEK?pid=ImgDet&rs=1',
    },
    {
        id:'14',
        name: 'Volkswagen T-Cross',
        model: 2020,
        features: [
            {
                allowedPeople: 4,
                limit: '5.3km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 400,
        imageUrl: 'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?cs=srgb&dl=alloy-asphalt-auto-241316.jpg&fm=jpg',
    },
    {
        id:'15',
        name: 'BMW 3 Series',
        model: 2019,
        features: [
            {
                allowedPeople: 4,
                limit: '8.2km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 350,
        imageUrl: 'https://th.bing.com/th/id/R.b6ced9e3b947d818161117d5ed03b14d?rik=fLjFTA7395Q0oQ&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f291814-Lamborghini_Huracan_LP580-2-car-simple_background.jpg&ehk=%2few8%2fwAJIGl9KFPzHbpt2JI%2bSoWOJsZAa%2faD7806K30%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        id:'16',
        name: 'Toyota RAV4',
        model: 2021,
        features: [
            {
                allowedPeople: 4,
                limit: '6.1km/1-litre',
                isAutomatic: true,
                isHybrid: true
            }
        ],
        price: 440,
        imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=road-car-vehicle-170811.jpg&fm=jpg',
    },
    {
        id:'17',
        name: 'Toyota RAV4',
        model: 2021,
        features: [
            {
                allowedPeople: 4,
                limit: '6.1km/1-litre',
                isAutomatic: true,
                isHybrid: true
            }
        ],
        price: 440,
        imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=road-car-vehicle-170811.jpg&fm=jpg',
    },
    {
        id:'18',
        name: 'BMW 3 Series',
        model: 2019,
        features: [
            {
                allowedPeople: 4,
                limit: '8.2km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 350,
        imageUrl: 'https://th.bing.com/th/id/R.b6ced9e3b947d818161117d5ed03b14d?rik=fLjFTA7395Q0oQ&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f291814-Lamborghini_Huracan_LP580-2-car-simple_background.jpg&ehk=%2few8%2fwAJIGl9KFPzHbpt2JI%2bSoWOJsZAa%2faD7806K30%3d&risl=&pid=ImgRaw&r=0'
    },

    {
        id:'19',
        name: 'Cadillac Escalade',
        model: 2020,
        features: [
            {
                allowedPeople: 4,
                limit: '7.7km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 620,
        imageUrl: 'https://mediapool.bmwgroup.com/cache/P9/201404/P90147840/P90147840-bmw-i8-with-exclusive-full-equipment-package-pure-impulse-04-2014-2247px.jpg'
    },
    {
        id:'20',
        name: 'Volkswagen T-Cross',
        model: 2020,
        features: [
            {
                allowedPeople: 4,
                limit: '5.3km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 400,
        imageUrl: 'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?cs=srgb&dl=alloy-asphalt-auto-241316.jpg&fm=jpg',
    },

 
    {
        id:'21',
        name: 'Toyota RAV4',
        model: 2021,
        features: [
            {
                allowedPeople: 4,
                limit: '6.1km/1-litre',
                isAutomatic: true,
                isHybrid: true
            }
        ],
        price: 440,
        imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960'
    },
    {
        id:'22',
        name: 'BMW 3 Series',
        model: 2019,
        features: [
            {
                allowedPeople: 4,
                limit: '8.2km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 350,
        imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/GLA/10849/1690447163011/front-left-side-47.jpg?impolicy=resize&imwidth=480'
    },
    {
        id:'23',
        name: 'Volkswagen T-Cross',
        model: 2020,
        features: [
            {
                allowedPeople: 4,
                limit: '5.3km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 400,
        imageUrl: 'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?cs=srgb&dl=alloy-asphalt-auto-241316.jpg&fm=jpg',
    },
    {
        id:'24',
        name: 'Cadillac Escalade',
        model: 2020,
        features: [
            {
                allowedPeople: 4,
                limit: '7.7km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 620,
        imageUrl: 'https://mediapool.bmwgroup.com/cache/P9/201404/P90147840/P90147840-bmw-i8-with-exclusive-full-equipment-package-pure-impulse-04-2014-2247px.jpg'
    },
    {
        id:'25',
        name: 'BMW 4 Series GTI',
        model: 2021,
        features: [
            {
                allowedPeople: 4,
                limit: '7.6km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 530,
        imageUrl: 'https://th.bing.com/th/id/OIP.VvNwHI_XbYNl_c2lN0a-wgHaEK?pid=ImgDet&rs=1',
    },
    {
        id:'26',
        name: 'VBMW 4 Series',
        model: 2019,
        features: [
            {
                allowedPeople: 4,
                limit: '7.2km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 490,
        imageUrl: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/04/cars-to-modify.jpg',
    },
    {
        id:'27',
        name: 'Toyota RAV4',
        model: 2021,
        features: [
            {
                allowedPeople: 4,
                limit: '6.1km/1-litre',
                isAutomatic: true,
                isHybrid: true
            }
        ],
        price: 440,
        imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=road-car-vehicle-170811.jpg&fm=jpg',
    },
    {
        id:'28',
        name: 'BMW 3 Series',
        model: 2019,
        features: [
            {
                allowedPeople: 4,
                limit: '8.2km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 350,
        imageUrl: 'https://th.bing.com/th/id/R.b6ced9e3b947d818161117d5ed03b14d?rik=fLjFTA7395Q0oQ&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f291814-Lamborghini_Huracan_LP580-2-car-simple_background.jpg&ehk=%2few8%2fwAJIGl9KFPzHbpt2JI%2bSoWOJsZAa%2faD7806K30%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        id:'29',
        name: 'Volkswagen T-Cross',
        model: 2020,
        features: [
            {
                allowedPeople: 4,
                limit: '5.3km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 400,
        imageUrl: 'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?cs=srgb&dl=alloy-asphalt-auto-241316.jpg&fm=jpg',
    },
    {
        id:'30',
        name: 'Cadillac Escalade',
        model: 2020,
        features: [
            {
                allowedPeople: 4,
                limit: '7.7km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 620,
        imageUrl: 'https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-2-Series-Gran-Coupe-271220221147.jpg&w=872&h=578&q=75&c=1'
    },


  
    {
        id:'31',
        name: 'VBMW 4 Series',
        model: 2019,
        features: [
            {
                allowedPeople: 4,
                limit: '7.2km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 490,
        imageUrl: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/04/cars-to-modify.jpg',
    },
    {
        id:'32',
        name: 'Cadillac Escalade',
        model: 2020,
        features: [
            {
                allowedPeople: 4,
                limit: '7.7km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 620,
        imageUrl: 'https://mediapool.bmwgroup.com/cache/P9/201404/P90147840/P90147840-bmw-i8-with-exclusive-full-equipment-package-pure-impulse-04-2014-2247px.jpg'
    },
    {
        id:'33',
        name: 'BMW 4 Series GTI',
        model: 2021,
        features: [
            {
                allowedPeople: 4,
                limit: '7.6km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 530,
        imageUrl: 'https://th.bing.com/th/id/OIP.VvNwHI_XbYNl_c2lN0a-wgHaEK?pid=ImgDet&rs=1',
    },
    {
        id:'34',
        name: 'Volkswagen T-Cross',
        model: 2020,
        features: [
            {
                allowedPeople: 4,
                limit: '5.3km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 400,
        imageUrl: 'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?cs=srgb&dl=alloy-asphalt-auto-241316.jpg&fm=jpg',
    },
    {
        id:'35',
        name: 'BMW 3 Series',
        model: 2019,
        features: [
            {
                allowedPeople: 4,
                limit: '8.2km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 350,
        imageUrl: 'https://th.bing.com/th/id/R.b6ced9e3b947d818161117d5ed03b14d?rik=fLjFTA7395Q0oQ&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f291814-Lamborghini_Huracan_LP580-2-car-simple_background.jpg&ehk=%2few8%2fwAJIGl9KFPzHbpt2JI%2bSoWOJsZAa%2faD7806K30%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        id:'36',
        name: 'Toyota RAV4',
        model: 2021,
        features: [
            {
                allowedPeople: 4,
                limit: '6.1km/1-litre',
                isAutomatic: true,
                isHybrid: true
            }
        ],
        price: 440,
        imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=road-car-vehicle-170811.jpg&fm=jpg',
    },
    {
        id:'37',
        name: 'Toyota RAV4',
        model: 2021,
        features: [
            {
                allowedPeople: 4,
                limit: '6.1km/1-litre',
                isAutomatic: true,
                isHybrid: true
            }
        ],
        price: 440,
        imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=road-car-vehicle-170811.jpg&fm=jpg',
    },
    {
        id:'38',
        name: 'BMW 3 Series',
        model: 2019,
        features: [
            {
                allowedPeople: 4,
                limit: '8.2km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 350,
        imageUrl: 'https://th.bing.com/th/id/R.b6ced9e3b947d818161117d5ed03b14d?rik=fLjFTA7395Q0oQ&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f291814-Lamborghini_Huracan_LP580-2-car-simple_background.jpg&ehk=%2few8%2fwAJIGl9KFPzHbpt2JI%2bSoWOJsZAa%2faD7806K30%3d&risl=&pid=ImgRaw&r=0'
    },

    {
        id:'39',
        name: 'Cadillac Escalade',
        model: 2020,
        features: [
            {
                allowedPeople: 4,
                limit: '7.7km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 620,
        imageUrl: 'https://mediapool.bmwgroup.com/cache/P9/201404/P90147840/P90147840-bmw-i8-with-exclusive-full-equipment-package-pure-impulse-04-2014-2247px.jpg'
    },
    {
        id:'40',
        name: 'Volkswagen T-Cross',
        model: 2020,
        features: [
            {
                allowedPeople: 4,
                limit: '5.3km/1-litre',
                isAutomatic: true,
                isHybrid: false
            }
        ],
        price: 400,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfV60GZWYJMQmoORIW6UbMhXDYRLs-OFOdqw&usqp=CAU'
    },


]

export default CARS_DATA