const qr = require('qrcode');

exports.seed =  async function (knex, Promise) {
  return knex('bizCards').insert([
    {
      "id": 1,
      "businessName": "Rainy Day Resale",
      "address": "205 E. Main St. LaGrange, KY 40031",
      "phone": "(502) 222-2225",
      "logoPic": "http://www.rainydayresale.com/uploads/2/1/1/2/21125696/published/4261243.jpeg?1510664115",
      "additionalPic": "http://www.rainydayresale.com/uploads/2/1/1/2/21125696/editor/rd3.jpg?1505852505",
      "phone2": null,
      "blurb": "Affordable and stylish clothing for women and girls!",
      "hours": "10AM-6PM, 7 days a week",
      "email": "rainydayresale@gmail.com",
      "website": "http://www.rainydayresale.com/",
      "notes": "Pretty cool store!",
      "qrcode": await qr.toDataURL(`${process.env.FRONT_END}/1`),
      "createdBy": 2
    },
    { 
      "id": 2,
      "businessName": "Downtown Barber",
      "address": "107 N. First St. LaGrange, KY 40031",
      "phone": "(502) 702-9710",
      "logoPic": "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/18301184_1886958604884115_2751028683121151543_n.jpg?_nc_cat=104&_nc_oc=AQnMOqxtFFeJMlbzjJtK_rV3i8ZpSDk7dBqp1ljmGRq34oWUBRsJYXerBMWkBgexFWQ&_nc_ht=scontent-lga3-1.xx&oh=24c3df5db74044f1dfaeab26fa063c14&oe=5DB98588",
      "additionalPic": "https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/16819393_1849024582010851_6698464989765568132_o.jpg?_nc_cat=101&_nc_oc=AQllcLSbhjCLut3G77M2taxa2SM3LZPIDZA2GY7nRyDr0BugycqmhFXnjJETrsgCqVc&_nc_ht=scontent-lga3-1.xx&oh=a207a6903d2b091b8e10a862b2482ce2&oe=5D846BC2",
      "phone2": null,
      "blurb": "Vintage feel, modern convenience!",
      "hours": "10AM-6PM M-F, 8AM-4PM S-S",
      "email": "downtownbarber@gmail.com",
      "website": "https://www.facebook.com/DowntownBarberKY/",
      "notes": "Great cuts!",
      "qrcode": await qr.toDataURL(`${process.env.FRONT_END}/2`),
      "createdBy": 3
     },
    {
      "id": 3,
      "businessName": "Ducking Amazing!",
      "address": "650 Fairmount St. Beech Grove, IN 46107",
      "phone": "(319) 222-9710",
      "logoPic": "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/63561_145645448810198_628980_n.jpg?_nc_cat=110&_nc_oc=AQmlcJ79RvC5KGGvYLWbz_949Di9HUYRxzuTL64mmx6LkJaYfaoibbwhdN91_2rPi6M&_nc_ht=scontent-lga3-1.xx&oh=cb261260c6129493dc64d9b9b39337eb&oe=5DBFA043",
      "additionalPic": null,
      "phone2": null,
      "blurb": "If you can imagine it, I can make it. With duct tape.",
      "hours": null,
      "email": "duckingamazing@gmail.com",
      "website": "https://www.facebook.com/Ducking-Amazing-145644865476923/",
      "notes": "They make pretty awesome wallets.",
      "qrcode": await qr.toDataURL(`${process.env.FRONT_END}3`),
      "createdBy": 1    
    }
  ]);
};
